// Contents
var DE = document.getElementById("DE");
var EN = document.getElementById("EN");
// Click
var btn = document.getElementById("switchlanguage");
var btnEN = document.getElementById("switchlanguageEN");

// btn.addEventListener("click", SwitchLanguageDisplay);
btn.addEventListener("click", SwitchLanguage);
btnEN.addEventListener("click", SwitchLanguageEN);


function SwitchLanguage(){
    EN.style.display = "none";
    DE.style.display = "";
}

function SwitchLanguageEN(){
    DE.style.display = "none";
    EN.style.display = "";
}