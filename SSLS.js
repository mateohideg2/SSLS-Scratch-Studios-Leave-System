function addButton() { 
var newDiv = document.createElement("div"); 
var code = '<a class="button small grey" id="leave_studios"><span class="text">Leave Studios</span></a>';
newDiv.appendChild(code);

var currentDiv = document.getElementById("main-content"); 
document.body.insertBefore(newDiv, currentDiv); 
}

var elementToClick = document.getElementById("leave_studios");
addEventListener("click", removeCurator);

function removeCurator() {
document.getElementsByClass('buttons').innerHTML = code;
var studioid = prompt("Write the studio ID", "");
$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/curators-in/" + studioid + "/remove/?usernames=" + Scratch.INIT_DATA.LOGGED_IN_USER.model.username});
}