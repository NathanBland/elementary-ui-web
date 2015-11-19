/*
fetch('https://elementary-server-nathanbland.c9.io/')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
*/

var apiBase = 'https://elementary-server-nathanbland.c9.io/api/v1'
var token = ''
var user = {}
function fetchContent (resource) {
  return fetch(apiBase +
     '/content/' +
     resource +
     '?access_token=' +
     token, {
       method: 'get',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     })
    .then(function (response) {
      return response.text()
    })
    .then(function (data) {
      return JSON.parse(data)
    })
}

function fetchTemplate (name) {
  return fetch('js/' + name + '.js', {
    headers: {
      'Accept': 'text/javascript'
    }
  })
    .then(function (response) {
      return response.text()
    })
    .then(function (body) {
      return body
    })
}
function fetchGetNote (note) {
  fetchContent('note/' + note)
    .then(function (data) {
      return data
    })
}
function fetchPushNote (type, api, data, ecb, cb) {
  var method = ''
  switch (type) {
    case 'new':
      method = 'post'
      break
    case 'update':
      method = 'put'
      break
    default:
      method = 'post'
  }
  fetch(apiBase +
    '/content/' +
    api +
    '?access_token=' +
    token, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: data
  })
  .then(function (response) {
    console.log('response:', response)
    if (response.status > 399) {
      ecb(response)
    }
    return response.json()
  })
  .then(function (json) {
    console.log('json:', json)
    if (json.error) {
      ecb(json)
    } else {
      cb(json)
    }
  })
  .catch(function (ex) {
    console.warn('err:', ex)
  })
}
function initNewNote () {
  var container = document.querySelector('.note__container')
  fetchTemplate('newNote')
    .then(function (newNote) {
      window.eval(newNote)
      var noteHtml = document.createElement('div')
      noteHtml.innerHTML = window.newNote()
      // var input = noteHtml.querySelector('input')
      // var content = noteHtml.querySelector('textarea')
      console.log('noteHtml', noteHtml)
      container.insertBefore(noteHtml, container.firstChild)
      componentHandler.upgradeDom()
      var form = container.querySelector('form')
      form.addEventListener('submit', function (e) {
        e.preventDefault()
        var prog = form.querySelector('.note__card__progress')
        prog.classList.add('visible')
        fetchPushNote('new', 'note', JSON.stringify(getFormData(form)),
          function (error) {
            console.log('error saving new note:', error)
            prog.classList.remove('visible')
          },
          function (success) {
            prog.classList.remove('visible')
            console.log('new note added succesfully:', success)
            console.log('note is:', success.alias)
            fetchContent('note/' + success.alias)
              .then(function (data) {
                console.log('got data back:', data)
                fetchTemplate('note')
                  .then(function (note) {
                    window.eval(note)
                    noteHtml.innerHTML = window.note({note: data})
                  })
              })
          }
        )
      })
      var old = document.querySelector('.no-notes')
      old.remove()
    })
}
function initDashboardMenu () {
  var menus = document.querySelectorAll('nav.mdl-navigation')
  for (var i = 0; i < menus.length; i++) {
    var link = document.createElement('a')
    link.className = 'mdl-navigation__link'
    link.setAttribute('href', '/')
    link.textContent = 'Sign Out'
    link.addEventListener('click', function (e) {
      e.preventDefault()
      token = ''
      document.location.reload(true);
    })
    menus[i].innerHTML = ''
    console.log('link to add:', link)
    menus[i].appendChild(link)
  }
}

function initDashboard () {
  var main = document.querySelector('main.mdl-layout__content')
  fetchTemplate('dashboard')
    .then(function (dash) {
      window.eval(dash)
      initDashboardMenu()
      fetchContent('note')
        .then(function (data) {
          console.log('data to tmpl:', data)
          console.log('user is:', user)
          main.innerHTML = window.dashboard({data: data.data, user: user})
          var add = document.querySelector('button.add')
          add.addEventListener('click', function (e) {
            console.log('click new')
            initNewNote()
          })
        })
    })
}

function handleSuccessLogin (data) {
  if (data.token) {
    token = data.token
    // console.log('token set:', token)
    var tokenArray = token.split('.')
    user.username = JSON.parse(atob(tokenArray[1])).username
    console.log(user.username)
    initDashboard()
  }
}

function handleErrorLogin (data) {
  var container = document.querySelector('.error__message')
  var loader = document.querySelector('.landing.mdl-progress')
  loader.classList.remove('visible')
  var span = container.querySelector('span')
  if (data.error) {
    span.textContent = data.error.message
  } else {
    var msg = ''
    switch (data.status) {
      case 400:
        msg = 'Sorry, username already in use.'
        break
      case 401:
        msg = 'Sorry, invalid username or password.'
        break
      default:
        msg = 'Something is wrong, try again later.'
    }
    span.textContent = msg
  }
  container.classList.add('error__message--visible')
  setTimeout(function () {
    container.classList.remove('error__message--visible')
  }, 3000)
}

function postForm (api, data, ecb, cb) {
  fetch(apiBase + api, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data
  })
    .then(function (response) {
      console.log('response:', response)
      if (response.status > 399) {
        ecb(response)
      }
      return response.json()
    })
    .then(function (json) {
      console.log('json:', json)
      if (json.error) {
        ecb(json)
      } else {
        cb(json)
      }
    })
    .catch(function (ex) {
      console.warn('err:', ex)
    })
}

function getFormData (form) {
  var data = {}
  var items = form.querySelectorAll('input, textarea')
  for (var i = 0; i < items.length; i++) {
    data[items[i].name] = items[i].value
  }
  return data
}
function initLanding () {
  var signUp = document.querySelector('#signUp')
  var signIn = document.querySelector('#signIn')
  var loader = document.querySelector('.landing.mdl-progress')
  signUp.addEventListener('submit', function (e) {
    e.preventDefault()
    postForm('/auth/local/register',
      JSON.stringify(getFormData(signUp)),
      handleErrorLogin, handleSuccessLogin)
    signUp.reset()
    loader.classList.add('visible')
  })
  signIn.addEventListener('submit', function (e) {
    e.preventDefault()
    postForm('/auth/local/login',
      JSON.stringify(getFormData(signIn)),
      handleErrorLogin, handleSuccessLogin)
    signIn.reset()
    loader.classList.add('visible')
  })
}

initLanding()
