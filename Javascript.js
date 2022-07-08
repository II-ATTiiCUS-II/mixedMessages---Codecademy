let messages = [
    "Don't give up.",
    "Carry on living.",
    "Commit to life like crazy to actually live.",
    "Each day comes bearing it's gifts. Untie the ribbon.",
    "Living is the art of getting used to what we didn't expect.",
    "A person without regrets is a nincompoop.",
    "Try to be a rainbow in someone else's cloud.",
    "Success is falling 9 times and getting up 10.",
    "There is only one certainty in life and that is that nothing is certain.",
    "The most sincere compliment we can pay is attention."
]

const mixedMessage = () => { 
    const randomNumber = Math.floor(Math.random() * (messages.length));
    document.getElementById('mixedMessage').innerHTML = messages[randomNumber];

};