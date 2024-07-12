document.addEventListener('DOMContentLoaded', () => {
    const quoteBox = document.getElementById('quote-box');
    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');

    const quotes = [
        { text: "Sizophumelela siye phambili.", author: "Skwata" },
        { text: "inde lendlela, siyofika.", author: "Afrikan Child" },
        { text: "Umuntu umuntu ngabantu.", author: "African proverb" },
        // Add more quotes as needed
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const randomQuote = getRandomQuote();
        textElement.textContent = `"${randomQuote.text}"`;
        authorElement.textContent = `- ${randomQuote.author}`;
        tweetQuoteButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${randomQuote.text}" - ${randomQuote.author}`)}`;
    }

    newQuoteButton.addEventListener('click', displayQuote);

    // Display a quote on initial load
    displayQuote();
});
