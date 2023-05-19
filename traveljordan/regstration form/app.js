const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    // all input data recived this variables
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
// store this data in your web browser 
    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);

    // now write some condition
    if(fname==""&& lname==""&&email==""&&pass==""&&cpass==""){
        alert("input field has no value");
    } else{
        if(pass!==cpass){
            alert("password not matching");
        }else{
            
                alert('registration successful');
            }
        }
    
    }
    
    
    
