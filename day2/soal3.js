//Nama: Hilman Nurfahmi

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