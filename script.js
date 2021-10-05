   fetch(' https://api.coinlore.net/api/tickers/')
  .then(response => response.json())
  .then(coins => showCrypto(coins.data));

  const showCrypto = coins => {
    const coinList = document.querySelector(".coin-list");
    const coinPrice = document.querySelector(".price");
    const coinMcap =document.querySelector(".market-cap");
    const coinOneHour = document.querySelector(".one-hour");
    const coinHours = document.querySelector(".hours");

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = (coin.symbol + " - " + coin.name);
      coinList.appendChild(coinEl);
    })

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = (coin.price_usd);
      coinPrice.appendChild(coinEl);
    })

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = (coin.market_cap_usd);
      coinMcap.appendChild(coinEl);
    })

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = (coin.percent_change_1h);
     coinOneHour.appendChild(coinEl);
    })

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = (coin.percent_change_24h);
      coinHours.appendChild(coinEl);
    })
  }

  var userInput = document.getElementById('amount');
userInput.addEventListener('keyup', function(e) {
    if (isNumeric(this.value) == true) {
      var divide = Math.round(this.value / 12);
      document.getElementById('anwsers').innerHTML = divide;
    }
})

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

 






  