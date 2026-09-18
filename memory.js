// ==========================
// QUTI AI OFFICIAL v9
// memory.js
// ==========================

function saveName(name){

    localStorage.setItem("Quti_name", name);

}

function getName(){

    return localStorage.getItem("Quti_name");

}

function memoryReply(message){

    const msg = message.toLowerCase().trim();

    if(msg.startsWith("my name is ")){

        const name = message.substring(11).trim();

        saveName(name);

        return "Nice to meet you, " + name + ".";

    }

    if(msg==="who am i" || msg==="what is my name"){

        const name = getName();

        if(name){

            return "Your name is " + name + ".";

        }

        return "I don't know your name yet.";

    }

    return null;

}
// ==========================
// Quti Profile Memory v10
// ==========================

let profile = JSON.parse(localStorage.getItem("qutiProfile")) || {};

function setProfile(key, value){

    profile[key] = value;

    localStorage.setItem(
        "qutiProfile",
        JSON.stringify(profile)
    );

}

function getProfile(key){

    return profile[key] || null;

}