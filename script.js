// --------- ETAPE 1 --------- // 
function decoupeChaine(str) {
    const arr = str.split('')
    let newStr = ""

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            newStr += arr[i]
        } else {
            newStr += arr[i] + " "
        }
    }
    console.log(newStr)
}

decoupeChaine("ab")     // renvoie "a b"
decoupeChaine("aabbca") // renvoie "aa bb c a"`


// --------- ETAPE 2 --------- // 
function decritChaine(str) {
    const arr = str.split('')
    let newStr = ""
    let count = 1
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count ++;
        } else {
            newStr += count + arr[i];
            count = 1;
		}
    }
    // console.log(newStr);
    return newStr
}

decritChaine("ab")      // renvoie "1a1b"
decritChaine("aabbca")  // renvoie "2a2b1c1a"


// --------- ETAPE 3 --------- // 
function suiteConway(carac, n) {
    let str = ""
    str += carac
    console.log(str)

    for (let i = 0; i < n - 1; i++) {
        str = decritChaine(str)
        console.log(str)
    }

}

suiteConway('a', 3)  
// a
// 1a
// 111a

suiteConway('1', 3)  
// 1
// 11
// 21