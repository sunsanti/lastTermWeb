const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function checkPassword(){
    let password = document.getElementById("pass").value;
    let confirm = document.getElementById("confirm").value;
    let message = document.getElementById("message");
    console.log(password,confirm);

    if(password.length != 0){
        if(password == confirm){
            message.textContent = "Password match";
        } else {
            message.textContent = "Password doesn't match";
            message.style.color = "#ff0000";
        }
    }
}