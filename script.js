let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const h1El = document.getElementById('main-title');
h1El.textContent = "Welcome, DOM Toretto"

  // Part 2
document.body.style.backgroundColor = 'orange';
  // Part 3
    const list = document.getElementById("favorite-things");
    list.removeChild(list.lastElementChild);
   
  
  
  // Part 4
 document.querySelectorAll('.special-title').forEach((item) => {
  item.style.fontSize = '2rem';
});

  // Part 5
document.querySelectorAll('#past-races > li').forEach((item) => {
if(item.textContent.trim() === 'Chicago'){
  document.querySelector('#past-races').removeChild(item);
}
});

  // Part 6
const li = document.createElement('li');
li.textContent = 'Atlanta';
document.querySelector('#past-races').appendChild(li);

  // Part 7
const blogPost = document.createElement('div');
blogPost.classList.add('blog-post');
const heading = document.createElement('h2');
heading.textContent = 'Hot! ATL';
const pEl = document.createElement('p');
pEl.textContent = 'The city of dreams where A 1/4 mile is all that matter.';
document.querySelector('.main').appendChild(blogPost);
blogPost.appendChild(heading);
blogPost.appendChild(pEl);

  // Part 8
document.querySelector('#quote-title').addEventListener('click', (event) => {
  randomQuote();
});


  // Part 9
document.querySelectorAll('.blog-post').forEach((item) => {
  item.addEventListener('mouseout', (event) => {
    event.currentTarget.classList.toggle('purple');
  });
  item.addEventListener('mouseenter', (event) => {
    event.stopPropagation()
    event.currentTarget.classList.toggle('red');
  });
});
});
