
  // Your web app's Firebase configuration
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

  var databaseRef = firebase.database().ref('reservation/');
  var mail = document.getElementById('email');
  var email = sessionStorage.getItem('email');
  mail.value = email;
  function save_user(){
  var nama = document.getElementById('nama').value;
  var email = sessionStorage.getItem("email");
  var nohp = document.getElementById('nohp').value;
  var outlet = document.getElementById('outlet').value;
  var adult = document.getElementById('adult').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  if (nama === '' || email === '' || nohp === '' || outlet === '' || adult === '' || date === '' || time === '') {
    			    alert('Please fill in all fields.');
    			    return;
    }

  var phoneNumberRegex = /^0\d{9,12}$/;
	  if (!phoneNumberRegex.test(nohp)) {
	    alert('Please enter a valid phone number starting with 0 and up to 12 digits.');
	    return;
	  }
  
  
  var uid = firebase.database().ref().child('reservation').push().key;

  
  var data = {
  nama: nama,
  email: email,
  nohp: nohp,
  outlet: outlet,
  adult: adult,
  date: date,	 
  time: time,
  }

  var updates = {};
  updates['/reservation/' + uid] = data;
  firebase.database().ref().update(updates);

  alert('Reservation successfully!');
  reload_page();
  }
  function reload_page(){
  window.location.reload();
  }
  
		function validate() {
			$('#validationModal').modal('show');
		}
		function showNotification() {
			$('#validationModal').modal('hide');
			$('#notificationModal').modal('show');
		}