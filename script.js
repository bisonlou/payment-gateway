
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

function pay() {
  const url = 'https://sandbox.syspearl.com/api';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization-key': 'Q05LTUtBOTk2WEtHUVBHUFRBVUhQV0ZLSk5XVU1DVzZWM0VSSEFOSk1XUjlCQldLVUtCaW5pdGlhdGVfbW9iaWxlX21vbmV5X3BheW1lbnRz'
  };

  const body = JSON.stringify({
    amount: 2000,
    merchant_code: 10021,
    narrative: 894312057,
    mm_number: "260968080022",
    external_ref: "260968086794-0003",
    action: "initiate_mobile_money_payments",
    callback_url: "https://payments.domain.net/path/to/api",
  });

  fetch(url, {
    method: 'post',
    headers: headers,
    body: body
  })
    .then(response => {
      return response.json();
    })
    .then(data => console.log(data))
    .catch(err => {
      console.log(err);
    });
}
