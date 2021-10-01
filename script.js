

//Upfront Definitions
const fiatType = document.getElementById('fiatType-ID');
const crypto1Type = document.getElementById('crypto1Type-ID');
const fiatAmount = document.getElementById('fiatAmount-ID');
const crypto1Amount = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const submit = document.getElementById('submit');

// Event Listeners
fiatType.addEventListener('change', calculate);
fiatAmount.addEventListener('input', calculate);
crypto1Type.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
submit.addEventListener('click', () => {
  const temp = fiatType.value;
  fiatType.value = crypto1Type.value;
  crypto1Type.value = temp;
  calculate();
});


