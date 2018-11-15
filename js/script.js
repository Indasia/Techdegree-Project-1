// FSJS - Random Quote Generator


// This is an array of quote objects with additional properties such as source, citation, year, and tags
var quotes = [
  { 
    quote: "She wasn't looking for a knight, she was looking for a sword.",
    source: "Atticus",
    tags: "grl pwr"
  },
  { 
    quote: "A woman is like a tea bag - you can't tell how strong she is until you put her in hot water.",
    source: "Eleanor Roosevelt",
    tags: [ "grl pwr", " humor" ]
  },
  { 
    quote: "You must find the courage to leave the table if respect is no longer being served.",
    source: "Tene Edwards",
    citation: "Walk With Wings",
    year: 2018,
    tags: [ "self-love", " soul food" ]
  },
  { 
    quote: "Never go in search of love, go in search of life, and life will find you the love you seek.",
    source: "Atticus",
    tags: [ "self-love", " life" ]
  },
  { 
    quote: "So plant your own gardens and decorate your own soul, instead of waiting for someone to bring you flowers.",
    source: "Jorge Luis Borges",
    tags: [ "self-love", " soul food" ]
  },
  { 
    quote: "Draw a monster. Why is it a monster?",
    source: "Janice Lee",
    citation: "Daughter",
    year: 2012,
    tags: [ "self-discovery", " fear" ]
  },
  {
    quote: "No amount of security is worth the suffering of a mediocre life chained to a routine that has killed your dreams.",
    source: "Maya Mendoza",
    tags: "life"
  },
  { 
    quote: "She has been through hell, so believe me when I say, fear her when she looks into a fire and smiles.",
    source: "Darynda Jones",
    citation: "Eleventh Grade in Moonlight",
    year: 2017,
    tags: "grl pwr"
  },
  { 
    quote: "Your soul is attracted to people the same way flowers are attracted to the sun, surround yourself only with those who want to see you grow.",
    source: "Pavana",
    tags: "soul food"
  },
  { 
    quote: "I\'m still learning to love the parts of myself that no one claps for.",
    source: "Rudy Francisco",
    tags: "self love"
  }
];

// This function selects a random quote object from the array and returns it
function getRandomQuote (array){
  var selectRandomQuote = Math.floor( Math.random() * quotes.length );
  return array[selectRandomQuote];
}
 
 // This function displays the quote array objects so we can see them
 // The first variable stores the getRandomQuote function and passes the quotes array as an argument
function printQuote (){
  var newQuote = getRandomQuote(quotes);

  // Changes the background to a random color
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var backgroundColor = "rgb(" + x + "," + y + "," +  z + ")";

  // This variable stores the quote and source string
  var html = " ";
    html  += "<p class='quote'>" + newQuote.quote + "</p>" + "<p class='source'>" + newQuote.source;
    
     // If quote has a citation property, add it to the html string
     if (newQuote.hasOwnProperty("citation")) {
      html += "<span class='citation'>" + newQuote.citation + "</span>";
    }

     // If quote has a year property, add it to the html string
     if (newQuote.hasOwnProperty("year")) {
      html += "<span class='year'>" + newQuote.year + "</span>";
    }

     // If quote has the tags property, add it to the html string
    if (newQuote.hasOwnProperty("tags")) {
      html += "<p class= 'tags'>" + " " + newQuote.tags + "</span></p>";
    }

  document.body.style.background = backgroundColor; 
  document.getElementById('quote-box').innerHTML = html;
}

// Call the printQuote function and displays a new quote every 20 seconds
setInterval(printQuote, 20000);

 // Show a new quote once the user clicks the button, the "printQuote" function is called
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);
