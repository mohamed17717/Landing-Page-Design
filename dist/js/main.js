// functions
function generateHexaInRandom(){
  // generate div to five him specific font size max 1px
  // put other elm with .hexa
  // give random opacity to this div
  // giv this div random top left positions
  // give first div random timeout to disppear
  // there is 2 colors for those hexa
}


// events
document.querySelector('form').onsubmit = function(e){
  return false;
}

document.addEventListener('DOMContentLoaded', (e)=>{
  document.body.style.minHeight = window.innerHeight+'px';
})


let collapseBtn = document.querySelector('#home .header .collapse-btn');
let collapseContent = document.querySelector('#home .header .collapse-content');

collapseBtn.onclick = function(e){
  let val = collapseContent.style.display;
  val = val === 'initial'? 'none': 'initial';
  collapseContent.style.display = val;
}


//# sourceMappingURL=main.js.map
