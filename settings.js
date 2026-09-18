
// ==========================// Quti Settings v10// ==========================
const SETTINGS_KEY = "quti_settings";
const defaultSettings = {language: "auto",theme: "dark",voice: true,memory: true,onlineMode: false,privacyMode: true};
function loadSettings(){
const saved = localStorage.getItem(SETTINGS_KEY);if(saved){ return JSON.parse(saved);}localStorage.setItem( SETTINGS_KEY, JSON.stringify(defaultSettings));return defaultSettings;
}
let qutiSettings = loadSettings();
function saveSettings(){
localStorage.setItem( SETTINGS_KEY, JSON.stringify(qutiSettings));
}
// ==========================// Settings Panel// ==========================
window.addEventListener("load", function(){
const panel = document.getElementById("settingsPanel");const openBtn = document.getElementById("settingsTab");;const closeBtn = document.getElementById("closeSettings");if(openBtn){ openBtn.onclick = function(){ panel.style.display = "flex"; };}if(closeBtn){ closeBtn.onclick = function(){ panel.style.display = "none"; };}
});// ==========================// Live Settings// ==========================
function toggleVoice(){
qutiSettings.voice = !qutiSettings.voice;saveSettings();alert("Voice : " + (qutiSettings.voice ? "ON" : "OFF"));
}
function toggleOnline(){
qutiSettings.onlineMode = !qutiSettings.onlineMode;saveSettings();alert("Online Mode : " + (qutiSettings.onlineMode ? "ON" : "OFF"));
}
function togglePrivacy(){
qutiSettings.privacyMode = !qutiSettings.privacyMode;saveSettings();alert("Privacy Mode : " + (qutiSettings.privacyMode ? "ON" : "OFF"));
}// ==========================// Live Switches// ==========================
window.addEventListener("load", function(){
const voice = document.getElementById("voiceSwitch");const online = document.getElementById("onlineSwitch");const privacy = document.getElementById("privacySwitch");if(voice){ voice.checked = qutiSettings.voice; voice.onchange = function(){ qutiSettings.voice = this.checked; saveSettings(); };}if(online){ online.checked = qutiSettings.onlineMode; online.onchange = function(){ qutiSettings.onlineMode = this.checked; saveSettings(); };}if(privacy){ privacy.checked = qutiSettings.privacyMode; privacy.onchange = function(){ qutiSettings.privacyMode = this.checked; saveSettings(); };}
});