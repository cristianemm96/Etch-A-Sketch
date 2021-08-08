
const container = document.querySelector('#container');

//Put the divs in container.
const mkDivs = function(amountDiv){
  let totalAmount = amountDiv * amountDiv;
  let count = 0;
  let div;
  while (! (count == totalAmount)){
    div = document.createElement('div');
    div.setAttribute('class' , `div-container-${amountDiv} div-container`);
    container.appendChild(div);
    count++;
  }
};


//Remove the div childs from the div container 
function removeChildsDiv(){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
}


//Set the size of the div childs
let size = document.getElementsByClassName('size');
for (let i = 0; i < size.length; i++) {
  size[i].addEventListener('click', function(){
    let totalDivs = document.querySelectorAll('#div-container');
    if(!totalDivs){
      mkDivs(size[i].value);
    }else{
      removeChildsDiv();
      mkDivs(size[i].value);
    }
  },false);
}




