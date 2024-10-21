// Registration AJAX request
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);

    fetch('register.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => alert(data.message));
});

// Login AJAX request
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);

    fetch('login.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => alert(data.message));
});

// Donation AJAX request
document.getElementById('donateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('food_type', document.getElementById('foodType').value);
    formData.append('quantity', document.getElementById('quantity').value);
    formData.append('location', document.getElementById('location').value);
    formData.append('image', document.getElementById('image').files[0]);

    fetch('donate.php', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => alert(data.message));
});
