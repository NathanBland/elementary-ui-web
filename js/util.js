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
function postForm (api, data) {
  fetch(base+api, {
    method: 'post',
    body: data
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      console.log('json:', json)
    })
    .catch(function (ex) {
      console.warn('err:', ex)
    })

}
var base = 'https://elementary-server-nathanbland.c9.io/api/v1'
function initialListeners () {
  var signUp = document.querySelector('#signUp')
  var signIn = document.querySelector('#signIn')

  signUp.addEventListener('submit', function (e) {
    e.preventDefault()
    postForm('/auth/local/register', new FormData(signUp))
  })
  signIn.addEventListener('submit', function (e) {
    e.preventDefault()
    postForm('/auth/local/login', new FormData(signIn))
  })
}
initialListeners()
