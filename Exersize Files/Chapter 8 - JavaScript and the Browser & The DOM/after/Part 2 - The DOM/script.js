// document root
console.dir(document.documentElement);
console.dir(document.head);
console.dir(document.body);

// finding elements
var ostrich = document.getElementById("gertrude");
console.log(ostrich.src);

var x = document.body.getElementsByTagName("p");
console.dir(x);

// changing elements
var heading = document.getElementsByClassName("main-heading")[0];
console.log(heading.innerHTML);

var paragraphWrapper = document.getElementById("paragraph-wrapper");
paragraphWrapper.insertBefore(paragraphWrapper.lastElementChild, paragraphWrapper.firstElementChild);

var paragraphs = document.getElementById("paragraph-wrapper");
paragraphs.appendChild(paragraphs.children[0]);

// creating elements
var paragraphs = document.getElementById("paragraph-wrapper");
var newParagraph = document.createElement("p");
newParagraph.innerHTML = "Replaced";
//paragraphs.appendChild(newParagraph);
paragraphs.replaceChild(newParagraph, paragraphs.firstElementChild);
console.dir(paragraphs.children);

// attributes
var a = document.getElementsByTagName("a")[0];
console.log(a.href);
var paras = document.body.getElementsByTagName("p");
Array.prototype.forEach.call(paras, function(para) {
    if (para.getAttribute("data-classified") == "secret")
        para.parentNode.removeChild(para);
});

// Layout
var para = document.body.getElementsByTagName("p");
lastp = para[para.length-1];
console.log("clientHeight:", lastp.clientHeight);
console.log("offsetHeight:", lastp.offsetHeight);

console.log(pageXOffset, pageYOffset);






