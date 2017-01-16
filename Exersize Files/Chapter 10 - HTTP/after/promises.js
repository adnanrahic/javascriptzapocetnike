



// PROMISES
function get(url) {
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function() {
      if (req.status < 400) {

        // simulate a call that takes 500 milliseconds
        setTimeout(function() {
            succeed(req.responseText);            
        }, 500);

      } else fail(new Error("Request failed: " + req.statusText));
    });
    req.addEventListener("error", function() {
      fail(new Error("Network error"));
    });
    req.send(null);
  });
}


// get("text.txt").then(function(text) {
//   console.log("text.txt:\n" + text);
// }, function(error) {
//   console.log("Failed to fetch data.txt: " + error);
// });


// get("text.txt")
//     .then(function(text) {
//         return text += text;
//     })
//     .then(function(text) {
//         console.log(text);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });


function getJSON(url) {
    return get(url).then(function(response) {
        return JSON.parse(response);
    });
}

// getJSON("suljo.txt").then(function(response) {
//     console.log(response);
// });


function showMessage(msg) {
    var el = document.createElement("div");
    el.textContent = msg;
    return document.body.appendChild(el);
}

var loading = showMessage("Loading...");
// getJSON("suljo.txt")
//     .then(function(suljo) {
//         showMessage(suljo);
//         return getJSON("meho.txt");
//     })
//     .then(function(meho) {
//         showMessage(meho);
//     })
//     .catch(function(err) {
//         showMessage(err);
//     })
//     .then(function() {
//         document.body.removeChild(loading);
//     });

// getJSON("suljo.txt")
//     .then(function(suljo) {
//         return suljo;
//     })
//     .then(function(suljo) {
//         var p = getJSON("meho.txt")
//                     .then(function(meho) {
//                         return [suljo,meho];
//                     }); 
//         return p;
//     })
//     .then(function(p) { // WHEN PROMISE IS RESOLVED
//         showMessage(p); // WE SHOW THE MESSAGE
//     })
//     .catch(function(err) {
//         showMessage(err);
//     })
//     .then(function() {
//         document.body.removeChild(loading);
//     });

var suljoPromise = getJSON("suljo.txt")
    .then(function(suljo) {
        return suljo;
    });
var mehoPromise = getJSON("meho.txt")
    .then(function(meho) {
        return meho;
    });

Promise.all([suljoPromise, mehoPromise])
    .then(function(responseArray) {
        responseArray.forEach(function(item) {
            showMessage(item);
        });
    })
    .catch(function(error) {
        showMessage(error);
    })
    .then(function() {
        document.body.removeChild(loading);
    });