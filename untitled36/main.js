"use strict";
exports.__esModule = true;
var Quere_1 = require("./Quere");
var Patient_1 = require("./Patient");
var queue = new Quere_1.Queue();
var listExaminedPatients = [];
var listPatients = [];
// Sắp xếp danh sách bệnh nhân khám theo thứ tự
function queuePatient() {
    while (listPatients.length > 0) {
        var minCode = listPatients[0].code;
        for (var i = 0; i < listPatients.length; i++) {
            if (listPatients[i].code < minCode) {
                minCode = listPatients[i].code;
            }
        }
        for (var i = 0; i < listPatients.length; i++) {
            if (listPatients[i].code === minCode) {
                queue.enqueue(listPatients[i]);
                listPatients.splice(i, 1);
            }
        }
    }
}
function showExaminedPatients() {
    var nameExaminedPatients = [];
    for (var i = 0; i < listExaminedPatients.length; i++) {
        nameExaminedPatients.push(listExaminedPatients[i].name);
    }
    return nameExaminedPatients;
}
function examination() {
    listExaminedPatients.push(queue.dequeue());
}
listPatients.push(new Patient_1.Patient('Smith', 5));
listPatients.push(new Patient_1.Patient('Jones', 4));
listPatients.push(new Patient_1.Patient('Fehrenbach', 6));
listPatients.push(new Patient_1.Patient('Brown', 1));
listPatients.push(new Patient_1.Patient('Ingram', 1));
queuePatient();
console.table(queue);
examination();
console.table(queue);
console.table(listExaminedPatients);
examination();
console.log(showExaminedPatients());
console.log(queue);
