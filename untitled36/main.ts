import {Queue} from "./Quere";
import {Patient} from "./Patient";

let queue = new Queue();
let listExaminedPatients = [];
let listPatients: Patient[] = [];

// Sắp xếp danh sách bệnh nhân khám theo thứ tự
function queuePatient(){
    while(listPatients.length > 0){
        let minCode = listPatients[0].code;
        for(let i = 0; i < listPatients.length; i++){
            if(listPatients[i].code < minCode){
                minCode = listPatients[i].code;
            }
        }
        for(let i = 0; i < listPatients.length; i++){
            if(listPatients[i].code === minCode){
                queue.enqueue(listPatients[i]);
                listPatients.splice(i, 1);
            }
        }
    }
}

function showExaminedPatients(){
    let nameExaminedPatients = [];
    for(let i = 0; i < listExaminedPatients.length; i++) {
        nameExaminedPatients.push(listExaminedPatients[i].name) ;
    }
    return nameExaminedPatients;
}

function examination(){
    listExaminedPatients.push(queue.dequeue());
}

listPatients.push(new Patient('Smith',5));
listPatients.push(new Patient('Jones',4));
listPatients.push(new Patient('Fehrenbach',6));
listPatients.push(new Patient('Brown',1));
listPatients.push(new Patient('Ingram',1));

queuePatient();
console.table(queue);
examination();
console.table(queue);
console.table(listExaminedPatients);
examination();
console.log(showExaminedPatients());
console.log(queue);





