const button = document.querySelector('button');
var cite = document.querySelector('.cite');
var author = document.querySelector('.author');

var quotes = [
    {
        cite:"God save me from my friends. I can protect myself from my enemies.",
        author:"Claude Louis Hector de Villars"
    },
    {
        cite:"Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author:"John Kenneth Galbraith"
    },
    {
        cite:"The price of anything is the amount of life you exchange for it.",
        author:"David Thoreau"
    },
    {
        cite:"A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded",
        author:"Tyne Daly"
    },
    {
        cite:"Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
        author:"Charles Lindbergh"
    },
    {
        cite:"Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author:"Life"
    }
]

button.addEventListener('click',function(){
    var quote = quotes[parseInt(Math.random() * quotes.length)]
    cite.innerText = quote.cite
    author.innerText = quote.author
});