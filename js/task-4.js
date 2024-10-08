const forma = document.querySelector('form.login-form');

forma.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if(email === "" || password ===""){
        alert("All form fields must be filled in");
        return;
    }
    
    console.log(`Login: ${email}, Password: ${password}`);  

    form.reset();
    
}