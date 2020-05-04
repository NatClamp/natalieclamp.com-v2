let buttonsArray = document.getElementsByTagName('button');
let header = document.getElementById('name');
let linkArray = document.getElementsByTagName('a');
let activeButton = document.getElementsByClassName('button--active')
let workButton = document.querySelector('#button-work');
let previouslyButton = document.querySelector('#button-previously');
let workContent = document.querySelector('#work');
let previouslyContent = document.querySelector('#previously');
let stillImage = document.getElementById('face-still');
let movingImage = document.getElementById('face-gif');

imageHover()

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

function imageHover() {
  stillImage.addEventListener('mouseenter', () => {
    stillImage.classList.add('hidden');
    movingImage.classList.remove('hidden');
  })
  stillImage.addEventListener('mouseleave', () => {
    stillImage.classList.remove('hidden');
    movingImage.classList.add('hidden');
  })
}