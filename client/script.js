document.addEventListener("DOMContentLoaded", function () {
  const roomsContainer = document.getElementById("roomsContainer");

  async function fetchData() {
    try {
      const response = await fetch(
        "https://real-time-quiz-application.onrender.com/api/user/get-room"
      );
      const data = await response.json();
      console.log("response: ", data);

      data.data.forEach((room) => {
        const roomBox = document.createElement("div");
        roomBox.className = "d-flex justify-btw room-box";

        const h3 = document.createElement("h3");
        h3.textContent = room.roomId;

        const p = document.createElement("p");
        p.textContent = setTime(room.createdAt);

        roomBox.appendChild(h3);
        roomBox.appendChild(p);

        roomsContainer.appendChild(roomBox);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();
});

function setTime(time) {
  return moment(time).format("h:mm A");
}


function joinRoom() {
  const socket = io("https://real-time-quiz-application.onrender.com");
  // const roomId = prompt("Enter Room ID:");
  const roomId = { userId: "yash2", room: "WEwin", roomId: "98sky" };
  console.log("roomId: ", roomId);
  if (roomId) {
    socket.emit("join-room", roomId);
  } else {
    alert("Please enter a valid Room ID.");
  }
}
