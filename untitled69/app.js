let arr = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];

let sumMaleScore = 0;
let male = 0;
let sumFemaleScore = 0;
let female = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i].gender === 'male') {
        male +=1;
        sumMaleScore += arr[i].point;
    }else{
        female += 1;
        sumFemaleScore += arr[i].point;
    }
}

console.log(` Điểm trung bình của các bạn nam là ${sumMaleScore/male}`);
console.log(` Điểm trung bình của các bạn nữ là ${sumFemaleScore/female}`);

