//Nama: Hilman Nurfahmi

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