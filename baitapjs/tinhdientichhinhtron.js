let inputr;
inputr = prompt("Nhap ban kinh r:");
let r = parseInt(inputr);
let s = r*r*3.14;
let a = (2 * r) * 3.14;
document.write("Dien tich hinh tron: " + s);
document.write("<br>");
document.write("Chu vi hinh tron: " + a.toFixed(2));