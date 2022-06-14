    b = document.getElementById("banco");
    let banco = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
    ];
function change() {
    i = +prompt("Nhập vào vị trí hàng muốn thay đổi: ");
    j = +prompt("Nhập vào vị trí cột muốn thay đổi: ");
    banco[i][j] = "x";
    vebanco();
}
function vebanco() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
        document.write(banco[i][j]);
        }
    document.write("<br>");
    }
    document.write('<button onclick=change()>Change value</button>');
    document.write('<br>');
}