const quotes = [
    {
        quote: "Our souls are not hungry for fame, comfort, wealth, or power. Our souls are hungry for meaning, for the sense that we have figured out how to live so that our lives matter.",
        author: "Harold Kushner",
    },
    {
        quote: "Collect moments, not things.",
        author: "Paulo Coelho",
    },
    {
        quote: "We really must understand that the lust for affluence in contemporary society is psychotic. It is psychotic because it has completely lost touch with reality. We crave things we neither need nor enjoy.",
        author: "Richard Foster",
    },
    {
        quote: "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.",
        author: "Isaac Newton",
    },
    {
        quote: "Good design is as little design as possible.",
        author: "Dieter Rams",
    },
    {
        quote: "You say, ‘If I had a little more, I should be very satisfied.’ You make a mistake. If you are not content with what you have, you would not be satisfied if it were doubled.",
        author: "Charles Spurgeon",
    },
    {
        quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
        author: "Antoine de Saint-Exupery",
    },
    {
        quote: "Make things as simple as possible but no simpler.",
        author: "Albert Einstein",
    },
    {
        quote: "There is no greatness where there is not simplicity, goodness, and truth.",
        author: "Leo Tolstoy",
    },
    {
        quote: "Cultivate poverty like a garden herb, like sage. Do not trouble yourself much to get new things, whether clothes or friends. Things do not change, we change. Sell your clothes and keep your thoughts.",
        author: "Henry David Thoreau",
    },
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `«${todaysQuote.quote}»`;
author.innerText = todaysQuote.author;