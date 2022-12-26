const formEL = document.querySelector(".login-form");

formEL.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
    }
  
    const login = email.value;
    const Password = password.value;
    const form = {
      login,
      Password
    };
    console.log(form);

    
    event.currentTarget.reset();
  }