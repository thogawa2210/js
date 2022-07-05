const inventory = [
    {type:   "machine", value: 500},

    {type:   "machine", value:  650},

    {type:      "machine", value:   1000},

    {type: "furniture", value: 1200},

    {type:   "machine", value:   770}

]

let totalMachineValue = (arr)=>{
    let total = 0;
    for (let i=0;i<arr.length;i++) {
        if(arr[i].type==='machine'){
            total += arr[i].value;
        }
    }
    return total;
}

console.log(totalMachineValue(inventory));