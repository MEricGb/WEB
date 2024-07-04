/**
 * TODO - Add an alert to be displayed
 *        when the page is _loaded_
 * 
 * > Hint - EventListener()
 */
window.addEventListener('load', () => {
    alert('load');
  });

/**
 * TODO - Replace the text of the <h1 /> header
 * 
 * > Hint - use the _id_ associated with it
 */


/**
 * TODO - Display a message when the button with the id = "btn"
 *        is clicked
 *  - you can either display it as an alert, or as a text in the page
 */

document.getElementById('btn').addEventListener('click', () => {
    alert('Button!');
  });
/**
 * Don't change
 */

let curr = ``;
let ids = [];

for (let i = 0; i < 10; i++) {
    let aux = "d_" + i;
    ids.push(aux);

    curr += `<div class="ex2" id = ${ids[i]}> </div>`;
}

// use console.log() to check the content of ids
console.log(ids);

document.getElementById('res').innerHTML = curr;

for (let i = 0; i < 10; i++) {
    randColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById(ids[i]).style.backgroundColor = "#" + randColor;
}

/**
 * TODO - For each element having the id "d_<even_number>"
 *        remove the "ex2" class and replace it with "ex" class
 * 
 *      - Also, for each of these elements, add some text
 * 
 * > Hint - classList()
 */
for (let i = 0; i < 10; i=i+2) {
    let element = document.getElementById(ids[i]);
    
    // Remove the "ex2" class and replace it with "ex" class
    element.classList.remove('ex2');
    element.classList.add('ex');
    
    // Add some text to each of these elements
    element.textContent = `Elementul ${i} `;
  }

/**
 * TODO - For each element having the class "ex2"
 *        add a border
 * 
 * > Hint - getElementsByClassName()
 */
let ex2Elements = document.getElementsByClassName('ex2');
for (let element of ex2Elements) {
  // Add a border to each element
  element.style.border = '5px solid blue';
}