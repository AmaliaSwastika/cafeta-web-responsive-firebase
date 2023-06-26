    // Initialize Firebase
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

    // Mendapatkan referensi form login
    var loginForm = document.getElementById('loginForm');
        
    // Menangani penyerahan form login
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah pengiriman form

      // Mendapatkan nilai input
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      // Memastikan kedua input terisi
      if (!username || !password) {
        alert('Please fill in both the username and password fields.');
        return;
      }

      // Memeriksa kecocokan data pengguna dengan Firebase Database
      databaseRef.orderByChild('username').equalTo(username).once('value', function(snapshot) {
        var found = false;
        snapshot.forEach(function(childSnapshot) {
          var data = childSnapshot.val();
          if (data.password === password) {
            found = true;
            var email = data.email;

            // Membuat session menggunakan sessionStorage
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('isLoggedIn', 'true');

            alert('Login successfully!');
            
            location.assign('index.html'); // Mengarahkan pengguna ke halaman berikutnya
          }
        });

        if (!found) {
          alert('Incorrect Email or Password');
          console.log('Incorrect email or password');
        }
      });
    });

  function validate() {
  $('#validationModal').modal('show');
  }
  
  function showNotification() {
  $('#validationModal').modal('hide');
  $('#notificationModal').modal('show');
  }