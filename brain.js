// ==========================
// Quti AI v9.0
// brain.js
// ==========================

async function askBrain(message){

    // OFFLINE
    if(CONFIG.AI_PROVIDER === "offline"){

        return getOfflineReply(message);

    }

    // GEMINI
    if(CONFIG.AI_PROVIDER === "gemini"){

        if(typeof askGemini === "function"){

            return await askGemini(message);

        }

    }

    // OPENAI
    if(CONFIG.AI_PROVIDER === "openai"){

        if(typeof askOpenAI === "function"){

            return await askOpenAI(message);

        }

    }

        // Fallback
    return getOfflineReply(message);
}

// ==========================
// Offline Brain
// ==========================

function getOfflineReply(message){

    const msg = message.toLowerCase().trim();

    if(msg==="hi" || msg==="hello" || msg==="hallo"){

        return "Hello! I am Quti AI. How can I help you?";

    }

    if(msg==="how are you"){

        return "I am fine. Thank you.";

    }

    if(msg==="who are you"){

        return "I am Quti AI, your personal AI assistant.";

    }

    if(msg==="bye"){

        return "Goodbye! Have a wonderful day.";

    }

    if(msg==="thank you"){

        return "You're welcome.";

    }

    return "I don't know the answer yet. When Gemini or OpenAI is enabled, I can answer much more.";
}