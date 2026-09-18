// ==========================
// Quti Privacy v10
// ==========================

const PRIVACY_KEY = "quti_privacy";

const privacy = {
    version: "1.0",

    allowInternet: false,

    allowAI: false,

    allowAnalytics: false,

    allowMicrophone: true,

    allowMemory: true
};

function loadPrivacy(){

    const data = localStorage.getItem(PRIVACY_KEY);

    if(data){

        return JSON.parse(data);

    }

    localStorage.setItem(
        PRIVACY_KEY,
        JSON.stringify(privacy)
    );

    return privacy;

}

let qutiPrivacy = loadPrivacy();

function savePrivacy(){

    localStorage.setItem(
        PRIVACY_KEY,
        JSON.stringify(qutiPrivacy)
    );

}