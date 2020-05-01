var buttonsArray = document.getElementsByTagName('button');
var header = document.getElementById('name');
var linkArray = document.getElementsByTagName('a');
var activeButton = document.getElementsByClassName('button--active')
var workButton = document.querySelector('#button-work');
var previouslyButton = document.querySelector('#button-previously');
var workContent = document.querySelector('#work');
var previouslyContent = document.querySelector('#previously');

Array.prototype.forEach.call(buttonsArray, button => {
  button.addEventListener('click', () => {
    removeButtonsActiveState(buttonsArray);
    if (!button.classList.contains('button--active')) 
      button.classList.add('button--active');
    if (button === workButton) { 
      previouslyContent.classList.add('hidden');
      workContent.classList.remove('hidden')
    } else {
      workContent.classList.add('hidden')
      previouslyContent.classList.remove('hidden');
    }
  })
})

function removeButtonsActiveState() {
  Array.prototype.forEach.call(buttonsArray, button => {
    if (button.classList.contains('button--active')) button.classList.remove('button--active')
  });
}