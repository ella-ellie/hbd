const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 400,
  autoplay: {
    delay: 2000,
  },
});

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

firebase
  .database()
  .ref("messages")
  .once("value", function (snapshot) {
    var data = snapshot.val();

    let messages = "";

    for (let key in data) {
      let color = getColor();

      messages += `
        <div class="swiper-slide card card-message" style="background-color: ${color}">
          <div class="card-body">
            <h5 class="card-title text-center">${data[key].sender}</h5>
            <hr class="mx-4">
            <h6 class="card-subtitle mb-2 text-body-secondary text-center">
              ${data[key].message}
            </h6>
          </div>
        </div>
      `;
    }

    document.querySelector(".swiper-wrapper-messages").innerHTML = messages;

    const message = new Swiper(".messages", {
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 20000,
      },
      effect: "cards",
    });
  });

function getColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
}

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
}

myAudio.onplaying = function () {
  isPlaying = true;
};

myAudio.onpause = function () {
  isPlaying = false;
};
