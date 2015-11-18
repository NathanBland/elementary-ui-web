function dashboard(locals) {
var jade_debug = [ new jade.DebugItem( 1, "dashboard.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (data, undefined, user) {
jade_debug.unshift(new jade.DebugItem( 0, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "dashboard.jade" ));
buf.push("<div>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
buf.push(" ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "dashboard.jade" ));
buf.push("<h1>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
buf.push(" Welcome " + (jade.escape((jade_interp = user.username) == null ? '' : jade_interp)) + "");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "dashboard.jade" ));
buf.push("<button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored add\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "dashboard.jade" ));
buf.push("<i class=\"material-icons\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("add");
jade_debug.shift();
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "dashboard.jade" ));
buf.push("<div class=\"note__container\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "dashboard.jade" ));
if ( data.length > 0)
{
jade_debug.unshift(new jade.DebugItem( 7, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "dashboard.jade" ));
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
      var note = $$obj[idx];

jade_debug.unshift(new jade.DebugItem( 7, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "dashboard.jade" ));
buf.push("<div class=\"note__card mdl-card mdl-shadow--4dp\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "dashboard.jade" ));
buf.push("<div class=\"mdl-card__title\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "dashboard.jade" ));
buf.push("<h2 class=\"mdl-card__title-text\">" + (jade.escape(null == (jade_interp = note.title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "dashboard.jade" ));
buf.push("<div class=\"mdl-card__supporting-text\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "dashboard.jade" ));
buf.push("<p>" + (jade.escape(null == (jade_interp = note.content) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "dashboard.jade" ));
buf.push("<div class=\"mdl-card__actions mdl-card--border\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "dashboard.jade" ));
buf.push("<button" + (jade.attr("id", '' + (note.alias) + '', true, false)) + " class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "dashboard.jade" ));
buf.push("<i class=\"material-icons\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, jade_debug[0].filename ));
buf.push("edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;      var note = $$obj[idx];

jade_debug.unshift(new jade.DebugItem( 7, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "dashboard.jade" ));
buf.push("<div class=\"note__card mdl-card mdl-shadow--4dp\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "dashboard.jade" ));
buf.push("<div class=\"mdl-card__title\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, "dashboard.jade" ));
buf.push("<h2 class=\"mdl-card__title-text\">" + (jade.escape(null == (jade_interp = note.title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "dashboard.jade" ));
buf.push("<div class=\"mdl-card__supporting-text\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "dashboard.jade" ));
buf.push("<p>" + (jade.escape(null == (jade_interp = note.content) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "dashboard.jade" ));
buf.push("<div class=\"mdl-card__actions mdl-card--border\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "dashboard.jade" ));
buf.push("<button" + (jade.attr("id", '' + (note.alias) + '', true, false)) + " class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "dashboard.jade" ));
buf.push("<i class=\"material-icons\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, jade_debug[0].filename ));
buf.push("edit");
jade_debug.shift();
jade_debug.shift();
buf.push("</i>");
jade_debug.shift();
jade_debug.shift();
buf.push("</button>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 17, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "dashboard.jade" ));
buf.push("<div class=\"no-notes\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, "dashboard.jade" ));
buf.push("<p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, jade_debug[0].filename ));
buf.push("Looks like you don't have any notes =/");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "dashboard.jade" ));
buf.push("<p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 19, jade_debug[0].filename ));
buf.push("Why not ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "dashboard.jade" ));
buf.push("<a>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, jade_debug[0].filename ));
buf.push("add ");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "dashboard.jade" ));
buf.push("a few?");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div \n  h1  Welcome #{user.username}\n    button.mdl-button.mdl-js-button.mdl-button--fab.mdl-js-ripple-effect.mdl-button--colored.add\n      i.material-icons add\n  .note__container\n    if data.length > 0\n      each note, idx in data\n        .note__card.mdl-card.mdl-shadow--4dp\n          .mdl-card__title\n            h2.mdl-card__title-text= note.title\n          .mdl-card__supporting-text\n            p= note.content\n          .mdl-card__actions.mdl-card--border\n            button.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect(id='#{note.alias}')\n              i.material-icons edit\n    else \n      div.no-notes\n        p Looks like you don't have any notes =/\n        p Why not \n          a add \n          | a few?\n");
}
}