// ==========================
// QUTI AI OFFICIAL v9
// voice.js - NORMAL VOICE
// ==========================


// ==========================
// AUDIO UNLOCK
// ==========================

let qutiAudioUnlocked = false;

function unlockQutiAudio() {

    if (qutiAudioUnlocked) {
        return;
    }

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            qutiAudioUnlocked = true;
            return;
        }

        const ctx = new AudioContext();

        if (ctx.state === "suspended") {
            ctx.resume();
        }

        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        gain.gain.value = 0.00001;

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start();
        oscillator.stop(ctx.currentTime + 0.01);

        qutiAudioUnlocked = true;

    } catch (error) {

        console.log(
            "Audio unlock skipped:",
            error
        );

    }
}


// ==========================
// NORMAL PHONE / BROWSER VOICE
// ==========================

function speak(text) {

    return new Promise(function(resolve) {

        if (!text || !String(text).trim()) {
            resolve();
            return;
        }

        if (!("speechSynthesis" in window)) {

            console.log(
                "Speech synthesis not supported."
            );

            resolve();
            return;
        }


        // Remove emoji
        text = String(text)
            .replace(
                /[\u{1F300}-\u{1FAFF}]/gu,
                ""
            )
            .trim();


        if (!text) {
            resolve();
            return;
        }


        const avatarRing =
            document.querySelector(".avatar-ring");

        const avatar =
            document.getElementById("avatar");


        // Talking animation ON

        if (avatarRing) {
            avatarRing.classList.add("talking");
        }

        if (avatar) {
            avatar.classList.add("talking");
        }


        try {

            // Stop previous speech

            window.speechSynthesis.cancel();


            const utterance =
                new SpeechSynthesisUtterance(text);


            // Hindi / English automatic language

            if (/[\u0900-\u097F]/.test(text)) {

                utterance.lang = "hi-IN";

            } else {

                utterance.lang = "en-IN";

            }


            utterance.rate = 1;
            utterance.pitch = 1;
            utterance.volume = 1;


            let finished = false;


            function finishSpeech() {

                if (finished) {
                    return;
                }

                finished = true;

                stopQutiTalking();

                resolve();

            }


            utterance.onend =
                finishSpeech;


            utterance.onerror =
                function(error) {

                    console.log(
                        "Quti normal voice error:",
                        error
                    );

                    finishSpeech();

                };


            // Speak

            window.speechSynthesis.speak(
                utterance
            );


            // Android Chrome कभी-कभी speech को बीच में रोक देता है.
            // इसलिए speech को alive रखने के लिए छोटा resume check.

            const keepAlive =
                setInterval(function() {

                    if (
                        !window.speechSynthesis.speaking ||
                        finished
                    ) {

                        clearInterval(
                            keepAlive
                        );

                        return;
                    }

                    try {
                        window.speechSynthesis.resume();
                    } catch (e) {}

                }, 500);


            const oldFinish =
                finishSpeech;

        } catch (error) {

            console.log(
                "Quti voice failed:",
                error
            );

            stopQutiTalking();

            resolve();

        }

    });

}


// ==========================
// STOP TALKING
// ==========================

function stopQutiTalking() {

    const avatarRing =
        document.querySelector(".avatar-ring");

    const avatar =
        document.getElementById("avatar");


    if (avatarRing) {

        avatarRing.classList.remove(
            "talking"
        );

    }


    if (avatar) {

        avatar.classList.remove(
            "talking"
        );

    }

}


// Make functions available globally

window.speak =
    speak;

window.stopQutiTalking =
    stopQutiTalking;

window.unlockQutiAudio =
    unlockQutiAudio;


// ==========================
// VOICE RECOGNITION
// ==========================

if (
    "webkitSpeechRecognition" in window ||
    "SpeechRecognition" in window
) {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    const recognition =
        new SpeechRecognition();


    recognition.lang =
        "hi-IN";

    recognition.interimResults =
        false;

    recognition.maxAlternatives =
        1;


    let isListening =
        false;


    const voiceBtn =
        document.getElementById(
            "voiceBtn"
        );


    const avatar =
        document.getElementById(
            "avatar"
        );


    // ==========================
    // VOICE COMMAND NORMALIZER
    // ==========================

    function normalizeVoiceCommand(text) {

        let msg =
            String(text || "")
                .toLowerCase()
                .trim();


        const replacements = {

            // Greetings

            "हेलो": "hello",
            "हैलो": "hello",
            "नमस्ते": "hello",


            // Time

            "टाइम": "time",
            "समय": "time",


            // Date

            "डेट": "date",
            "तारीख": "date",


            // Battery

            "बैटरी": "battery",
            "बैटरी प्रतिशत":
                "battery percentage",
            "बैटरी लेवल":
                "battery level",


            // Apps

            "यूट्यूब": "youtube",
            "व्हाट्सएप": "whatsapp",
            "वाट्सएप": "whatsapp",
            "इंस्टाग्राम": "instagram",
            "फेसबुक": "facebook",
            "गूगल": "google",
            "क्रोम": "chrome",
            "टेलीग्राम": "telegram",
            "जीमेल": "gmail",
            "कैमरा": "camera",
            "सेटिंग": "settings",
            "सेटिंग्स": "settings",
            "गैलरी": "gallery",


            // Memory

            "मेरा नाम क्या है":
                "what is my name",

            "मेरा नाम क्या हैं":
                "what is my name",

            "मैं कौन हूं":
                "who am i",

            "मैं कौन हूँ":
                "who am i",


            // Quti

            "तुम कौन हो":
                "who are you",

            "आप कौन हो":
                "who are you",


            // Thanks

            "धन्यवाद":
                "thank you",

            "शुक्रिया":
                "thank you"

        };


        for (
            const hindi in replacements
        ) {

            if (msg === hindi) {

                msg =
                    replacements[hindi];

                break;

            }

        }


        return msg;

    }


    // ==========================
    // VOICE BUTTON
    // ==========================

    if (voiceBtn) {

        voiceBtn.addEventListener(
            "click",
            function() {


                // Unlock audio

                unlockQutiAudio();


                // Already listening

                if (isListening) {
                    return;
                }


                isListening =
                    true;


                if (avatar) {

                    avatar.classList.add(
                        "talking"
                    );

                }


                try {

                    recognition.start();

                } catch (error) {

                    console.log(
                        "Recognition start error:",
                        error
                    );

                    isListening =
                        false;

                }

            }
        );

    }


    // ==========================
    // VOICE RESULT
    // ==========================

    recognition.onresult =
        function(event) {


            const text =
                event.results[0][0]
                    .transcript;


            console.log(
                "Quti heard:",
                text
            );


            const normalizedText =
                normalizeVoiceCommand(
                    text
                );


            const input =
                document.getElementById(
                    "userInput"
                ) ||
                document.getElementById(
                    "msg"
                );


            if (input) {

                input.value =
                    normalizedText;

            }


            // Send through existing
            // text system

            if (
                typeof window.sendMessage ===
                "function"
            ) {

                window.sendMessage();

            } else if (
                typeof sendMessage ===
                "function"
            ) {

                sendMessage();

            } else {

                console.log(
                    "Quti sendMessage not found."
                );

            }

        };


    // ==========================
    // VOICE ERROR
    // ==========================

    recognition.onerror =
        function(error) {

            console.log(
                "Voice recognition error:",
                error
            );


            isListening =
                false;


            if (avatar) {

                avatar.classList.remove(
                    "talking"
                );

            }

        };


    // ==========================
    // VOICE END
    // ==========================

    recognition.onend =
        function() {

            isListening =
                false;


            if (avatar) {

                avatar.classList.remove(
                    "talking"
                );

            }

        };


} else {

    console.log(
        "Quti: Speech Recognition not supported on this browser."
    );

}