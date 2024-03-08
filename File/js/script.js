  const scriptURL = 'https://script.google.com/macros/s/AKfycbyrOczOoVMuHFLwcdPdFc0N9tGQhyVSWQGkBw00u9MxLO9rsGfD36nYifeWD26giZ0/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })



var TabLinks = document.getElementsByClassName('Tab-Links');
var TabContents = document.getElementsByClassName('Tab-Contents');

function OpenTab(TabName){
    for(TabLink of TabLinks){
        TabLink.classList.remove("Active-Link");
    }
    for(TabContent of TabContents){
        TabContent.classList.remove("Active-Tab");
    }
    event.currentTarget.classList.add("Active-Link");
    document.getElementById(TabName).classList.add("Active-Tab");
}


var SideMenu = document.getElementById('SideMenu');

function OpenMenu(){
    SideMenu.style.right = '0';
};
function CloseMenu(){
    SideMenu.style.right = '-200px';
};