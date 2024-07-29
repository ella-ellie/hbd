const firebaseConfig = {
  apiKey: "AIzaSyC7tHQR2gA4SSw18WfUoW79y0fJVHcUppA",
  authDomain: "hbd-ella.firebaseapp.com",
  projectId: "hbd-ella",
  storageBucket: "hbd-ella.appspot.com",
  databaseURL: "https://hbd-ella-default-rtdb.firebaseio.com/",
  messagingSenderId: "311540780660",
  appId: "1:311540780660:web:75b7144726a40e9f3f8b21",
  measurementId: "G-KR30KDPE4C",
};

firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database().ref("messages");

document.getElementById("message-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get values
  let sender = getInputVal("sender");
  let message = getInputVal("message");

  saveMessage(sender, message);

  alert("Terima kasih sudah menambahkan pesan!")

  window.location.reload();
});

// Get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(sender, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    sender: sender,
    message: message,
  });
}

firebase
  .database()
  .ref("messages")
  .once("value", function (snapshot) {
    var data = snapshot.val();
    console.log(data);
  });
