/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

const quotes = [
  {
    "quote": "Remember, too, that all who succeed in life get off to a bad start, and pass through many heartbreaking struggles before they \"arrive\". The turning point in the lives of those who succeed usually comes at some moment of crisis,through which they are introduced to their \"other selves\".",
    "source": "Napoleon Hill",
    "citation": "Book, Think and Grow Rich",
    "year": "1937",
    "tags": "tags: Success/Failure"
  },
  {
    "quote": "One who has loved truly, can never lose entirely. Love is whimsical and temperamental. Its nature is ephemeral, and transitory. It comes when it pleases, and goes away without warning. Accept and enjoy it while it remains, but spend no time worrying about its departure. Worry will never bring it back.",
    "source": "Napoleon Hill",
    "citation": "Book, Think and Grow Rich",
    "year": "1937",
    "tags": "tags: Love"
  },
  {
    "quote": "Every adversity, every failure, every heartbreak, carries with it the seed of an equal or greater benefit",
    "source": "Napoleon Hill",
    "citation": "Book, Think and Grow Rich",
    "year": "1937",
    "tags": "tags: Adversity, Success/Failure"
  },
  {
    "quote": "Failure is simply the opportunity to begin again, this time more intelligently.",
    "source": "Henry Ford",
    "tags": "tags: Success/Failure"
  },
  {
    "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "source": "Henry Ford",
    "tags": "tags: Adversity"
  },
  {
    "quote": "Success is stumbling from failure to failure with no loss of enthusiasm",
    "source": "Winston Churchill",
    "tags": "tags: Success/Failure"
  },
  {
    "quote": "Anyone who has never made a mistake has never tried anything new.",
    "source": "Albert Einstein",
    "tags": "tags: Adversity"
  },
];




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
let randomNumber;
let prevNumber;
function getRandomQuote(quotes){
  do {
    randomNumber = Math.floor(Math.random() * quotes.length);
  } while (randomNumber === prevNumber);
    prevNumber = randomNumber;
    return quotes[randomNumber];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/


  function printQuote(){
      let randomQuote = getRandomQuote(quotes);
      let html = `<p class="quote"> ${randomQuote['quote']} </p>
                  <p class="source"> ${randomQuote['source']}`;

                  if (randomQuote['citation']) {
                  html += `<span class="citation"> ${randomQuote['citation']} </span>`;
                  }
                  if (randomQuote['year']) {
                  html += `<span class="year"> ${randomQuote['year']} </span>`;
                  }
                  if (randomQuote['tags']) {
                    html += `<br><br><span class="tags"> ${randomQuote['tags']} </span>`;
                    }
                  html += "</p>";
                  document.getElementById("quote-box").innerHTML = html;
      return html
    
  }



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.