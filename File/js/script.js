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
