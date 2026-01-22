const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.option');

const dolarValueToday = 5.39;
const euroValueToday = 6.36;

async function convertValues() {

    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')
    const currencyImage = document.querySelector('.coin')

    const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").then( response => response.json())

    console.log(data)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);



    if (currencySelect.value == 'dolar') {

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarValueToday);

    }
//
    if (currencySelect.value == 'Euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroValueToday)
    }

}

function changeCurrency (){
    const currencyName = document.getElementById('currency-name')
    const currencyFlag = document.querySelector('.currency-flag')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyFlag.src = './assets/Dólar.svg'
    }
    
    if (currencySelect.value == 'Euro') {
        currencyName.innerHTML = 'Euro'
        currencyFlag.src = './assets/Euro.svg'

    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)