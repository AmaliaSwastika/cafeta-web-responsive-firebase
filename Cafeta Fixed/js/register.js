    var firebaseConfig = {
		  apiKey: "AIzaSyDjIblRIjq8eQytnc3fUP7LQ16uwPx73lU",
		  authDomain: "cafe-b9081.firebaseapp.com",
		  databaseURL:"https://cafe-b9081-default-rtdb.firebaseio.com/",
		  projectId: "cafe-b9081",
		  storageBucket: "cafe-b9081.appspot.com",
		  messagingSenderId: "85348453074",
		  appId: "1:85348453074:web:35d15c79ee2fc900997b0b",
		  measurementId: "G-NJ5HTSTV9R"
		};

		 // Initialize Firebase
		 firebase.initializeApp(firebaseConfig);
		 firebase.analytics();

    // Mendapatkan referensi database Firebase
    var databaseRef = firebase.database().ref('register/');

    // Mendapatkan referensi form pendaftaran
    var registerForm = document.getElementById('registerForm');

    // Menangani penyerahan form pendaftaran
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah pengiriman form

      // Mendapatkan nilai input
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      // Memastikan semua input terisi
      if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }

      // Membuat objek data pengguna
      var userData = {
        username: username,
        email: email,
        password: password
      };

      // Membuat session menggunakan sessionStorage
      sessionStorage.setItem('username', username);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('isLoggedIn', 'true');

      // Menyimpan data pengguna ke Firebase Database
      databaseRef.push(userData)
        .then(function() {
          alert('Registration successful!'); // Pemberitahuan berhasil mendaftar
          location.assign('index.html'); // Mengosongkan form setelah pendaftaran berhasil
        })
        .catch(function(error) {
          console.log('Registration failed:', error); // Menampilkan pesan error jika pendaftaran gagal
        });
    });

  function validate() {
  $('#validationModal').modal('show');
  }
  
  function showNotification() {
  $('#validationModal').modal('hide');
  $('#notificationModal').modal('show');
  }