$(document).ready(function () {

  $("#loginForm").submit(function (event) {
    event.preventDefault();
    simpleValidation();

  });

  function simpleValidation() {
    var emailElem = document.getElementById('inputEmail').value;
    var passwordElem = document.getElementById('inputPassword').value;
    const emailWarning = document.getElementById('emailHelp');
    const emailValid = document.getElementById('validFormat');
    const passwordWarning = document.getElementById('passwordHelp');

    emailWarning.classList.add('d-none');
    emailValid.classList.add('d-none');
    passwordWarning.classList.add('d-none');

    validateEmail(emailElem);

    if (emailElem == '') {
      document.loginForm.email.focus()
      emailWarning.classList.remove('d-none');
      return false;
    }

    if (passwordElem == '') {
      passwordHelp.classList.remove('d-none');
      return false;
    }
    sendForm(emailElem, passwordElem);
  }

  function validateEmail(email) {
    var emailValid = document.getElementById('validFormat');
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) {
      emailValid.classList.remove('d-none');
      return false;
    } else {
      emailValid.classList.add('d-none');
      return true;
    }
  }

});

function sendForm(login, password) {

  fetch('http://dom.elo/api/auth', {
    method: 'POST',
    body: JSON.stringify({
      login: login,
      password: password
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.status == 200) {
      return response.json();
      alert("Logged in.");
      $('#loginPrompt').modal('hide');
    } else if (respose.status == 404) {
      alert("Error.");
    } else if (response.status == 500) {
      alert("Internal server error.");
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });

}