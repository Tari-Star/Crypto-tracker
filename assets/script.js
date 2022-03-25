// fetch and display all crypto currencies
fetch("https://api.coinlore.net/api/tickers/?start=0&limit=30")
  .then((response) => response.json())
  .then((coins) => showCrypto(coins.data));

const showCrypto = (coins) => {

  const coinList = document.querySelector(".coin-list");
  const coinPrice = document.querySelector(".price");
  const coinMcap = document.querySelector(".market-cap");
  const coinOneHour = document.querySelector(".one-hour");
  const coinHours = document.querySelector(".hours");
  const coinDays = document.querySelector(".days");

  coins.forEach((coin) => {
    const coinEl = document.createElement("p");
    coinEl.innerHTML = coin.symbol + " - " + coin.name;
    coinList.appendChild(coinEl);
  });

  coins.forEach((coin) => {
    const coinEl = document.createElement("p");
    coinEl.innerHTML = "$" + coin.price_usd;
    coinPrice.appendChild(coinEl);
  });
 // data for market cap
  coins.forEach((coin) => {
    const coinEl = document.createElement("p");
    //converts result into billions, rounding to 2 decimals
    coinEl.innerHTML =
      "$" +
      Math.round((coin.market_cap_usd / 1000000000) * 100) / 100 +
      " Billion";
    coinMcap.appendChild(coinEl);
  });
 // data for 1 hour
  coins.forEach((coin) => {
    const coinEl = document.createElement("p");
    coinEl.innerHTML = coin.percent_change_1h + "%";
    coinOneHour.appendChild(coinEl);

    if (coin.percent_change_1h >= 0) {
      coinEl.style.color = "#23fc5d";
    } else {
      coinEl.style.color = "#ff2b0a";
    }
  })
 // Data for 24 Hours
  coins.forEach(coin => {
    const coinEl = document.createElement("p");
    coinEl.innerHTML = (coin.percent_change_24h + "%");
    coinHours.appendChild(coinEl);

    if (coin.percent_change_24h >= 0) {
      coinEl.style.color = "#23fc5d";
    } else {
      coinEl.style.color = "#ff2b0a";
    }
  })
 // Data for 7 Days
  coins.forEach(coin => {
    const coinEl = document.createElement("p");
    coinEl.innerHTML = (coin.percent_change_7d + "%");
    coinDays.appendChild(coinEl);

    if (coin.percent_change_7d >= 0) {
      coinEl.style.color = "#23fc5d";
    } else {
      coinEl.style.color = "#ff2b0a";
    }
  })
}
// Converter 
// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";
  
// for selecting different controls
var search = document.querySelector(".fiatAmount-ID");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
  
// Event when currency is changed
fromCurrency.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
// Event when currency is changed
toCurrency.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
  
search.addEventListener('input', updateValue);
  
// function for updating value
function updateValue(e) {
    searchValue = e.target.value;
}
  
// when user clicks, it calls function getresults 
convert.addEventListener("click", getResults);
  
// function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
// display results after convertion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
  
// when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};


