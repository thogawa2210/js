let b = document.getElementById('banco');
let data = [];
for (let i = 0; i < 6; i++) {
    banco[i] = [0, 0, 0, 0, 0, 0];
}
for (let i = 0; i < 6; i++) {
    data += "<br>";
    for (let j = 0; j < 6; j++) {
        data += banco[i][j] + "&nbsp&nbsp";
    }
}
data += "<br><br><input type='button' value='Change Value' onclick='change1()'>"
b.innerHTML = data;
function change1() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    banco[positionX][positionY] = "x";
    for (let i = 0; i < 6; i++) {
        data += "<br>";
        for (let j = 0; j < 6; j++) {
            data += banco[i][j] + "&nbsp&nbsp&nbsp&nbsp";
        }
    }
    data += "<br><br><input type='button' value='Change Value' onclick='change2()'>"
    b.innerHTML = "<hr>" + data;
    kiemtrax();
}
function change2() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    banco[positionX][positionY] = "o";
    for (let i = 0; i < 6; i++) {
        data += "<br>";
        for (let j = 0; j < 6; j++) {
            data += banco[i][j] + "&nbsp&nbsp&nbsp&nbsp";
        }
    }
    data += "<br><br><input type='button' value='Change Value' onclick='change1()'>"
    b.innerHTML = "<hr>" + data;
    kiemtrao();
}
function kiemtrax(){
    for(let i = 0; i<6; i++){
        for(let j=0; j<6;j++){
            if((banco[i][j] == 'x' && banco[i+1][j] == 'x' && banco[i+2][j] == 'x')||
                (banco[i][j] == 'x' && banco[i][j+1] == 'x' && banco[i][j+2] == 'x')||
                (banco[i][j] == 'x' && banco[i+1][j+1] == 'x' && banco[i+2][j+2] == 'x')){
                alert("x chiến thắng!");
            }
        }
    }
}
function kiemtrao(){
    for(let i = 0; i<6; i++){
        for(let j=0; j<6;j++){
            if((banco[i][j] == 'o' && banco[i+1][j] == 'o' && banco[i+2][j] == 'o')||
                (banco[i][j] == 'o' && banco[i][j+1] == 'o' && banco[i][j+2] == 'o')||
                (banco[i][j] == 'o' && banco[i+1][j+1] == 'o' && banco[i+2][j+2] == 'o')){
                alert("o chiến thắng!");
            }
        }
    }
}