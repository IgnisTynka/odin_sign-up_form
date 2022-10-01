let pass = document.body.querySelector('#password');
let confirm_pass = document.body.querySelector('#pass_confirm');
let error_pass = document.body.querySelector('#pass_error');

pass.addEventListener('input', (event) => {
    if(pass.value == ''){
        error_pass.textContent = ''
    }
})


confirm_pass.addEventListener('input', (event) => {
    if(confirm_pass.value == '' || confirm_pass.value == pass.value){
        error_pass.textContent = ''
        pass.style.borderColor = 'lightgrey'
        confirm_pass.style.borderColor = 'lightgrey'
    }else{
        error_pass.textContent = '*Passwords do not match'
        pass.style.borderColor = 'red'
        confirm_pass.style.borderColor = 'red'
        error_pass.style.color = 'red'
    }
})