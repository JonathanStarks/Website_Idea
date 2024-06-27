document.getElementById("clicks").onclick = change_everything;

function change_everything()
{
    document.body.style.fontFamily = 'Courier New';
    document.body.style.color = '#66FF00';
    
    return false;
}