//Nama: Hilman Nurfahmi

//Challenge 1: Palindrome
function palindrome(kata) {
    let j = kata.length - 1;
    for (let i = 0; i < kata.length / 2; i++) {
        if(kata[i]!=kata[j]){
            return false
        }
        j--
    }
    return true
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


//Challenge 2: Menghitung Jumlah Kata
function hitungJumlahKata(kalimat) {
    if (kalimat==""){
        return 0
    }
    let spaceCounter = 1;
    for (let i = 0; i < kalimat.length; i++) {
        if(kalimat[i]===' '){
            spaceCounter++
        }
    }
    return spaceCounter;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

//Challenge 3: Password Generator
function changeVocals(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a") {
            res += "b"
        } else if (str[i] == "A") {
            res += "B"
        } else if (str[i] == "i") {
            res += "j"
        } else if (str[i] == "I") {
            res += "J"
        } else if (str[i] == "u") {
            res += "v"
        } else if (str[i] == "U") {
            res += "V"
        } else if (str[i] == "e") {
            res += "f"
        } else if (str[i] == "E") {
            res += "F"
        } else if (str[i] == "o") {
            res += "p"
        } else if (str[i] == "O") {
            res += "p"
        }
        else {
            res += str[i]
        }
    }
    return res;
}

function reverseWord(str) {
    res = ""
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res
}

function setLowerUpperCase(str) {
    res = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i]==str[i].toUpperCase()){
            res += str[i].toLowerCase()
        } else {
            res += str[i].toUpperCase()
        }
    }
    return res
}

function removeSpaces(str) {
    res = ""
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){

        }else {
            res+=str[i]
        }
    }
    return res
}

function passwordGenerator(name) {
    if (name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    let res = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    return res
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

//Challenge 4: Melee Ranged Grouping
function meleeRangedGrouping(str) {
    let res = []
    let meleeArray = []
    let rangedArray = []
    let heroArray = []
    let rawHero = ""

    if(str.length === 0){
        return res
    }


    for (let i = 0; i < str.length; i++) {
        if (str[i] != ',') {
            rawHero += str[i]
        }
        if (str[i] == ',' || str[i + 1] == undefined) {
            heroArray.push(rawHero)
            rawHero = ""
        }
    }
    let temp = ""
    let heroTemp = ""
    let heroName = ""
    let heroType = ""
    for (let i = 0; i < heroArray.length; i++) {
        heroTemp += heroArray[i]
        for (let j = 0; j < heroTemp.length; j++) {
            if (heroTemp[j] != '-') {
                temp += heroTemp[j]
            }
            if (heroTemp[j] == '-') {
                heroName += temp
                temp = ""
            }
            if (heroTemp[j + 1] == undefined) {
                heroType += temp
                temp = ""
            }
        }
        if (heroType == "Ranged") {
            rangedArray.push(heroName)
        } else if (heroType == "Melee") {
            meleeArray.push(heroName)
        }
        heroTemp = "";
        heroName = ""
        heroType = ""   
    }
    res.push(rangedArray,meleeArray)
    return res
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []

function stringToArray(string) {
    let res = []
    let temp = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ',') {
            temp.push(string[i])
            if(string[i+1]==undefined){
            res.push(temp)
            temp = []
            }
        } else {
            res.push(temp)
            temp = []
        }
    }
    return res
}

console.log(stringToArray('aqrst,ukaei,ffooo'))

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray('qwer,tyui,asdf,ghjk'))

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]