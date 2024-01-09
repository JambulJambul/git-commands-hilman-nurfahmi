//Nama: Hilman Nurfahmi

//Challenge 3
function konversiMenit(menit) {
    let menitTemp = menit / 60;
    let detikTemp = menit % 60;
    let menitFloored = Math.floor(menitTemp)
    if (detikTemp<9){
        detikTemp = "0"+detikTemp;
    }
    let res = menitFloored+":"+detikTemp
    return res
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00