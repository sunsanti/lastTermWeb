// const { response } = require("express");

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// // function checkPassword(){
// //     let password = document.getElementById("pass").value;
// //     let confirm = document.getElementById("confirm").value;
// //     let message = document.getElementById("message");
// //     console.log(password,confirm);

// //     if(password.length != 0){
// //         if(password == confirm){
// //             message.textContent = "Password match";
// //         } else {
// //             password.
// //             message.textContent = "Password doesn't match";
// //             message.style.color = "#ff0000";
// //         }
// //     }
// // }

//using ajax to confirm the password
    function checkPassword(){
        document.getElementById("signupForm").addEventListener("submit",function(event){
            event.preventDefault();

            let name = document.getElementById("signupName").value;
            let email = document.getElementById("signupEmail").value;
            let address = document.getElementById("signupAddress").value;
            let password = document.getElementById("pass").value;
            let confirm = document.getElementById("confirm").value;
            let message = document.getElementById("message");
            
                fetch("/checkPassword",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, address, password, confirm }),
                })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    window.location.href = "/welcome";
                } else {
                    if(password === "" || confirm === "" || name === "" || email === "" || address === ""){
                        message.textContent = "Enter your information"
                        message.style.color = "#ff0000";
                    } else {
                        message.textContent = "Password do not match"
                        message.style.color = "#ff0000";

                        document.getElementById("pass").value = "";
                        document.getElementById("confirm").value = "";
                    }
                }
            })
            .catch(error => console.error("Error:", error));
        })
    }

//check Login if it's correct or not
    function checkLogin(){
        document.getElementById("loginForm").addEventListener("submit",function(event){
            event.preventDefault();
            let lginEmail = document.getElementById("lginEmail").value;
            let lginPass = document.getElementById("lginPass").value;
            let lginMessage = document.getElementById("lginMessage");

            fetch("/checkLogin",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ lginEmail, lginPass }),
            })
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    window.location.href = "/welcome";
                } else {
                    if(lginEmail === "" && lginPass === ""){
                        lginMessage.textContent = "Coudn't let email or password empty"
                        lginMessage.style.color = "#ff0000";
                    } else {
                        lginMessage.textContent = "Incorrect password or email"
                        lginMessage.style.color = "#ff0000";

                        document.getElementById("lginPass").value = "";
                        document.getElementById("lginEmail").value = "";
                    }
                    
                }
            })
            .catch(error => console.error("Error:", error));
        })
    }


