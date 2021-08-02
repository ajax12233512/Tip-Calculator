const billElement = document.getElementById('bill');//this shit confusing idk why i cant use the value property here like: document.getElementById('bill').value;
const totalTipDisplay = document.getElementById('total');//diplayed in .results the total tip
const numOfPeople = document.getElementById('numOfPeople'); //capture the number of people to divide the tip amongst
const tipPerPersonDisplay = document.getElementById('tip');//displayed in .results for amount per person

function reset(){
    document.getElementById('bill').value = null;
    document.getElementById('numOfPeople').value = null;
    document.getElementById('tip').innerText = null;
    document.getElementById('total').innerText = null;
}

function fivePercent(){
    let bill = billElement.value;  
    let billPerPerson = numOfPeople.value;
    let tipPerPerson = bill * .05;
    let splitTip = tipPerPerson / billPerPerson;
    tipPerPersonDisplay.innerText = '$' + splitTip;
    totalTipDisplay.innerText = '$' + tipPerPerson;

}

function tenPercent(){
    let bill = billElement.value;  
    let billPerPerson = numOfPeople.value;
    let tipPerPerson = bill * .1;
    let splitTip = tipPerPerson / billPerPerson;
    tipPerPersonDisplay.innerText = '$' + splitTip;
    totalTipDisplay.innerText = '$' + tipPerPerson;
}

function fifteenPercent(){
    let bill = billElement.value;  
    let billPerPerson = numOfPeople.value;
    let tipPerPerson = bill * .15;
    let splitTip = tipPerPerson / billPerPerson;
    tipPerPersonDisplay.innerText = '$' + splitTip;
    totalTipDisplay.innerText = '$' + tipPerPerson;
}

function twentyPercent(){
    let bill = billElement.value;  
    let billPerPerson = numOfPeople.value;
    let tipPerPerson = bill * .20;
    let splitTip = tipPerPerson / billPerPerson;
    tipPerPersonDisplay.innerText = '$' + splitTip;
    totalTipDisplay.innerText = '$' + tipPerPerson;
}

function fiftyPercent(){
    let bill = billElement.value;  
    let billPerPerson = numOfPeople.value;
    let tipPerPerson = bill * .5;
    let splitTip = tipPerPerson / billPerPerson;
    tipPerPersonDisplay.innerText = '$' + splitTip;
    totalTipDisplay.innerText = '$' + tipPerPerson;
}

// function customPercent(){
//     let bill = billElement.value;  
//     let tipPerPerson = bill * .05;
//     tipDividedByPeople.innerText = tipPerPerson;
// }







