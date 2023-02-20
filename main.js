debugger;

let soundData = [
    {
      "soundName": "clap",
      "audioSource": "sounds/clap.wav",
      key: 65,
      kbd: 'a',
    },
    {
      "soundName": "hihat",
      "audioSource": "sounds/hihat.wav",
      key: 83,
      kbd: 's',
    },
    {
      "soundName": "kick",
      "audioSource": "sounds/kick.wav",
      key: 68,
      kbd: 'd'
    },
    {
      "soundName": "openhat",
      "audioSource": "sounds/openhat.wav",
      key: 70,
      kbd: 'f'

    },
    {
      "soundName": "boom",
      "audioSource": "sounds/boom.wav",
      key: 71,
      kbd: 'g'
      
    },
    {
      "soundName": "ride",
      "audioSource": "sounds/ride.wav",
      key: 72,
      kbd: 'h'
    },
    {
      "soundName": "snare",
      "audioSource": "sounds/snare.wav",
      key: 74,
      kbd: 'j', 
    },
    {
      "soundName": "tom",
      "audioSource": "sounds/tom.wav",
      key: 75,
      kbd: 'k', 
    },
    {
      "soundName": "tink",
      "audioSource": "sounds/tink.wav",
      key: 76,
      kbd: 'l', 
    }
]
  

// Write an event listener that listens for the keystroke and plays the sound when the key is pressed down
const $log = document.getElementById('log');
const $keys = document.querySelectorAll('.key');
const $allAudio = document.querySelectorAll('audio');


document.addEventListener('keydown', (e) => {
    const pressedKeyCode = e.keyCode;
    const pressedKey = e.key;
    let matchingKey;
    console.log(pressedKeyCode);
    
    for(let i=0; i < $keys.length; i++){
        // console.log($keys[i])
        let dataSetKey = $keys[i].dataset.key;
        if (dataSetKey == pressedKeyCode) {
            console.log('sound key pressed')
            matchingKey= $keys[i].children[0].innerHTML;
            matchingKey = matchingKey.toLowerCase();
        } 

        if (pressedKey == matchingKey) {
            console.log('Letter key identified')
        }
    }
    
    console.log(matchingKey)

    for (const item of $keys) {
        if (item.dataset.key === pressedKeyCode)
            console.log(item);
        // Loop through the keys array 
    }
    
    // for(let i=0; i < $allAudio.length; i++){
        
    //     if ($allAudio[i].dataset.key == pressedKey){
    //         console.log($allAudio[i].dataset.key);
    //         console.log('sound key pressed')
    //     }
    // }

});

function playAudio(audioElement) {
    audioElement.play();
}