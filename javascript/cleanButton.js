
//
const cleanButton = document.getElementById('clean-button');
cleanButton.addEventListener('click', function () {
  let totalDivs = document.querySelectorAll('.div-container');
  totalDivs.forEach(div => div.style.backgroundColor = "rgb(58, 65, 59)");
}, false);
