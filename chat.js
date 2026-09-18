// ==========================
// Quti AI v9.0
// chat.js
// ==========================

function addMessage(sender, text){

    const message = document.createElement("div");

    message.className =
        sender === "You"
        ? "message user"
        : "message cuti";

    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.innerText = text;

    message.appendChild(bubble);

    chat.appendChild(message);

    // Auto Scroll
    chat.scrollTop = chat.scrollHeight;

    return message;
}

function clearChat(){

    chat.innerHTML = "";

}