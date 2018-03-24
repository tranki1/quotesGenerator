// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", changeBG, false);

//Innitiate quotes
let quotes=[
  {
    quote: "Hope is tomorrow's veneer over today's disappointment.",
    source: "Evan Esar",
    citation: null,
    year: 1995
  },
  {
    quote: "You are the shuckiest shuck faced shuck in the world!",
    source:'James Dashner',
    citation: 'The Maze Runner',
    year:NaN
  },
  {
    quote:'There are very few people who do not become nore interesting when they stop talking.',
    source:'Mary Lowry',
    citation: null,
    year: NaN
  },
  {
    quote:'You can do anything but not everything',
    source:'David Allen',
    citation: 'Making It All Work',
    year: 2009
  },
  {
    quote:'Not the senses I have but what I do with them is my kingdom',
    source:'Helen Adams Keller',
    citation: null,
    year: NaN
  }
];

function getRandomQuote(){
  let x = Math.floor(Math.random()*(quotes.length));
  return quotes[x];
}
function printQuote(){
  let randomQ = getRandomQuote();
  let quote = `<p class="quote">` +randomQ.quote +`</p>`;
  let citation ='';
  let year='';
  if (randomQ.citation) {citation=`<span class="citation">`+randomQ.citation+`</span>`}
  if (randomQ.year) {year =`<span class="year">`+randomQ.year+`</span>`}
  let source=`<p class="source">`+randomQ.source + citation+year +`</p>`;
  document.getElementById('quote-box').innerHTML = quote+source;
}
//Change background color of the application
function changeBG() {
  var colors=['#e53935','#880e4f','#6a1b9a','#283593','#006064','#e65100','#4e342e']
  document.body.style.background=colors[Math.floor(Math.random()*colors.length)];
}
//Set bg and quote automatically change every 3s
setInterval(function(){ changeBG() }, 3000);
setInterval(function(){ printQuote() }, 3000);
