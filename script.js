   fetch(' https://api.coinlore.net/api/tickers/?start=200&limit=100')
  .then(response => response.json())
  .then(data => console.log(data));
//   .then (function(response) {
//     var coin = document.querySelector(".coin");
//     var crypto = document.createElement("li");
//     crypto.setAttribute("class", response.data[0]);
//     coin.appendChild(crypto);
//   })

  