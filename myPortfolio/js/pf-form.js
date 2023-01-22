const submit = document.getElementById('submitBtn')

submit.addEventListener('click', function(e) {
    e.preventDefault()
    var name = document.getElementById('name').value.toString();
    var email = document.getElementById('email').value.toString();
    var msg = document.getElementById('msg').value.toString();
    var body = 'name: ' + name + '<br> email: ' + email + '<br> message: ' + msg;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "damjanmatic@hotmail.com",
        Password: "26C52684FDA4C732D2E4394521790A054BCA",
        To: 'damjanmatic@hotmail.com',
        From: email,
        Subject: "",
        Body: body
    }).then(
        message => alert(message)
    );
})