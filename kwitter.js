// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwkWlHJfY26D5RMXi3ubUuBvE4Gfy6Cao",
  authDomain: "kwitter-88b20.firebaseapp.com",
  databaseURL: "https://kwitter-88b20-default-rtdb.firebaseio.com",
  projectId: "kwitter-88b20",
  storageBucket: "kwitter-88b20.appspot.com",
  messagingSenderId: "861076599664",
  appId: "1:861076599664:web:13d5c4acc2f9b970e4d5b5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
});
 window.location = "kwitter_room.html"
}
