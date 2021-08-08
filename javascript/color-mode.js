//Obtain the color by input color
let getColor = () =>  document.getElementById('palette-color').value

//Color mode function
function activeColorMode(){
  let totalDivs = document.querySelectorAll('.div-container');
  totalDivs.forEach(function(div){
    div.addEventListener('mouseenter', function(){
      let color = getColor();
      this.style.backgroundColor=`${color}`
    },false)
  })
}

let colorModeButton = document.querySelector('#colormode-button');
colorModeButton.addEventListener('click', activeColorMode)
