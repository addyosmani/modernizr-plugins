// Mozilla Audio Data API: https://wiki.mozilla.org/Audio_Data_API
// WebKit Audio API: https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html
// By Addy Osmani
Modernizr.addTest('mozwebAudio', !!(window.webkitAudioContext || window.AudioContext || window.Audio));
