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
buf.push("<button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">");
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
if ( data.length > 0)
{
jade_debug.unshift(new jade.DebugItem( 6, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 6, "dashboard.jade" ));
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {

    for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
      var note = $$obj[idx];

jade_debug.unshift(new jade.DebugItem( 6, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "dashboard.jade" ));
buf.push("<div class=\"note\">" + (jade.escape(null == (jade_interp = note) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;      var note = $$obj[idx];

jade_debug.unshift(new jade.DebugItem( 6, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "dashboard.jade" ));
buf.push("<div class=\"note\">" + (jade.escape(null == (jade_interp = note) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
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
jade_debug.unshift(new jade.DebugItem( 9, "dashboard.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "dashboard.jade" ));
buf.push("<p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
buf.push("Looks like you don't have any notes =/");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "dashboard.jade" ));
buf.push("<p>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
buf.push("Why not ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "dashboard.jade" ));
buf.push("<a>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, jade_debug[0].filename ));
buf.push("add ");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "dashboard.jade" ));
buf.push("a few?");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"data" in locals_for_with?locals_for_with.data:typeof data!=="undefined"?data:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div \n  h1  Welcome #{user.username}\n    button.mdl-button.mdl-js-button.mdl-button--fab.mdl-js-ripple-effect.mdl-button--colored\n      i.material-icons add\n  if data.length > 0\n    each note, idx in data\n      .note= note\n  else \n    p Looks like you don't have any notes =/\n    p Why not \n      a add \n      | a few?\n");
}
}