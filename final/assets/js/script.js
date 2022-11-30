var tip = document.getElementsByClassName("tip-title");
var i;

for (i = 0; i < tip.length; i++) {
    tip[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdown = this.nextElementSibling;
    if (dropdown.style.maxHeight){
        dropdown.style.maxHeight = null;
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    } 
    });
}