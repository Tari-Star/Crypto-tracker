

//Upfront Definitions
const fiatType = document.getElementById('fiatType-ID');
const fiatAmount = document.getElementById('fiatAmount-ID');
const crypto1Type = document.getElementById('crypto1Type-ID');
const crypto1Amount = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const submit = document.getElementById('submit');

// Event Listeners
fiatType.addEventListener('change', fiatSwap);
fiatAmount.addEventListener('input', fiatSwap);
crypto1Type.addEventListener('change', fiatSwap);
amountEl_two.addEventListener('input', fiatSwap);
submit.addEventListener('click', () => {
  const temp = fiatType.value;
  fiatType.value = crypto1Type.value;
  crypto1Type.value = temp;
  fiatSwap();
});

//Function Needed: Fiat Selected to USD Value Converter
function fiatSwap() {
    const fiat_to_convert = fiatType.value;
    const usd_intermediary = currencyEl_two.value;
    // Need Fiat Exchange API
    fetch(`${fiat_to_convert}`)
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        const rate = data.conversion_rates[usd_intermediary];
        rateEl.innerText = `1 ${fiat_to_convert} = ${rate} ${usd_intermediary}`;
  
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      });
  }

//Function Needed: USD Value to Crypto1 Value
function calculate() {
    const fiatSelected = fiatType.value;
    const cryptoSelected1 = crypto1Type.value;
  
    fetch(`https://api.coinlore.net/api/tickers/?start=0&limit=15${fiatSelected}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const rate = data.price_usd[cryptoSelected1];
        rate.innerText = `1 ${fiatSelected} = ${rate} ${cryptoSelected1}`;
  
        amountEl_two.value = (fiatAmount.value * rate).toFixed(2);
      });
  }
  
  

calculate();


