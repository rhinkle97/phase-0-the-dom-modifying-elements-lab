// Write your code here!
const body = document.body;
let newHeader = document.createElement("h1");
newHeader.textContent = "Ryan is the champion";
newHeader.nodeName = "h1#victory";
newHeader.id = 'victory';
body.append(newHeader);