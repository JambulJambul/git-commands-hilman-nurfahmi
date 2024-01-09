//Nama: Hilman Nurfahmi

//Challenge 5: String to Array
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