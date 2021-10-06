// fetch and display all crypto currencies
fetch(" https://api.coinlore.net/api/tickers/")
  .then((response) => response.json())
  .then((coins) => showCrypto(coins.data));

const showCrypto = (coins) => {

  const coinList = document.querySelector(".coin-list");
  const coinPrice = document.querySelector(".price");
  const coinMcap = document.querySelector(".market-cap");
  const coinOneHour = document.querySelector(".one-hour");
  const coinHours = document.querySelector(".hours");
  const coinOutput = document.querySelector(".output");

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

  coins.forEach((coin) => {
    const coinEl = document.createElement("p");
    //converts result into billions, rounding to 2 decimals
    coinEl.innerHTML =
      "$" +
      Math.round((coin.market_cap_usd / 1000000000) * 100) / 100 +
      " Billion";
    coinMcap.appendChild(coinEl);
  });

  coins.forEach((coin) => {
    const coinEl = document.createElement("p");
    coinEl.innerHTML = coin.percent_change_1h + "%";
    coinOneHour.appendChild(coinEl);
  });

  coins.forEach((coin) => {
    const coinEl = document.createElement("p");
    coinEl.innerHTML = coin.percent_change_24h + "%";
    coinHours.appendChild(coinEl);
  });
};
const rate = document.querySelector(".rate").value;
 // selected currency

const fiatAmount = document.querySelector(".fiatAmount-ID").value; // amount input

fetch(
  "https://free.currconv.com/api/v7/convert?q=USD_" +
  rate +
  "&compact=ultra&apiKey=1818d0fb079f7cd25a8c"
)
  .then((response) => response.json())
  .then((currencies) => convertCurrency(currencies));

  convertCurrency = (currencies) => {
  
  const coinOutput = document.querySelector(".output");

  const coinEl = document.createElement("p");
  coinEl.innerHTML = ((fiatAmount * currencies)/".price");
  coinOutput.appendChild(coinEl);
};
 const convertBtn = document.querySelector(".button");
 convertBtn.addEventListener("click",convertCurrency) ;


