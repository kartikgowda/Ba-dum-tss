// document.querySelector('.drum').addEventListener('click', function () {
//   alert('You clicked a button!');
// });

// let numberOfButtons = document.querySelectorAll('.drum');

// // //? Selecting all the buttons
// for (let i = 0; i < numberOfButtons.length; i++) {
//   numberOfButtons[i].addEventListener('click', function () {
//     alert('You have been clicked');
//   });
// }

//? Refactoring Selections of all Buttons
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', function () {
    // ? Added to check functioning of the buttons
    // this.style.color = 'white';
    // ? Adding buttons to sounds
    switch (this.innerHTML) {
      case 'w':
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case 'a':
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case 's':
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case 'd':
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case 'j':
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case 'k':
        let kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        break;
      case 'l':
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      default:
        alert('BAD DRUMMER');
        break;
    }
  });
});
