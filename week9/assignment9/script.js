// Create a function that will change the quote
// and the source when the page is loaded
// Bonus: change the quote with a button push

function getQuote() {
    const quotes = [
        "You're the one with the big mouth, and I would really enjoy closing it, especially in front of all my friends. But my hands are registered as lethal weapons. That means, we get into a fight, I accidentally kill you? I go to jail.",
        "To my wife and all my sweethearts. May they never meet.",
        "He died instantly. The next day.",
        "Pools are excellent for holding water.",
        "Chancho. When you are a man, sometimes you wear stretchy pants in your room. It's for fun.",
        "Nacho, you are great fighter. You've got something none of these guys have.",
        "We can stay up late, swapping manly stories, and in the morning, I'm making waffles!",
        "For your information, there's a lot more to ogres than people think."
    ]
    const sources = [
        "Bruce Lee - Once Upon a Time in Hollywood",
        "Rick Dalton - Once Upon a Time in Hollywood",
        "Rod Kimble - Hot Rod",
        "Dave McLean - Hot Rod",
        "Nacho - Nacho Libre",
        "Esqueleto - Nacho Libre",
        "Donkey - Shrek",
        "Shrek - Shrek"
    ]
    // Grab the h1 with the id of quote
    let quote = document.getElementById('quote');

    // Grab the p with the id of source  
    let source = document.getElementById('source');

    // Generate a random number between
    // 0 and length of the array
    let i = Math.floor(Math.random() * quotes.length);

    // We can rewrite the innerHTML
    quote.innerHTML = quotes[i];
    source.innerHTML = sources[i];
}

getQuote();