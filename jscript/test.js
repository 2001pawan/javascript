const name = "asdf"
const number = "ADSsad"
const email = "sdfdsf"

const params = new URLSearchParams( { name, number, email }).toString();
console.log(params)
// window.location.href = `display.html?${params}`;

const params1 = new URLSearchParams("name=sasss&number=0932948");
console.log(params1.toString());

console.log(params1.set('name','pas'));
console.log(params1.toString());
console.log(params1.get('number'));