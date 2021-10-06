   fetch(' https://api.coinlore.net/api/tickers/')
  .then(response => response.json())
  .then(coins => showCrypto(coins.data));

  fetch()

  const showCrypto = coins => {
    const coinList = document.querySelector(".coin-list");
    const coinPrice = document.querySelector(".price");
    const coinMcap =document.querySelector(".market-cap");
    const coinOneHour = document.querySelector(".one-hour");
    const coinHours = document.querySelector(".hours");
    const coinOutput = document.querySelector(".output")

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = (coin.symbol + " - " + coin.name);
      coinList.appendChild(coinEl);
    })

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = "$" + (coin.price_usd)
      coinPrice.appendChild(coinEl);
    })

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      //converts result into billions, rounding to 2 decimals
      coinEl.innerHTML = ("$" + Math.round((coin.market_cap_usd / 1000000000)*100)/100 + " Billion");
      coinMcap.appendChild(coinEl);
    })

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = (coin.percent_change_1h + "%");
     coinOneHour.appendChild(coinEl);
    })

    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      coinEl.innerHTML = (coin.percent_change_24h + "%");
      coinHours.appendChild(coinEl);
    })

    //Output Calculator (framework - needs work)
    coins.forEach(coin => {
      const coinEl = document.createElement("p");
      if (document.getElementById("rate") = "USD") {
        coinEl.innerHTML = (coin.price_usd / document.getElementById("amount"));
      };

      if (document.getElementById("rate") = "GBP") {
        coinEl.innerHTML = ((coin.price_usd*.73) / document.getElementById("amount"));
      };

      if (document.getElementById("rate") = "EUR") {
        coinEl.innerHTML = ((coin.price_usd*.86) / document.getElementById("amount"));
      };

      coinOutput.appendChild(coinEl);
    })
  };  

  



  
