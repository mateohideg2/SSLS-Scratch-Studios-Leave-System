var newDiv = document.createElement("div"); 
newDiv.setAttribute("id", "buttonLeave");
document.getElementById('buttonLeave').innerHTML = '<a class="button small grey" id="leave_studios"><span class="text">Leave Studios</span></a>';
var currentDiv = document.getElementById("main-content"); 
document.body.insertBefore(newDiv, currentDiv); 

var elementToClick = document.getElementById("leave_studios");
elementToClick.addEventListener("click", removeCurator);

function removeCurator() {
var studioid = prompt("Write the studio ID", "");
$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + studioid + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
}
if(location.host === "scratch.mit.edu") { bookmarklet(); }
