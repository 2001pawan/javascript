// document.getElementById('form').addEventListener('submit',function(){

//     event.preventDefault();

//     const name =  document.getElementById('name').value;
//     const number =  document.getElementById('number').value;
//     const email =  document.getElementById('email').value;

//     localStorage.setItem('name',name);
//     localStorage.setItem('number',number);
//     localStorage.setItem('email',email);

//     window.location.href='display.html';
// })

//method URL

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;

    const params = new URLSearchParams( { name, number, email }).toString();
    // console.log(params)
    window.location.href = `display.html?${params}`;

}
)

