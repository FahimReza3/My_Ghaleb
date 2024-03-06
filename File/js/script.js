var TabLinks = document.getElementsByClassName('Tab-Links');
var TabContents = document.getElementsByClassName('Tab-Contents');

function OpenTab(TabName){
    for(TabLink of TabLinks){
        TabLink.classList.remote("Active-Link");
    }
    for(TabContent of TabContents){
        TabContent.classList.remote("Active-Tab");
    }
    event.currentTarget.classList.add("Active-Link");
}
