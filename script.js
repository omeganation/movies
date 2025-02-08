const headers = {
    'Accept': '*/*',
    'Authorization': 'Bearer UCc*****ki2w',
    'x-country': 'KE',
    'x-currency': 'KES'
  };
  fetch('https://openapiuat.airtel.africa/merchant/v1/transactions',{
    method: 'GET',
    headers: headers
  }).then(function(res) {
      return res.json();
  }).then(function(body) {
      console.log(body);
  });

