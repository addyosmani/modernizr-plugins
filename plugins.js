/*
 * Extra Modernizr Plugins/feature tests
 * Copyright Addy Osmani, 2011.
 * Released under an MIT/GPL license
 * todo: split out into individual files
 */

// Microdata support
Modernizr.addTest('microdata', !!(document["getItems"]);

// Mozilla Audio API
Modernizr.addTest('audioDataApi', !!new Audio().mozSetup);

// WebAudio API
Modernizr.addTest('webAudioApi', !!(window.webkitAudioContext || window.AudioContext));

// Generic Audio/WebAudio API support
Modernizr.addTest('audioAPIs', !!(window.webkitAudioContext || window.AudioContext || (new Audio().mozSetup));
});

// Track API
Modernizr.addTest('trackApi', (typeof (document.createElement("video").addTextTrack) === "function"));

// EventSource API
Modernizr.addTest('eventSource', ("EventSource" in window));

// APNG Animated PNG support
Modernizr.addTest('apng', function () {
    var canvas = document.createElement("canvas");
    if !! (typeof canvas.getContext == "undefined") {
        var apngTest = new Image(),
            ctx = document.createElement("canvas").getContext("2d");
        apngTest.onload = function () {
            ctx.drawImage(apngTest, 0, 0);
            return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
        };
        apngTest.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==";
        // frame 1 (skipped on apng-supporting browsers): [0, 0, 0, 255]
        // frame 2: [0, 0, 0, 0]
    }
});

// Progress <progress>
Modernizr.addTest('progress', ('position' in document.createElement('progress')));

// contextMenu API (Chrome, FF8)
Modernizr.addTest('contextMenuApi', ('HTMLMenuItemElement' in window && 'contextMenu' in document.body));

// ClassList support
Modernizr.addTest('classList', ("classList" in document.createElement("a")));