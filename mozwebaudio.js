Modernizr.addTest('mozwebAudio', !!(window.webkitAudioContext || window.AudioContext || (new Audio().mozSetup));
});