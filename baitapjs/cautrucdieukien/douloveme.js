function yes(){
    alert ("I love you too");
}
function no(){
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('n').style.left = x + 'px';
    document.getElementById('n').style.top = y + 'px';
}