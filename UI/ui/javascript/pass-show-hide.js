const pswrdField = document.querySelector(".form input[type='password]' "),
toggleBtn = document.querySelector(".form .field i");

toggleBtn.oneclick = ()=>{
    if(pswrdField.type == "password"){
        pswrdField.type = "text";
        toggleBtn.classList.add("active");   
    }else{
        pswrdField.type = "text";
        toggleBtn.classList.remove("active"); 
    }
}