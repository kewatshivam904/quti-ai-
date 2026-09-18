// ==========================================
// QUTI AI v9 - STABLE TEXT ENGINE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // Elements
    // ==========================================

    const chat =
        document.getElementById("chat");

    const input =
        document.getElementById("userInput") ||
        document.getElementById("msg");

    const sendBtn =
        document.getElementById("sendBtn");

    const typing =
        document.getElementById("typing");


    if (!chat || !input || !sendBtn) {

        console.error(
            "Quti: Required UI elements not found."
        );

        return;
    }


    // ==========================================
    // Global references
    // ==========================================

    window.qutiChat = chat;
    window.qutiInput = input;


    // ==========================================
    // Add Message
    // ==========================================

    function addMessage(text, type) {

        if (
            text === null ||
            text === undefined
        ) {
            return;
        }


        text =
            String(text).trim();


        if (!text) {
            return;
        }


        const message =
            document.createElement("div");


        message.className =
            type === "user"
                ? "message user"
                : "message cuti";


        const bubble =
            document.createElement("div");


        bubble.className =
            "bubble";


        bubble.textContent =
            text;


        message.appendChild(
            bubble
        );


        chat.appendChild(
            message
        );


        chat.scrollTop =
            chat.scrollHeight;

    }


    window.addMessage =
        addMessage;


    // ==========================================
    // CHAT HISTORY
    // ==========================================

    const HISTORY_KEY =
        "cuti_history";


    function saveMessage(
        text,
        type
    ) {

        try {

            const history =
                JSON.parse(
                    localStorage.getItem(
                        HISTORY_KEY
                    ) || "[]"
                );


            history.push({

                text: text,

                type: type

            });


            localStorage.setItem(
                HISTORY_KEY,
                JSON.stringify(history)
            );


        } catch (error) {

            console.error(
                "Quti history save error:",
                error
            );

        }

    }


    function loadHistory() {

        try {

            const history =
                JSON.parse(
                    localStorage.getItem(
                        HISTORY_KEY
                    ) || "[]"
                );


            if (
                !Array.isArray(history)
            ) {
                return;
            }


            history.forEach(
                function (item) {

                    if (
                        item &&
                        item.text &&
                        item.type
                    ) {

                        addMessage(
                            item.text,
                            item.type
                        );

                    }

                }
            );


        } catch (error) {

            console.error(
                "Quti history load error:",
                error
            );

        }

    }


    // ==========================================
    // CLEAR CHAT
    // ==========================================

    window.clearQutiChat =
        function () {

            localStorage.removeItem(
                HISTORY_KEY
            );

            chat.innerHTML = "";

        };


    // ==========================================
    // GET REPLY
    // ==========================================

    async function getReply(message) {

        const text =
            String(message || "")
                .trim();


        if (!text) {
            return null;
        }


        // ======================================
        // 1. MEMORY
        // ======================================

        if (
            typeof memoryReply ===
            "function"
        ) {

            try {

                const memory =
                    await memoryReply(
                        text
                    );


                if (
                    memory !== null &&
                    memory !== undefined &&
                    String(memory).trim() !== ""
                ) {

                    return String(memory);

                }


            } catch (error) {

                console.error(
                    "Quti memory error:",
                    error
                );

            }

        }


        // ======================================
        // 2. COMMANDS
        // ======================================

        if (
            typeof commandReply ===
            "function"
        ) {

            try {

                const command =
                    await commandReply(
                        text
                    );


                if (
                    command !== null &&
                    command !== undefined &&
                    String(command).trim() !== ""
                ) {

                    return String(command);

                }


            } catch (error) {

                console.error(
                    "Quti command error:",
                    error
                );

            }

        }


        // ======================================
        // 3. FINAL FALLBACK
        // ======================================

        return "Sorry, abhi mujhe iska jawab nahi mila.";

    }


    window.getReply =
        getReply;


    // ==========================================
    // TYPING DELAY
    // ==========================================

    function wait(ms) {

        return new Promise(
            function (resolve) {

                setTimeout(
                    resolve,
                    ms
                );

            }
        );

    }


    // ==========================================
    // SEND MESSAGE
    // ==========================================

    let isProcessing =
        false;


    async function sendMessage() {

        // Prevent double send

        if (isProcessing) {
            return;
        }


        const text =
            input.value.trim();


        if (!text) {
            return;
        }


        isProcessing =
            true;


        // ======================================
        // USER MESSAGE
        // ======================================

        addMessage(
            text,
            "user"
        );


        saveMessage(
            text,
            "user"
        );


        input.value = "";


        // ======================================
        // TYPING START
        // ======================================

        const typingStart =
            Date.now();


        if (typing) {

            typing.style.display =
                "flex";

        }


        let reply =
            null;


        try {

            // Get reply

            reply =
                await getReply(
                    text
                );


        } catch (error) {

            console.error(
                "Quti reply error:",
                error
            );


            reply =
                "Sorry, Quti mein temporary error aa gaya.";

        }


        // ======================================
        // MINIMUM TYPING TIME
        // ======================================

        const elapsed =
            Date.now() -
            typingStart;


        const minimumTypingTime =
            1000;


        if (
            elapsed <
            minimumTypingTime
        ) {

            await wait(
                minimumTypingTime -
                elapsed
            );

        }


        // ======================================
        // HIDE TYPING
        // ======================================

        if (typing) {

            typing.style.display =
                "none";

        }


        // ======================================
        // ASSISTANT REPLY
        // ======================================

        if (reply) {

            addMessage(
                reply,
                "cuti"
            );


            saveMessage(
                reply,
                "cuti"
            );


            // ==================================
            // NORMAL PHONE / BROWSER VOICE
            // ==================================

            if (
                typeof window.speak ===
                "function"
            ) {

                try {

                    await window.speak(
                        reply
                    );

                } catch (error) {

                    console.error(
                        "Quti speech error:",
                        error
                    );

                }

            }

        }


        // ======================================
        // FINISH
        // ======================================

        isProcessing =
            false;


        input.focus();

    }


    window.sendMessage =
        sendMessage;


    // ==========================================
    // SEND BUTTON
    // ==========================================

    sendBtn.addEventListener(
        "click",
        sendMessage
    );


    // ==========================================
    // ENTER KEY
    // ==========================================

    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendMessage();

            }

        }
    );


    // ==========================================
    // LOAD HISTORY
    // ==========================================

    loadHistory();


    // ==========================================
    // READY
    // ==========================================

    console.log(
        "Quti AI Stable Engine Loaded."
    );

});