//         const name = localStorage.getItem('name');
//         const number = localStorage.getItem('number');
//         const email = localStorage.getItem('email');

//         document.getElementById('name').textContent= name || "not provided";
//         document.getElementById('number').textContent= number || "not provided";
//         document.getElementById('email').textContent= email || "not provided";

//method url

const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const number = params.get('number');
const email = params.get('email');

// Display data
document.getElementById('name').textContent = name || "Not provided";
document.getElementById('number').textContent= number || "Not provided";
document.getElementById('email').textContent = email || "Not provided";
