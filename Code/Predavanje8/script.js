// var req = new XMLHttpRequest();
// req.open("GET", "./data.json", true);
// req.addEventListener("load", function() {
//   console.log("Done:", req.status);
// });
// req.send(null);


// function backgroundReadFile(url, callback) {
//   var req = new XMLHttpRequest();
//   req.open("GET", url, true);
//   req.addEventListener("load", function () {
//     if (req.status < 400) {
//       callback(req.responseText, null);
//     } else {
//       callback(null, new Error("Request failed: " + req.statusText));
//     }
//   });
//   req.send(null);
// }

// function ovoJePozivCallbacka(success, error) {
//   if (error) {
//     console.error('Belaj!', error);
//   } else { 
//     success = JSON.parse(success);
//     console.log(success.value);
//   }
// }

// backgroundReadFile('https://api.chucknorris.io/jokes/random', ovoJePozivCallbacka);

// backgroundReadFile('data.json', function (response) {
//   console.log(response);
// });

// backgroundReadFile('data.json', function iOvoJePoziv(response) {
//   console.log(response);
// });


function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader('Access-Control-Allow-Origin', '*');
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, req.responseText);
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}

post('https://api.chucknorris.io/jokes/random', { ime: 'Suljo' }, function cb(error, success) {
  if (error) {
    console.error('Belaj u: ', error);
    return;
  }

  console.log('Prosao POST');
});