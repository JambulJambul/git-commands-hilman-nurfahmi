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