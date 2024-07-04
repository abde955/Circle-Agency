document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
});