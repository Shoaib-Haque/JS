(() => {
  const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
  const amount = document.querySelector("#amount");
  const from = document.querySelector("#from");
  const to = document.querySelector("#to");
  const convertBtn = document.querySelector("#convertBtn");
  const resetBtn = document.querySelector("#resetBtn");
  const hidden = document.getElementsByClassName("hidden");
  
  const exchange_rate = document.querySelector("#exchange_rate");
  const converted_price = document.querySelector("#converted_price");
  
  const generateOption = () => {
    from.options.length = 0;
    to.options.length = 0;
    for(let key in countryList) {
      let fromOption = document.createElement("option");
      fromOption.value = key;
      fromOption.innerHTML = key;
      from.append(fromOption);
  
      let toOption = document.createElement("option");
      toOption.value = key;
      toOption.innerHTML = key;
      to.append(toOption);
    }
  };

  const convert = async () => {
    let amount_val = amount.value ? amount.value : 1;
    let from_val = from.value;
    let to_val = to.value;
    let cur_from = from_val.toLowerCase();
    let cur_to = to_val.toLowerCase();
    
    let res = await fetch(`${BASE_URL}/${cur_from}.json`);
    res = await res.json();
    let rate = res[cur_from][cur_to];
    if(rate != undefined) {
      let converted_amount = amount_val * rate;
      for(let element of hidden) {
        element.style.visibility = "visible";
      }
      exchange_rate.innerHTML = `1 ${from_val} = ${rate} ${to_val}`;
      converted_price.innerHTML = `${amount_val} ${from_val} = ${converted_amount} ${to_val}`;
    } else {
      hidden[0].style.visibility = "visible";
      exchange_rate.innerHTML = `Sorry! Exchange rate not found!`;
    }
  };

  const reset = () => {
    amount.value = '';
    generateOption();

    exchange_rate.innerHTML = ``;
    converted_price.innerHTML = ``;
    for(let element of hidden) {
      element.style.visibility = "hidden";
    }
  };

  generateOption();
  convertBtn.addEventListener('click', convert);
  resetBtn.addEventListener('click', reset);
})();