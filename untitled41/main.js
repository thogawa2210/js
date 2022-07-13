var viettel = [];
var vinaphone = [];
var mobiphone = [];
function classify(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].substring(0, 3) === '098') {
            viettel.push(array[i]);
        }
        else if (array[i].substring(0, 3) === '091') {
            vinaphone.push(array[i]);
        }
        else {
            mobiphone.push(array[i]);
        }
    }
}
var phoneNumberArray = ['0987654321', '0912345678', '0909099999', '0988666666', '0987111111', '0915555555', '0906274116'];
classify(phoneNumberArray);
console.log(viettel);
console.log(vinaphone);
console.log(mobiphone);
