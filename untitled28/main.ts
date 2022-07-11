import {ArrayList} from "./ArrayList";

interface Post {
    title: string
}

let arrayList = new ArrayList<Post>();
arrayList.add({title: 'Lập trình JS'});
arrayList.add({title: 'Lập trình PHP'});
arrayList.add({title: 'Lập trình Java'});
console.log(arrayList.container)
arrayList.remove();
console.log(arrayList.container)