var firebaseConfig = {
    apiKey: "AIzaSyCNA5kvWBrWKrlKUjT1rpLNBEQPMbf6Xng",
    authDomain: "web-app-project-e01a8.firebaseapp.com",
    databaseURL: "https://web-app-project-e01a8-default-rtdb.firebaseio.com",
    projectId: "web-app-project-e01a8",
    storageBucket: "web-app-project-e01a8.appspot.com",
    messagingSenderId: "978187896082",
    appId: "1:978187896082:web:beea13eb75b1a0e6ccdfcb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

    
      
      
      
      
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
             Room_names = childKey;
             console.log("room name -" + Room_names);
             row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
             
              document.getElementById("output").innerHTML += row;
             
               
            });});
          }
      getData();
      
      
      function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
      }
      
      function back(){
        window.location = "index.html";
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
      }