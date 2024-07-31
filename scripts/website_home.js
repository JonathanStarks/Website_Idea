// This is a function that will connect to the button labled 'Do Not Push',
// when it is pressed it will make the page unreadable.
function change_everything()
{
    document.body.style.fontFamily = "monospace";
    document.body.style.color = '#00FF00';
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#FF00FF";
    return false;
}

// This function will make the menu box with three lines expand into a menu
// when it is clicked and then go back to it's collapsed state when clicked agian.
document.getElementById("menu_box").addEventListener("click", function()
{
    var menuBar = document.getElementById("menu_bar");
    menuBar.classList.toggle("show");
});

// This function goes to a section of the project page that will grow a flower
// more and more as the image is clicked on.
click_count = 0;
function grow_box()
{
    document.getElementById("grow").addEventListener("click", function()
    {
        click_count += 1;
        document.getElementById("clicks").innerHTML = click_count;
        if (click_count >= 40)
        {
            document.getElementById("grow").src = "styles/images/flower_sprout.png";
        }
        else if (click_count >= 30)
        {
            document.getElementById("grow").src = "styles/images/bud_sprout.png";
        }
        else if (click_count >= 20)
        {
            document.getElementById("grow").src = "styles/images/bigger_sprout.png";
        }
        else if (click_count >= 10)
        {
            document.getElementById("grow").src = "styles/images/sprout.png";
        }
    },{once: true});
}

