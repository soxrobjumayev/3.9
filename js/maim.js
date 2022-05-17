var Form = document.querySelector('.form')
var input_login = document.querySelector('.input_login')
var divEL = document.querySelector('.div')
var paswordlog = "M_F_A"

var input_login = document.querySelector('.input_login')
var divEL = document.querySelector('.div')
var pasword = "999"


var div_div = (input_login == paswordlog)
var div_div = (input_login == pasword)


Form.addEventListener('submit', function(event) {
        event.preventDefault();

        divEL.textContent = div_div+"error";

    
    

    
    })
