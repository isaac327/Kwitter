const config = {
      apiKey: "AIzaSyCkxh7CplPRmVANsIEzlUYyeLMGJt8cUMI",
      authDomain: "kwitter-af273.firebaseapp.com",
      databaseURL: "https://kwitter-af273-default-rtdb.firebaseio.com",
      projectId: "kwitter-af273",
      storageBucket: "kwitter-af273.appspot.com",
      messagingSenderId: "308196285183",
      appId: "1:308196285183:web:6fee2e2cae59abf9808aca"
    };
    firebase.initializeApp(config);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}