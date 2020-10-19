/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
    source: 'Martin Fowler'
  },
  {
    quote: `First, solve the problem. Then, write the code.`,
    source: 'Jon Johnson'
  },
  {
    quote: `Experience is the name everyone gives to their mistakes.`,
    source:'Oscar Wilde',
    citation: 'Miscellaneous Aphorisms; The Soul of Man',
    year: '1911'
  },
  {
    quote: `Java is to JavaScript what car is to Carpet.`,
    source: 'Chris Heilmann',
    sourceBackground: 'Developer Evangelist'
  },
  {
    quote: `Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.`,
    source: 'Dan Saloman'
  }
]
/***
 * `getRandomQuote` function
***/
function getRandomQuote (arrayOfQuotes) {

  // produce random number between 0 and the last index of quotes array
  const randomValue = () => Math.floor(Math.random()*quotes.length);

  // create a way to select one of the objects using the random number
  let currQuote = quotes[randomValue()];

  // return that object 
  return currQuote;
}

/***
 * `printQuote` function
***/
function printQuote () {

  //  create a variable to hold one of the objects.
  let currQuoteObj = getRandomQuote(quotes);

  // create a variable to hold the beginning of the html text that we are creating. 
  let htmlString = `<p class='quote'> ${currQuoteObj.quote}</p><p class='source'> ${currQuoteObj.source}`;

  // create if statements to check if the object contains citation and year
  if (currQuoteObj.citation) {

  //  used '+=' instead of concat. concat wasn't working; not sure why....maybe the template literals?
    htmlString += `<span class='citation'>${currQuoteObj.citation}</span>`;
  }
  
  if (currQuoteObj.year) {
    htmlString += `<span class='year'>${currQuoteObj.year}</span>`
  }

  if (currQuoteObj.sourceBackground) {
    htmlString += `<span class='sourceBackground'>${currQuoteObj.sourceBackground}</span>`
  }

  // closing p tag
  htmlString.concat(`</p>`);

  // changes the contents of the 'quote box' to the html text that was just created.
  document.getElementById('quote-box').innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);