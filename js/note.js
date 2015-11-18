function note(locals) {
var jade_debug = [ new jade.DebugItem( 1, "note.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (note) {
jade_debug.unshift(new jade.DebugItem( 0, "note.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "note.jade" ));
buf.push("<div class=\"note__card mdl-card mdl-shadow--4dp\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "note.jade" ));
buf.push("<div class=\"mdl-card__title\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "note.jade" ));
buf.push("<h2 class=\"mdl-card__title-text\">" + (jade.escape(null == (jade_interp = note.title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "note.jade" ));
buf.push("<div class=\"mdl-card__supporting-text\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "note.jade" ));
buf.push("<p>" + (jade.escape(null == (jade_interp = note.content) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "note.jade" ));
buf.push("<div class=\"mdl-card__actions mdl-card--border\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, "note.jade" ));
buf.push("<button" + (jade.attr("id", '' + (note.alias) + '', true, false)) + " class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "note.jade" ));
buf.push("<i class=\"material-icons\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
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
jade_debug.shift();}.call(this,"note" in locals_for_with?locals_for_with.note:typeof note!=="undefined"?note:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".note__card.mdl-card.mdl-shadow--4dp\n  .mdl-card__title\n    h2.mdl-card__title-text= note.title\n  .mdl-card__supporting-text\n    p= note.content\n  .mdl-card__actions.mdl-card--border\n    button.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect(id='#{note.alias}')\n      i.material-icons edit\n");
}
}