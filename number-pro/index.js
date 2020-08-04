//some strings which are common for almost all the digits
const middle = `*   11   *`;
const threeForOne = `*  111   *`;
const fourForOne = `* 1111   *`;
const sixOnes = `* 111111 *`;
const leftOnes = `* 11     *`;
const rightOnes = `*     11 *`;
const leftRightOnes = `* 11  11 *`;
const hash = `##########`;
const emptyLine = `*        *`;
const dummy = ' ';

let res = [];

const result = document.getElementById(`result`);
const ok = document.getElementById(`ok`);
const start = document.getElementById('start');
const countdown = document.getElementById('countdown');
const input = document.getElementById(`input`);

start.onclick = () => { // countdown function
    let number = input.value;
    //result.innerHTML = '';
    setInterval(() => {
        result.innerHTML = '';

        number--;
        let num = drawNumber(number);
        for (let i = 0; i < num.length; i++) {
            result.innerHTML += '<div class="digit">' + num[i] + '</div>';
        }
    }, 1000)
}

ok.onclick = () => { //after clicking the magic happens
    result.innerHTML = ''; //clears the previous input

    res = drawNumber(Number(input.value));
    for (let i = 0; i < res.length; i++) {
        result.innerHTML += '<div class="digit">' + res[i] + '</div>';
    }
}

const drawSimple = (number) => { //this function deals only with digits
    const arr = [];
    let output = '';
    switch (number) {
        case 1:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;
            output += middle + `<br>`;
            output += threeForOne + `<br>`;
            output += fourForOne + `<br>`;
            for (let i = 0; i < 8; i++) {
                output += middle + `<br>`;
            }
            output += sixOnes + `<br>`;
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 2:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += rightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += leftOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 3:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += rightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += rightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 4:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 6; i++) {
                output += leftRightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 4; i++) {
                output += rightOnes + `<br>`;
            }
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 5:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += leftOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += rightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 6:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += leftOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += leftRightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 7:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 10; i++) {
                output += rightOnes + `<br>`;
            }
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 8:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += leftRightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += leftRightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 9:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += leftRightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 3; i++) {
                output += rightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            output += emptyLine + `<br>`;
            output += hash;
            break;
        case 0:
            output += dummy + `<br>`;
            output += hash + `<br>`;
            output += emptyLine + `<br>`;

            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }
            for (let i = 0; i < 8; i++) {
                output += leftRightOnes + `<br>`;
            }
            for (let i = 0; i < 2; i++) {
                output += sixOnes + `<br>`;
            }

            output += emptyLine + `<br>`;
            output += hash;
            break;
        default:
            break;
    }
    arr.push(output);
    return arr; //the image is here as a string
}

const drawNumber = (number) => { //the main drawing function
    let output = [];
    if (number / 10 < 1) { //if the number has only one digit
        output = drawSimple(number);
        return output;
    }
    else {
        number = number.toString(); //splitting the number to digits parsin it to a string
        for (let i = 0; i < number.length; i++) {
            output.push(drawSimple(Number(number[i]))); //calling the function for each digit
        }
        return output;
    }
}
