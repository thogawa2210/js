import {LinkedList} from "./LinkedList";

let linkedList = new LinkedList;
linkedList.insertFirst('Thọ', 5);
linkedList.insertFirst('Thọ', 10);
linkedList.insertFirst('Huy', 3);
linkedList.insertFirst('Sơn', 7);
linkedList.insertFirst('Kiên', 10);
linkedList.insertFirst('Tùng', 8);
linkedList.insertLast('Thứ', 2);

console.log(linkedList.showList());
console.log(linkedList.totalStudentsFail());
console.log(linkedList.findByName('Thọ'));
console.log(linkedList.listStudentMaxScore());