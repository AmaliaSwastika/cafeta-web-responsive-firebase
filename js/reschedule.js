        var firebaseConfig = {
            apiKey: "AIzaSyDjIblRIjq8eQytnc3fUP7LQ16uwPx73lU",
            authDomain: "cafe-b9081.firebaseapp.com",
            databaseURL:"https://cafe-b9081-default-rtdb.firebaseio.com",
            projectId: "cafe-b9081",
            storageBucket: "cafe-b9081.appspot.com",
            messagingSenderId: "85348453074",
            appId: "1:85348453074:web:35d15c79ee2fc900997b0b",
            measurementId: "G-NJ5HTSTV9R"
          };
    
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    
        function searchData() {
            var searchValue = document.getElementById("searchInput").value;
    
            // Reference to your Firebase database node
            var databaseRef = firebase.database().ref('reservation/');
    
            // Query data based on the "nama" field
            databaseRef.orderByChild("email").equalTo(searchValue).once("value").then(function(snapshot) {
              var data = snapshot.val();
    
              // Check if data exists
              if (data) {
                // Iterate through the results
                snapshot.forEach(function(childSnapshot) {
                  var childKey = childSnapshot.key;
                  var childData = childSnapshot.val();
    
                  // Set the values to the form fields
                  document.getElementById('nama').value = childData.nama;
                  document.getElementById('email').value = childData.email;
                  document.getElementById('nohp').value = childData.nohp;
                  document.getElementById('outlet').value = childData.outlet;
                  document.getElementById('adult').value = childData.adult;
                  document.getElementById('date').value = childData.date;
                  document.getElementById('time').value = childData.time;
    
                  // Store the key of the data for updating and deleting
                  document.getElementById('key').value = childKey;
                });
              } else {
                // Clear the form fields
                document.getElementById('nama').value = "";
                document.getElementById('email').value = "";
                document.getElementById('nohp').value = "";
                document.getElementById('outlet').value = "";
                document.getElementById('adult').value = "";
                document.getElementById('date').value = "";
                document.getElementById('time').value = "";
                document.getElementById('key').value = "";
                alert("No data found.");
              }
            }).catch(function(error) {
              console.log("Error retrieving data: " + error.message);
            });
          }
        
        function update_user() {
            var nama = document.getElementById('nama').value;
            var email = document.getElementById('email').value;
            var nohp = document.getElementById('nohp').value;
            var outlet = document.getElementById('outlet').value;
            var adult = document.getElementById('adult').value;
            var date = document.getElementById('date').value;
            var time = document.getElementById('time').value;
            if (nama === '' || email === '' || nohp === '' || outlet === '' || adult === '' || date === '' || time === '') {
    			    alert('Please fill in all fields.');
    			    return;
    			  }
            var uid = document.getElementById('key').value; // Get the value of the 'key' input field
    
            var data = {
              nama: nama,
              email: email,
              nohp: nohp,
              outlet: outlet,
              adult: adult,
              date: date,
              time: time,
            };
    
            var updates = {};
            updates['/reservation/' + uid] = data;
            firebase.database().ref().update(updates);
    
            alert('Reservation Anda Telah di Update!');
    
            reload_page();
          }
    
        function delete_user() {
           var uid = document.getElementById('key').value; // Get the value of the 'key' input field
    
            firebase.database().ref().child('/reservation/' + uid).remove();
            alert('Reservation Anda Telah dibatalkan!');
            reload_page();
          }
    
          function reload_page() {
            window.location.reload();
          }

function validate() {
$('#validationModal').modal('show');
}
function showNotification() {
$('#validationModal').modal('hide');
$('#notificationModal').modal('show');
}