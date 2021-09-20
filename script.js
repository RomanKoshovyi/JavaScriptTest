function func(evt){
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    if (pass1.value != pass2.value){
        evt.preventDefault();
        alert("Passwords dont match! Please, try again!");
        pass1.value = '';
        pass2.value = '';
    }
    else {
        alert ("Your registration completed successfully!")
    }
}