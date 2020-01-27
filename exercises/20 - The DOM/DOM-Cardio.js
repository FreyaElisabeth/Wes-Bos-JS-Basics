// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.insertAdjacentElement('afterbegin', myDiv);

// make an unordered list
const myUL = document.createElement('ul');

// add three list items with the words "one, two three" in them
const myLi1 = document.createElement('li');
const myLi2 = document.createElement('li');
const myLi3 = document.createElement('li');

myLi1.innerText = 'one';
myLi2.innerText = 'two';
myLi3.innerText = 'three';

myUL.appendChild(myLi1);
myUL.appendChild(myLi2);
myUL.appendChild(myLi3);

// put that list into the above wrapper
myDiv.insertAdjacentElement('afterbegin', myUL);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'http://placekitten.com/299/299';

// set the width to 250
myImg.width = 250;

// add a class of cute
myImg.classList.add('adorable');

// add an alt of Cute Puppy
myImg.alt = 'adorable kitten';

// Append that image to the wrapper
document.querySelector('.wrapper').insertAdjacentElement('afterbegin', myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myStringInsertion = `
<div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sed ipsam voluptatibus. Inventore aut enim asperiores numquam voluptas repellat alias.</p>
    <p/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur natus repellendus. Explicabo nemo quos ullam perferendis accusamus fugit id ipsum, architecto repudiandae tenetur, impedit praesentium aspernatur earum sit. Impedit consequatur autem, molestiae vitae earum velit itaque quo alias veniam.</p>
</div>
`;

// put this div before the unordered list from above
myUL.insertAdjacentHTML('beforebegin', myStringInsertion);

// add a class to the second paragraph called warning
const pAll = document.querySelectorAll('p');
pAll[1].classList.add('warning');

// remove the first paragraph
pAll[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  return `
    <div class="playerCard">
   <h2>${name} — ${age}</h2>
   <p>They are ${height} centimeters tall and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a ${height > 50 ? 'tall' : 'small'} dog!</p>
    <button class="delete" type="button">&times; delete card</button>
 </div>
 `;
}

// make a new div with a class of cards
const cardTable = document.createElement('div');
cardTable.classList.add('cardTable');

// Have that function make 4 cards
const players = [
  { name: 'Nils', age: 33, height: 186 },
  { name: 'Freya', age: 35, height: 167 },
  { name: 'Mara', age: 4, height: 35 },
  { name: 'Sir Maunzelot', age: 12, height: 40 },
];

const cards = players.map(player =>
  generatePlayerCard(player.name, player.age, player.height)
);

// append those cards to the div
cardTable.insertAdjacentHTML('beforeend', cards[0]);
cardTable.insertAdjacentHTML('beforeend', cards[1]);
cardTable.insertAdjacentHTML('beforeend', cards[2]);
cardTable.insertAdjacentHTML('beforeend', cards[3]);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardTable);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make our delete function
function deleteCard(event) {
  event.currentTarget.parentElement.remove();
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
