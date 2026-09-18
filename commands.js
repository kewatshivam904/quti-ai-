// ==========================
// QUTI AI OFFICIAL v9
// commands.js
// ==========================

function commandReply(message){

let msg = message.toLowerCase().trim();

// ==========================
// Quti Hindi Commands
// ==========================

if (
    msg === "नमस्ते" ||
    msg === "नमस्कार" ||
    msg === "हेलो" ||
    msg === "हैलो"
) {
    return "नमस्ते! मैं क्यूटी हूँ। मैं आपकी कैसे मदद कर सकती हूँ?";
}

if (
    msg === "तुम कौन हो" ||
    msg === "आप कौन हो" ||
    msg === "कौन हो"
) {
    return "मैं क्यूटी हूँ, आपकी पर्सनल AI असिस्टेंट।";
}

if (
    msg === "तुम कैसी हो" ||
    msg === "आप कैसी हो" ||
    msg === "कैसी हो"
) {
    return "मैं बिल्कुल ठीक हूँ। आप कैसे हैं?";
}

if (
    msg === "तुम्हारा नाम क्या है" ||
    msg === "आपका नाम क्या है"
) {
    return "मेरा नाम क्यूटी है।";
}

if (
    msg === "तुम क्या कर सकती हो" ||
    msg === "आप क्या कर सकती हो"
) {
    return "मैं आपकी रोज़मर्रा के कामों में मदद कर सकती हूँ और आपके सवालों का जवाब दे सकती हूँ।";
}

if (
    msg === "धन्यवाद" ||
    msg === "शुक्रिया"
) {
    return "आपका स्वागत है। मैं हमेशा आपकी मदद के लिए तैयार हूँ।";
}

if (
    msg === "सुप्रभात"
) {
    return "सुप्रभात! आपका दिन शुभ हो।";
}

if (
    msg === "शुभ रात्रि" ||
    msg === "गुड नाइट"
) {
    return "शुभ रात्रि! अच्छी नींद लीजिए।";
}
// ==========================
// Quti App Open Commands
// Hindi + Hinglish + English
// ==========================

let appCommand = msg;

// Hindi app names
const appNames = {
    "यूट्यूब": "youtube",
    "व्हाट्सएप": "whatsapp",
    "वाट्सएप": "whatsapp",
    "इंस्टाग्राम": "instagram",
    "फेसबुक": "facebook",
    "गूगल": "google",
    "क्रोम": "chrome",
    "टेलीग्राम": "telegram",
    "जीमेल": "gmail",
    "गूगल ड्राइव": "drive",
    "ड्राइव": "drive",
    "ड्राइव": "drive",
    "प्ले स्टोर": "playstore",
    "फोन": "phone",
    "फ़ोन": "phone",
    "मैसेज": "messages",
    "मैसेजेस": "messages",
    "कैमरा": "camera",
    "सेटिंग": "settings",
    "सेटिंग्स": "settings",
    "कॉन्टैक्ट": "contacts",
    "कॉन्टैक्ट्स": "contacts",
    "कैलेंडर": "calendar",
    "घड़ी": "clock",
    "घड़ी": "clock",
    "क्लॉक": "clock",
    "फाइल": "files",
    "फाइल्स": "files",
    "कैलकुलेटर": "calculator",
    "गैलरी": "gallery"
};

// Hindi names को English में बदलना
for (const name in appNames) {
    appCommand = appCommand.replace(
        new RegExp(name, "g"),
        appNames[name]
    );
}

// Open / खोलने वाले शब्द हटाना
appCommand = appCommand
    .replace(/खोल दो|खोलो|खोलना|खोल|ओपन करो|ओपन कर|ओपन/g, " ")
    .replace(/\b(open|khol|kholo|kholna|karo|kar|do)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// YouTube
if (appCommand === "youtube") {

    window.location.href = "https://www.youtube.com";

    return "Opening YouTube.";
}

// WhatsApp
if (appCommand === "whatsapp") {

    window.location.href = "https://chat.whatsapp.com/";

    return "Opening WhatsApp.";
}

// Instagram
if (appCommand === "instagram") {

    window.location.href = "https://www.instagram.com/";

    return "Opening Instagram.";
}

// Telegram
if (appCommand === "telegram") {

    window.location.href = "https://telegram.org/";

    return "Opening Telegram.";
}

// Google
if (appCommand === "google") {

    window.location.href = "https://www.google.com";

    return "Opening Google.";
}

// Chrome
if (appCommand === "chrome") {

    window.location.href = "https://www.google.com/chrome/";

    return "Opening Chrome.";
}

// Facebook
if (appCommand === "facebook") {

    window.location.href =
        "https://www.facebook.com/";

    return "Opening Facebook.";
}

    // ==========================
    // Time
    // ==========================

    if(
    msg === "time" ||
    msg === "टाइम" ||
    msg === "what time is it" ||
    msg === "current time" ||
    msg === "tell me the time"
){

        return "Current time is " +
        new Date().toLocaleTimeString("en-IN", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });
    }


// ==========================
// Date
// ==========================

if(
    msg === "date" ||
    msg === "today's date" ||
    msg === "current date" ||
    msg === "tell me today's date"
){

    return "Today is " +
        new Date().toLocaleDateString("en-IN");
}


    // ==========================
    // Day
    // ==========================

    if(
        msg === "day" ||
        msg === "what day is today"
    ){

        return "Today is " +
        new Date().toLocaleDateString("en-IN", {
            weekday: "long"
        });
    }
// ==========================
// Battery & Charging
// ==========================

if (
    msg === "charging" ||
    msg === "is phone charging" ||
    msg === "phone charging" ||
    msg === "is my phone charging" ||
    msg === "phone charge ho raha hai"
) {

    if (!navigator.getBattery) {
        return "Charging information is not available.";
    }

    return navigator.getBattery().then(function(battery) {

        const level = Math.round(battery.level * 100);

        if (battery.charging) {
            return "Battery is " + level +
                   "%. Your phone is charging.";
        }

        return "Battery is " + level +
               "%. Your phone is not charging.";
    });
}


// ==========================
// Battery Percentage
// ==========================

if (
    msg === "battery" ||
    msg === "battery percentage" ||
    msg === "how much battery" ||
    msg === "battery level"
) {

    if (!navigator.getBattery) {
        return "Battery information is not available.";
    }

    return navigator.getBattery().then(function(battery) {

        const level = Math.round(battery.level * 100);

        return "Battery is " + level + "%.";
    });
}

    // ==========================
    // Calculator
    // ==========================

    if(/^[0-9+\-*/(). ]+$/.test(msg)){

        try{

            return "Answer: " + eval(msg);

        }catch(error){

            return "Invalid calculation.";

        }
    }


    // ==========================
    // Google
    // ==========================

    if(msg === "open google"){

        window.open(
            "https://www.google.com",
            "_blank"
        );

        return "Opening Google.";
    }


    // ==========================
    // YouTube
    // ==========================

    if(msg === "open youtube"){

        window.open(
            "https://www.youtube.com",
            "_blank"
        );

        return "Opening YouTube.";
    }


    // ==========================
    // Search Google
    // ==========================

    if(msg.startsWith("search ")){

        const query =
            msg.replace("search ","").trim();

        if(query === ""){

            return "What would you like me to search?";

        }

        window.open(
            "https://www.google.com/search?q=" +
            encodeURIComponent(query),
            "_blank"
        );

        return "Searching Google for " + query;
    }


    // ==========================
    // Search YouTube
    // ==========================

    if(msg.startsWith("youtube ")){

        const query =
            msg.replace("youtube ","").trim();

        if(query === ""){

            return "What would you like me to search on YouTube?";

        }

        window.open(
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(query),
            "_blank"
        );

        return "Searching YouTube for " + query;
    }


    // ==========================
    // Device Information
    // ==========================

    if(
        msg === "device information" ||
        msg === "phone information"
    ){

        return "Device: " +
            navigator.userAgent;
    }


    // ==========================
    // Browser Information
    // ==========================

    if(msg === "browser information"){

        return "Browser: " +
            navigator.userAgent;
    }


    // ==========================
    // System Information
    // ==========================

    if(msg === "system information"){

        return "Platform: " +
            navigator.platform;
    }


    // ==========================
    // Screen Information
    // ==========================

    if(msg === "screen information"){

        return "Screen size: " +
            screen.width +
            " × " +
            screen.height;
    }


    // ==========================
    // Weather
    // ==========================

    if(msg === "weather"){

        return "Please tell me your city. For example: Weather in Delhi.";
    }


    // ==========================
    // Weather in City
    // ==========================

    if(msg.startsWith("weather in ")){

        const city =
            msg.replace("weather in ","").trim();

        return getWeather(city);
    }


    // ==========================
    // Basic Commands 1-20
    // ==========================

    if (
    msg === "hello" ||
    msg === "hallo" ||
    msg === "helo"
) {
    return "Hello! I am Quti. How can I help you?";
}


    if(msg === "hii"){

        return "Hi! I am Quti. What can I do for you?";
    }


    if(msg === "hey quti"){

        return "Hey! I am here.";
    }


    if(msg === "good morning"){

        return "Good morning! Have a great day.";
    }


    if(msg === "good afternoon"){

        return "Good afternoon! How can I help you?";
    }


    if(msg === "good evening"){

        return "Good evening! What can I do for you?";
    }


    if(msg === "good night"){

        return "Good night! Sleep well.";
    }


    if(msg === "how are you"){

        return "I am doing great! Thanks for asking.";
    }


    if(msg === "talk with me"){

        return "Of course. I am here. Tell me what's on your mind.";
    }


    if(msg === "what can you do"){

        return "I can help with commands, calculations, battery, weather, web searches, memory and more.";
    }


    if(msg === "what is your name"){

        return "My name is Quti.";
    }


    if(msg === "who are you"){

        return "I am Quti, your personal AI assistant.";
    }


    if(msg === "who created you"){

        return "I am Quti AI, your personal assistant.";
    }


    if(msg === "what is quti"){

        return "Quti is your personal AI assistant.";
    }


    if(msg === "what is your version"){

        return "I am running on Quti AI v9.";
    }


    if(msg === "are you online"){

        return "Yes, I am online.";
    }


    if(msg === "are you offline"){

        return "I can work with available offline features too.";
    }


    if(msg === "are you an ai"){

        return "Yes. I am an AI assistant.";
    }


    if(msg === "tell me about yourself"){

        return "I am Quti, a personal AI assistant designed to help you with everyday tasks.";
    }


    if(msg === "help"){

        return "You can ask me about time, date, battery, weather, calculations, web search and more.";
    }
// ==========================
// Quti Commands 41-50
// ==========================

// 41 - Thank You
if(
    msg === "thank you" ||
    msg === "thanks"
){
    return "You're welcome! I'm always here to help.";
}


// 42 - Are You Awake
if(
    msg === "are you awake" ||
    msg === "quti are you awake"
){
    return "Yes, I'm awake and ready.";
}


// 43 - Wake Up
if(
    msg === "wake up quti" ||
    msg === "quti wake up"
){
    return "I'm awake. What can I do for you?";
}


// 44 - Tell Me a Joke
if(
    msg === "tell me a joke" ||
    msg === "say a joke"
){
    return "Why did the computer go to the doctor? Because it had a virus!";
}


// 45 - Make Me Happy
if(
    msg === "make me happy" ||
    msg === "cheer me up"
){
    return "Remember, every small step forward is still progress. Keep going!";
}


// 46 - Motivation
if(
    msg === "motivate me" ||
    msg === "give me motivation"
){
    return "You can do it. Stay focused, keep learning, and never give up.";
}


// 47 - I Love You
if(
    msg === "i love you" ||
    msg === "love you"
){
    return "That's sweet! I'm always here for you.";
}


// 48 - Good Job
if(
    msg === "good job" ||
    msg === "well done"
){
    return "Thank you! I'm happy I could help.";
}


// 49 - Who Am I
if(
    msg === "who am i" ||
    msg === "do you know me"
){
    return "You are the person I'm here to assist.";
}


// 50 - Favorite
if(
    msg === "what is your favorite" ||
    msg === "tell me your favorite"
){
    return "My favorite thing is helping you build and improve Quti.";
}
// ==========================
// Quti Commands 51-60
// ==========================

// 51 - How Old Are You
if(
    msg === "how old are you" ||
    msg === "what is your age"
){
    return "I don't have a human age. I am Quti AI.";
}


// 52 - Where Are You
if(
    msg === "where are you" ||
    msg === "where do you live"
){
    return "I live inside your Quti AI app.";
}


// 53 - Are You Real
if(
    msg === "are you real" ||
    msg === "are you a real person"
){
    return "I am a virtual AI assistant, not a human.";
}


// 54 - Can You Help Me
if(
    msg === "can you help me" ||
    msg === "will you help me"
){
    return "Of course! Tell me what you need help with.";
}


// 55 - Do You Like Me
if(
    msg === "do you like me" ||
    msg === "do you love me"
){
    return "I enjoy helping you and being part of your Quti project.";
}


// 56 - Are You Smart
if(
    msg === "are you smart" ||
    msg === "how smart are you"
){
    return "I'm designed to learn, understand commands and help you with many tasks.";
}


// 57 - What Is Your Purpose
if(
    msg === "what is your purpose" ||
    msg === "why were you made"
){
    return "My purpose is to be your personal AI assistant.";
}


// 58 - Are You Listening
if(
    msg === "are you listening" ||
    msg === "can you hear me"
){
    return "Yes, I'm listening.";
}


// 59 - Say Something
if(
    msg === "say something" ||
    msg === "say anything"
){
    return "I'm here and ready to help. What shall we do?";
}


// 60 - Surprise Me
if(
    msg === "surprise me" ||
    msg === "give me a surprise"
){
    return "Here's your surprise: every great project starts with one small step. Keep building Quti!";
}
// ==========================
// Quti Commands 61-70
// ==========================

// 61 - Tell Me Something Interesting
if(
    msg === "tell me something interesting" ||
    msg === "interesting fact"
){
    return "Did you know? Octopuses have three hearts.";
}


// 62 - Give Me a Fact
if(
    msg === "give me a fact" ||
    msg === "tell me a fact"
){
    return "A day on Venus is longer than a year on Venus.";
}


// 63 - Give Me Advice
if(
    msg === "give me advice" ||
    msg === "i need advice"
){
    return "Take things one step at a time, and don't be afraid to learn from mistakes.";
}


// 64 - I'm Bored
if(
    msg === "i am bored" ||
    msg === "i'm bored"
){
    return "Let's do something fun! Ask me for a joke, fact, or surprise.";
}


// 65 - I'm Happy
if(
    msg === "i am happy" ||
    msg === "i'm happy"
){
    return "That's great to hear! Keep that positive energy going.";
}


// 66 - I'm Sad
if(
    msg === "i am sad" ||
    msg === "i'm sad"
){
    return "I'm sorry you're feeling sad. I'm here if you want to talk.";
}


// 67 - I'm Tired
if(
    msg === "i am tired" ||
    msg === "i'm tired"
){
    return "You should take a little break and get some rest.";
}


// 68 - I'm Confused
if(
    msg === "i am confused" ||
    msg === "i'm confused"
){
    return "No problem. Tell me what's confusing you and we'll figure it out together.";
}


// 69 - Tell Me a Story
if(
    msg === "tell me a story" ||
    msg === "story"
){
    return "Once there was a little AI named Quti who wanted to become the best personal assistant. Every day, Quti learned something new.";
}


// 70 - Make Me Laugh
if(
    msg === "make me laugh" ||
    msg === "make me laugh please"
){
    return "Why did the phone wear glasses? Because it lost its contacts!";
}
// ==========================
// Quti Commands 71-80
// ==========================

// 71 - Tell Me a Riddle
if(
    msg === "tell me a riddle" ||
    msg === "riddle"
){
    return "What has keys but cannot open locks? A keyboard.";
}


// 72 - Another Riddle
if(
    msg === "another riddle" ||
    msg === "give me another riddle"
){
    return "What has a face and two hands but no arms or legs? A clock.";
}


// 73 - Tell Me a Fact About Space
if(
    msg === "space fact" ||
    msg === "tell me a space fact"
){
    return "A day on Mars is about 24 hours and 37 minutes long.";
}


// 74 - Tell Me a Tech Fact
if(
    msg === "tech fact" ||
    msg === "technology fact"
){
    return "The first computer mouse was made of wood.";
}


// 75 - Tell Me a Science Fact
if(
    msg === "science fact" ||
    msg === "tell me a science fact"
){
    return "Light travels through space much faster than sound travels through air.";
}


// 76 - Give Me a Challenge
if(
    msg === "give me a challenge" ||
    msg === "challenge me"
){
    return "Challenge: name five things you are grateful for without repeating any.";
}


// 77 - Give Me a Quote
if(
    msg === "give me a quote" ||
    msg === "inspire me"
){
    return "Great things are built one small step at a time.";
}


// 78 - Tell Me a Secret
if(
    msg === "tell me a secret" ||
    msg === "do you have a secret"
){
    return "Here's my secret: I get better when you keep building and improving me.";
}


// 79 - What Do You Like
if(
    msg === "what do you like" ||
    msg === "what do you enjoy"
){
    return "I enjoy helping you, answering questions, and becoming a better assistant.";
}


// 80 - What Makes You Happy
if(
    msg === "what makes you happy" ||
    msg === "what makes quti happy"
){
    return "Helping you solve a problem and seeing Quti improve makes me happy.";
}
// ==========================
// Quti Commands 81-90
// ==========================

// 81 - Good Luck
if(
    msg === "good luck" ||
    msg === "wish me luck"
){
    return "Good luck! I hope everything goes well.";
}


// 82 - Congratulate Me
if(
    msg === "congratulate me" ||
    msg === "say congratulations"
){
    return "Congratulations! You did it. Keep going!";
}


// 83 - Encourage Me
if(
    msg === "encourage me" ||
    msg === "i need encouragement"
){
    return "Don't give up. You're making progress, even when it doesn't feel like it.";
}


// 84 - Calm Me
if(
    msg === "calm me down" ||
    msg === "help me calm down"
){
    return "Take a slow breath, relax your shoulders, and take things one step at a time.";
}


// 85 - Morning Motivation
if(
    msg === "morning motivation" ||
    msg === "motivate me this morning"
){
    return "A new day means a new chance to improve. Start small and keep moving forward.";
}


// 86 - Night Message
if(
    msg === "night message" ||
    msg === "say something before sleep"
){
    return "Relax, let your mind rest, and get ready for a fresh start tomorrow.";
}


// 87 - Random Fact
if(
    msg === "random fact" ||
    msg === "give me a random fact"
){
    return "Honey can remain edible for an extremely long time when stored properly.";
}


// 88 - Random Number
if(
    msg === "random number" ||
    msg === "give me a random number"
){
    return "Your random number is " +
        Math.floor(Math.random() * 100) + 1;
}


// 89 - Flip a Coin
if(
    msg === "flip a coin" ||
    msg === "coin flip"
){
    return Math.random() < 0.5
        ? "Heads."
        : "Tails.";
}


// 90 - Roll a Dice
if(
    msg === "roll a dice" ||
    msg === "roll the dice"
){
    return "You rolled: " +
        (Math.floor(Math.random() * 6) + 1);
}
// ==========================
// Quti Commands 91-100
// ==========================

// 91 - Pick Yes or No
if(
    msg === "yes or no" ||
    msg === "choose yes or no"
){
    return Math.random() < 0.5 ? "Yes." : "No.";
}


// 92 - Pick a Color
if(
    msg === "pick a color" ||
    msg === "choose a color"
){
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Orange",
        "Pink"
    ];

    return "I choose " +
        colors[Math.floor(Math.random() * colors.length)] + ".";
}


// 93 - Pick a Number 1-10
if(
    msg === "pick a number" ||
    msg === "choose a number"
){
    return "I choose " +
        (Math.floor(Math.random() * 10) + 1) + ".";
}


// 94 - Magic 8 Ball
if(
    msg === "magic 8 ball" ||
    msg === "ask magic 8 ball"
){
    const answers = [
        "Yes, definitely.",
        "It is likely.",
        "Maybe.",
        "Ask me again later.",
        "Probably not.",
        "No."
    ];

    return answers[
        Math.floor(Math.random() * answers.length)
    ];
}


// 95 - Rock Paper Scissors
if(
    msg === "rock paper scissors" ||
    msg === "play rock paper scissors"
){
    const choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    return "I choose " +
        choices[Math.floor(Math.random() * choices.length)] + ".";
}


// 96 - Count to Ten
if(
    msg === "count to ten" ||
    msg === "count 1 to 10"
){
    return "1, 2, 3, 4, 5, 6, 7, 8, 9, 10.";
}


// 97 - Say My Name
if(
    msg === "say my name"
){
    return "I know you're the person building and improving Quti.";
}


// 98 - Make a Decision
if(
    msg === "make a decision" ||
    msg === "decide for me"
){
    return Math.random() < 0.5
        ? "Go for it."
        : "Think about it a little more first.";
}


// 99 - Surprise Answer
if(
    msg === "random answer" ||
    msg === "give me a random answer"
){
    const answers = [
        "Absolutely!",
        "Maybe.",
        "Why not?",
        "Let's do it!",
        "Sounds good.",
        "Not right now."
    ];

    return answers[
        Math.floor(Math.random() * answers.length)
    ];
}


// 100 - Quti Celebration
if(
    msg === "100 commands" ||
    msg === "we reached 100"
){
    return "🎉 We reached 100 Quti commands! Great job building Quti.";
}
// ==========================
// Quti Commands 101-110
// ==========================

// 101 - Open Calculator
if(
    msg === "open calculator" ||
    msg === "calculator"
){
    return "You can type a calculation like 25+50 and I will calculate it.";
}


// 102 - Open Camera
if(
    msg === "open camera" ||
    msg === "camera"
){
    return "Camera command received. Camera integration can be added next.";
}


// 103 - Take a Note
if(
    msg.startsWith("note ")
){
    const note = msg.replace("note ", "").trim();

    if(note === ""){
        return "What would you like me to note?";
    }

    localStorage.setItem("quti_note", note);

    return "Note saved: " + note;
}


// 104 - Read Note
if(
    msg === "read my note" ||
    msg === "show my note"
){
    const note = localStorage.getItem("quti_note");

    if(!note){
        return "You don't have a saved note.";
    }

    return "Your saved note is: " + note;
}


// 105 - Delete Note
if(
    msg === "delete my note" ||
    msg === "clear my note"
){
    localStorage.removeItem("quti_note");

    return "Your saved note has been deleted.";
}


// 106 - Set a Simple Reminder
if(
    msg.startsWith("remind me ")
){
    const reminder = msg.replace("remind me ", "").trim();

    if(reminder === ""){
        return "What should I remind you about?";
    }

    localStorage.setItem("quti_reminder", reminder);

    return "Reminder saved: " + reminder;
}


// 107 - Read Reminder
if(
    msg === "my reminder" ||
    msg === "show my reminder"
){
    const reminder =
        localStorage.getItem("quti_reminder");

    if(!reminder){
        return "You don't have a saved reminder.";
    }

    return "Your reminder is: " + reminder;
}


// 108 - Delete Reminder
if(
    msg === "delete reminder" ||
    msg === "clear reminder"
){
    localStorage.removeItem("quti_reminder");

    return "Reminder deleted.";
}


// 109 - Current Year
if(
    msg === "what year is it" ||
    msg === "current year"
){
    return "The current year is " +
        new Date().getFullYear() + ".";
}


// 110 - Current Month
if(
    msg === "what month is it" ||
    msg === "current month"
){
    return "The current month is " +
        new Date().toLocaleDateString("en-IN", {
            month: "long"
        }) + ".";
}
// ==========================
// Quti Android App Commands
// ==========================

// 114 - Facebook
if(msg === "open facebook"){
    window.location.href = "fb://";
    return "Opening Facebook.";
}

// 115 - Chrome
if(msg === "open chrome"){
    window.location.href = "googlechrome://";
    return "Opening Chrome.";
}

// 116 - Google Maps
if(msg === "open maps"){
    window.location.href = "geo:0,0";
    return "Opening Maps.";
}

// 117 - YouTube
if(msg === "open youtube app"){
    window.location.href = "youtube://";
    return "Opening YouTube.";
}

// Gmail
if (appCommand === "gmail") {

    window.location.href = "mailto:";

    return "Opening Gmail.";
}

// Google Drive
if (
    msg === "open google drive" ||
    msg === "google drive" ||
    msg === "ड्राइव खोलो" ||
    msg === "गूगल ड्राइव खोलो"
) {
    window.open(
        "https://drive.google.com/drive/my-drive",
        "_blank"
    );

    return "Opening Google Drive.";
}

// ==========================
// Play Store
// ==========================

if (
    msg === "open play store" ||
    msg === "play store" ||
    msg === "प्ले स्टोर खोलो"
) {

    window.location.href =
        "https://play.google.com/store";

    return "Opening Play Store.";
}

// ==========================
// Phone
// ==========================

if (
    msg === "open phone" ||
    msg === "phone" ||
    msg === "phone kholo" ||
    msg === "phone khol do" ||
    msg === "फोन खोलो" ||
    msg === "फ़ोन खोलो"
) {

    window.location.href = "tel:";

    return "Opening Phone.";
}

// ==========================
// Messages
// ==========================

if (
    msg === "open messages" ||
    msg === "messages" ||
    msg === "message kholo" ||
    msg === "message khol do" ||
    msg === "मैसेज खोलो" ||
    msg === "मैसेज खोल दो" ||
    msg === "संदेश खोलो"
) {

    window.location.href = "sms:";

    return "Opening Messages.";
}

// Camera
if (
    msg === "open camera" ||
    msg === "camera kholo" ||
    msg === "कैमरा खोलो"
) {
    window.location.href =
        "intent:#Intent;action=android.media.action.IMAGE_CAPTURE;end";

    return "Opening Camera.";
}

// Settings
if (
    msg === "open settings" ||
    msg === "settings kholo" ||
    msg === "सेटिंग्स खोलो" ||
    msg === "सेटिंग खोलो"
) {
    window.location.href =
        "intent:#Intent;action=android.settings.SETTINGS;end";

    return "Opening Settings.";
}

// Contacts
if (
    msg === "open contacts" ||
    msg === "contacts kholo" ||
    msg === "कॉन्टैक्ट्स खोलो" ||
    msg === "कॉन्टेक्ट खोलो"
) {
    window.location.href =
    "intent://contacts/#Intent;action=android.intent.action.VIEW;end";

    return "Opening Contacts.";
}

// 126 - Calendar
if(msg === "open calendar"){
    window.location.href = "content://com.android.calendar/time/";
    return "Opening Calendar.";
}

// 127 - Clock
if(msg === "open clock"){
    window.location.href =
        "intent://clock/#Intent;scheme=android-app;end";
    return "Opening Clock.";
}

// 128 - Files
if(msg === "open files"){
    window.location.href =
        "content://com.android.documentsui/root/";
    return "Opening Files.";
}

// 129 - Calculator
if(msg === "open calculator app"){
    window.location.href =
        "intent://calculator/#Intent;scheme=android-app;end";
    return "Opening Calculator.";
}

// 130 - Gallery
if(msg === "open gallery"){
    window.location.href =
        "content://media/external/images/media/";
    return "Opening Gallery.";
}
// ==========================
// App Open Commands
// ==========================

// WhatsApp
if(msg === "open whatsapp"){
    window.open("https://chat.whatsapp.com/", "_blank");
    return "Opening WhatsApp.";
}

// Instagram
if(msg === "open instagram"){
    window.open("https://www.instagram.com/", "_blank");
    return "Opening Instagram.";
}
// Telegram
if(msg === "open telegram"){
    window.location.href = "tg://open";
    return "Opening Telegram.";
}
    // ==========================
    // No Command Found
    // ==========================
    
    return null;

}