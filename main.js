debugger;
/*
- When someone presses a key, i want to check what key that is then, I need to find the corresponding element on the page
- When i find the element, I want to find its parent and get the dataset[key] from it.
- When I get the dataset[key], I need to loop through the <audio> elements and find the one with the matching dataset[key]
- When it is found, I want to play the sound
*/

const $kbd = document.querySelectorAll('kbd');
const $allAudio = document.querySelectorAll('audio');

document.addEventListener('keydown', (e) => {
  const pressedKey = e.key;
  let pressedKeyNum;

  for (let i = 0; i < $kbd.length; i++) {
    const element = $kbd[i];
    let elementParent = element.parentElement;
    
    if (element.innerHTML.toLowerCase() == pressedKey) {
      pressedKeyNum = elementParent.dataset.key;
      elementParent.classList.add('playing');
      setTimeout(function(){ 
        elementParent.classList.remove('playing')
       }, 200);
    }
  }
  
  for (const file of $allAudio){
    if (file.dataset.key == pressedKeyNum) {
      playAudio(file.src);
    }
  }
});


function playAudio(audioPath){
  const audio = new Audio(audioPath);
  audio.play();
}
