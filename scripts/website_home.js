function change_everything()
{
    document.body.style.fontFamily = "monospace";
    document.body.style.color = '#00FF00';
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#FF00FF";
    return false;
}
    
document.getElementById("menu_box").addEventListener("click", function(){
    var menuBar = document.getElementById("menu_bar");
    menuBar.classList.toggle("show");
});