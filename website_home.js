menu_sections
[
    "Home",
    "About Me",
    "Projects",
    "Contact Info"
]

function menu_bar()
{
    // var width = window.innerWidth-50;
    // var height = window.innerHeight-50;    
    foreach (String in menu_sections)
    {
        document.write(menu_sections[String]);
    }
    return;
}