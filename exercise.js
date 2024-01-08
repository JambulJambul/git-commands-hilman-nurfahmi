//Challenge 1
function bandingkanAngka(angka1, angka2) {
    if (angka1 === angka2) {
        return -1;
    }
    else if (angka1 > angka2) {
        return false;
    } else if (angka2 > 1) {
        return true;
    }  
}


// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

//Challenge 2
function balikKata(kata) {
    let res = "";
    for(let i=kata.length-1;i>=0;i--){
        res+=kata[i];
    }
    return res;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


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

//Challenge 4
function xo(str) {
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "x") {
            xCount++;
        } else if (str[i] == "o") {
            oCount++;
        }
        
    }
    if (xCount == oCount) {
        return true
    } else {
        return false
    }
}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

//Challenge 5
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

const dataHandling = (params) => {
    let res = "";
    for(let i = 0;i<params.length;i++){
        res+=`
Nomor ID: ${params[i][0]}
Nama Lengkap: ${params[i][1]}
TTL: ${params[i][2]}${params[i][3]}
Hobi: ${params[i][4]}\n`
    }
    return res
}
console.log(dataHandling(input))

// Expected Result
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca
 
// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar
 
// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak
 
// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun
