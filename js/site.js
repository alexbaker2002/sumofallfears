/** Alex Baker 2021 
 * Created at Coder Foundry Bootcamp
 * 
 * Basic Website Template for showing challenges on Portfolio
 * 
 * Javascript 
 * 
 * 
 * 
 * ///
 * tableTemplate -- 5 table rows no headers
 * 
 * //sweet alert
 * Swal.fire(msg);
 */




function getvalues() {
    let kValue = 0;
    kValue = "17";
    kValue = parseInt(kValue);



    if (isNaN(kValue)) {
        alert(" K is not a number!!")
        return;
    }
    let result = checkArray(kValue);
    displayResult(result);
}


function checkArray(kValue) {
    const array = [10, 15, 3, 7];

    let output = false;

    for (let i = 0; i <= array.length - 2; i++) {
        for (let j = i + 1; j <= array.length - 1; j++) {
            let outerValue = array[i];
            let innerValue = array[j];
            if (outerValue + innerValue == kValue) {
                output = true;
                return output;
            }
        }
    }

}

function checkArrayB(kValue) {
    // using indexOf()
    const array = [10, 15, 3, 7];
    let output = false;
    for (let i = 0; i < array.length - 2; i++) {
        let checkValue = kValue - array[i];
        if (array.indexOf(checkValue, i) >= 0) {
            output = true;
            return output;
        }
    }
    return output;
}


function displayResult(result) {
    if (result) {
        output.innerHTML = "True";
    } else {
        output.innerHTML = "False";
    }
}