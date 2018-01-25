function get(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(null);
}

function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}

var form = document.querySelector("form");

form.addEventListener("submit", function (event) {

  var user = {
    email: form.elements.email.value,
    name: form.elements.name.value,
    password: form.elements.password.value,
  };

  var url = 'https://44jr4rft41.execute-api.us-east-1.amazonaws.com/dev/users';
  post(url, user, function (err, res) {
    if (err) return console.error(err);

    get(url + '/' + res._id, function (err, res) {
      console.log(res);
    });
  });

  event.preventDefault();
  
});