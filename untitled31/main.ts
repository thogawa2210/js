import {LinkedList} from "./LinkedList";


let linkedList = new LinkedList();
linkedList.insertFirst('January', 10);
linkedList.insertLast('February', 12);
linkedList.insertLast('March', 8);
linkedList.insertLast('April', 9);
linkedList.insertLast('May', 10);
linkedList.insertLast('June', 15);
linkedList.insertLast('July', 15);
linkedList.insertLast('August', 12);
linkedList.insertLast('September', 13);
linkedList.insertLast('October', 7);
linkedList.insertLast('November', 10);
linkedList.insertLast('December', 11);

console.table(linkedList.showList());
console.log(linkedList.totalSalary());
console.log(linkedList.findMonthHaveBestSalary());
