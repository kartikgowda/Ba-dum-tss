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
    alert('I got clicked baby');
  });
});
