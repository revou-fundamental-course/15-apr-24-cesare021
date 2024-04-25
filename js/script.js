const inputSuhu1 = document.getElementById("inputSuhu1");
const inputSuhu2 = document.getElementById("inputSuhu2");
const suhuAwal = document.getElementById("suhuAwal");
const suhuTujuan = document.getElementById("suhuTujuan");
const formulaTextarea = document.getElementById("formula");
const penjelasanTextarea = document.getElementById("penjelasan");
// const convertButton = document.getElementById("convertButton");

function konversiSuhu(value, from, to){
    let result;

    switch(from){
        case 'celcius':
            switch(to){
                case 'fahrenheit':
                    result = value * 9 / 5 + 32;
                    break;
                case 'kelvin':
                    result = value + 273.15;
                    break;
                case 'reamur':
                    result = value * 4 / 5;
                    break;
                default:
                    result = value;
            }
            break;
        case 'fahrenheit':
            switch(to){
                case 'celcius':
                    result = (value - 32) * 5 / 9;
                    break;
                case 'kelvin':
                    result = (value - 32) * 5 / 9 + 273.15;
                    break;
                case 'reamur':
                    result = (value - 32) * 4 / 9;
                    break;
                default:
                    result = value;
            }
            break;
        case 'kelvin':
            switch(to){
                case 'celcius':
                    result = value - 273.15;
                    break;
                case 'fahrenheit':
                    result = (value - 273.15) * 9 / 5 + 32;
                    break;
                case 'reamur':
                    result = (value - 273.15) * 4 / 5;
                    break;
                default:
                    result = value;
            }
            break;
        case 'reamur':
            switch(to){
                case 'celcius':
                    result = value * 5 / 4;
                    break;
                case 'fahrenheit':
                    result = value * 9 / 4 + 32;
                    break;
                case 'kelvin':
                    result = value * 5 / 4 + 273.15;
                    break;
                default:
                    result = value;
            }
            break;
        default:
            result = value
    }
    return result;
}

function updateRightValue(){
    const value = parseFloat(inputSuhu1.value);
    const from = suhuAwal.value;
    const to = suhuTujuan.value;

    const result = konversiSuhu(value, from, to);
    inputSuhu2.value = result.toFixed(2);
}

function updateLeftValue(){
    const value = parseFloat(inputSuhu2.value);
    const from = suhuTujuan.value;
    const to = suhuAwal.value;
    
    const result = konversiSuhu(value, from, to);
    inputSuhu1.value = result.toFixed(2);
}
function destinationUnit(){
    const selectedFrom = suhuAwal.value;
    const selectedTo = suhuTujuan.value;
    const newValue = konversiSuhu(parseFloat(inputSuhu1.value), selectedFrom, selectedTo);
    inputSuhu2.value = newValue.toFixed(2);
}

// function displayFormula(from, to){
//     let formula = " ";
//     switch (from) {
//         case 'celcius':
//             formula += '${inputSuhu1}' + "°C";
//             break;
//         case 'fahrenheit':
//             formula += "(°F - 32) x 5/9";
//             break;
//         case 'kelvin':
//             formula += "K - 273.15";
//             break;
//         case 'reamur':
//             formula += "(°R x 5/4)";
//             break;
//     }
//     formula += " = ";
//     switch (to) {
//         case 'celcius':
//             formula += "°C";
//             break;
//         case 'fahrenheit':
//             formula += "(°C x 9/5) + 32";
//             break;
//         case 'kelvin':
//             formula += "°C + 273.15";
//             break;
//         case 'reamur':
//             formula += "°C x 4/5";
//             break;
//     }
//     formulaTextarea.value = formula;
// }

function displayFormula() {
    const value1 = parseFloat(inputSuhu1.value);
    const value2 = parseFloat(inputSuhu2.value);
    const from = suhuAwal.value;
    const to = suhuTujuan.value;


    let formula = "";

    // Membuat formula berdasarkan pilihan suhu awal dan tujuan
    switch (from) {
        case 'celcius':
            switch (to) {
                case 'fahrenheit':
                    formula = `(${value1} °C × 9/5) + 32`;
                    break;
                case 'kelvin':
                    formula = `${value1} °C + 273.15`;
                    break;
                case 'reamur':
                    formula = `${value1} °C × 4/5`;
                    break;
                default:
                    formula = "";
            }
            break;
        case 'fahrenheit':
            switch (to) {
                case 'celcius':
                    formula = `(${value1} °F - 32) × 5/9`;
                    break;
                case 'kelvin':
                    formula = `(${value1} °F - 32) × 5/9 + 273.15`;
                    break;
                case 'reamur':
                    formula = `(${value1} °F - 32) × 4/9`;
                    break;
                default:
                    formula = "";
            }
            break;
        case 'kelvin':
            switch (to) {
                case 'celcius':
                    formula = `${value1} K - 273.15`;
                    break;
                case 'fahrenheit':
                    formula = `(${value1} K - 273.15) × 9/5 + 32`;
                    break;
                case 'reamur':
                    formula = `(${value1} K - 273.15) × 4/5`;
                    break;
                default:
                    formula = "";
            }
            break;
        case 'reamur':
            switch (to) {
                case 'celcius':
                    formula = `(${value1} °R × 5/4)`;
                    break;
                case 'fahrenheit':
                    formula = `(${value1} °R × 9/4) + 32`;
                    break;
                case 'kelvin':
                    formula = `(${value1} °R × 5/4) + 273.15`;
                    break;
                default:
                    formula = "";
            }
            break;
        default:
            formula = "";
    }
    
    formulaTextarea.value = formula;
}

function displayPenjelasan(){
    const value1 = parseFloat(inputSuhu1.value);
    const value2 = parseFloat(inputSuhu2.value);
    const from = suhuAwal.value;
    const to = suhuTujuan.value;


    let penjelasan = "";

    switch (from) {
        case 'celcius':
            switch (to) {
                case 'fahrenheit':
                    penjelasan = `Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celsius (°C) dikali 9/5 ditambah 32`;
                    break;
                case 'kelvin':
                    penjelasan = `Suhu S dalam kelvin (K) sama dengan suhu S dalam derajat Celsius (°C) ditambah 273.15`;
                    break;
                case 'reamur':
                    penjelasan = `Suhu S dalam derajat Reamur (°R) sama dengan suhu S dalam derajat Celsius (°C) dikali 4/5`;
                    break;
                default:
                    penjelasan = "";
            }
            break;
        case 'fahrenheit':
            switch (to) {
                case 'celcius':
                    penjelasan = `Suhu S dalam derajat Celsius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32, kemudian dikali 5/9`;
                    break;
                case 'kelvin':
                    penjelasan = `Suhu S dalam kelvin (K) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32, kemudian dikali 5/9, ditambah 273.15`;
                    break;
                case 'reamur':
                    penjelasan = `Suhu S dalam derajat Reamur (°R) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32, kemudian dikali 4/9`;
                    break;
                default:
                    penjelasan = "";
            }
            break;
        case 'kelvin':
            switch (to) {
                case 'celcius':
                    penjelasan = `Suhu S dalam derajat Celsius (°C) sama dengan suhu S dalam kelvin (K) dikurangi 273.15`;
                    break;
                case 'fahrenheit':
                    penjelasan = `Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam kelvin (K) dikurangi 273.15, kemudian dikali 9/5, ditambah 32`;
                    break;
                case 'reamur':
                    penjelasan = `Suhu S dalam derajat Reamur (°R) sama dengan suhu S dalam kelvin (K) dikurangi 273.15, kemudian dikali 4/5`;
                    break;
                default:
                    penjelasan = "";
            }
            break;
        case 'reamur':
            switch (to) {
                case 'celcius':
                    penjelasan = `Suhu S dalam derajat Celsius (°C) sama dengan suhu S dalam derajat Reamur (°R) dikali 5/4`;
                    break;
                case 'fahrenheit':
                    penjelasan = `Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Reamur (°R) dikali 9/4, ditambah 32`;
                    break;
                case 'kelvin':
                    penjelasan = `Suhu S dalam kelvin (K) sama dengan suhu S dalam derajat Reamur (°R) dikali 5/4, ditambah 273.15`;
                    break;
                default:
                    penjelasan = "";
            }
            break;
        default:
            penjelasan = "";
    }
    
    penjelasanTextarea.value = penjelasan;
}

function resetValue(){
    inputSuhu1.value = "";
    inputSuhu2.value = "";
    suhuAwal.value = "celcius";
    suhuTujuan.value = "celcius";
    formula.value = "";
    penjelasan.value = "";

}

function reverseSelectOption(){
    const temp = suhuAwal.value;
    suhuAwal.value = suhuTujuan.value;
    suhuTujuan.value = temp;
    destinationUnit();
    displayFormula();
    displayPenjelasan();
}

inputSuhu1.addEventListener('input', updateRightValue);
inputSuhu2.addEventListener('input', updateLeftValue);
suhuAwal.addEventListener('change', destinationUnit);
suhuTujuan.addEventListener('change', destinationUnit);

// Inisialisasi konversi awal
updateRightValue();
updateLeftValue();

//code test display formula
inputSuhu1.addEventListener('input', displayFormula);
inputSuhu2.addEventListener('input', displayFormula);
suhuAwal.addEventListener('change', displayFormula);
suhuTujuan.addEventListener('change', displayFormula);

//code test display penjelasan
inputSuhu1.addEventListener('input', displayPenjelasan);
inputSuhu2.addEventListener('input', displayPenjelasan);
suhuAwal.addEventListener('change', displayPenjelasan);
suhuTujuan.addEventListener('change', displayPenjelasan);


displayPenjelasan();
displayFormula();

// suhuAwal.addEventListener('change', () => {
//     displayFormula(suhuAwal.value, suhuTujuan.value);
// });
// suhuTujuan.addEventListener('change', () => {
//     displayFormula(suhuAwal.value, suhuTujuan.value);
// });

// displayFormula(suhuAwal.value, suhuTujuan.value);


// function convertButtonClicked(){
//     updateRightValue();
//     updateLeftValue();
// }

// convertButton.addEventListener('click', convertButtonClicked);