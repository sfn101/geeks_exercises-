const API_KEY = '131e596c9c2cc9b94218d405';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

async function fetchCodes() {
    try {
        const response = await fetch(`${BASE_URL}/${API_KEY}/codes`);
        const data = await response.json();
        if (data.result === 'success') {
            populateSelects(data.supported_codes);
        } else {
            console.error('Error fetching codes:', data);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function populateSelects(codes) {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    codes.forEach(([code, name]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${name}`;
        fromSelect.appendChild(option.cloneNode(true));
        toSelect.appendChild(option);
    });
    // Set defaults
    fromSelect.value = 'USD';
    toSelect.value = 'EUR';
}

async function convert() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from-currency').value;
    const to = document.getElementById('to-currency').value;
    const resultDiv = document.getElementById('result');

    if (!amount || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount.';
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}/${API_KEY}/pair/${from}/${to}/${amount}`);
        const data = await response.json();
        if (data.result === 'success') {
            resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
        } else {
            resultDiv.textContent = 'Error: ' + data['error-type'];
        }
    } catch (error) {
        resultDiv.textContent = 'Network error. Please try again.';
    }
}

function switchCurrencies() {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    // Update conversion if amount is entered
    const amount = document.getElementById('amount').value;
    if (amount && amount > 0) {
        convert();
    }
}

document.addEventListener('DOMContentLoaded', fetchCodes);
document.getElementById('convert').addEventListener('click', convert);
document.getElementById('switch').addEventListener('click', switchCurrencies);