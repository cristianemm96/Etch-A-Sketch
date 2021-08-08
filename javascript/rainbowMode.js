//Generate aleatory color
function generateNumber(num){
  return(Math.random()*num).toFixed(0);
}

function getColorRGB(){
  let color = `(${generateNumber(255)}, ${generateNumber(255)}, ${generateNumber(255)})`;
  return "rgb" + color;
}

//Rainbow mode function
function activeRainbowMode(){
  let totalDivs = document.querySelectorAll('.div-container');
  totalDivs.forEach(function(div){
    div.addEventListener('mouseenter', function(){
      let color = getColorRGB();
      this.style.backgroundColor=`${color}`
    },false)
  })
}

let rainbowModeButton = document.querySelector('#rainbow-button');
rainbowModeButton.addEventListener('click', activeRainbowMode)