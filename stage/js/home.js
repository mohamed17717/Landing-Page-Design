let collapseBtn = document.querySelector('#home .header .collapse-btn');
let collapseContent = document.querySelector('#home .header .collapse-content');

collapseBtn.onclick = function(e){
  let val = collapseContent.style.display;
  val = val === 'initial'? 'none': 'initial';
  collapseContent.style.display = val;
}

