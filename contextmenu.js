// ContextMenu
// https://bug617528.bugzilla.mozilla.org/attachment.cgi?id=554309
// By Addy Osmani
Modernizr.addTest('contextMenuApi', !!('HTMLMenuItemElement' in window && 'contextMenu' in document.body));
