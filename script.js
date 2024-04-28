const data = [
  {
    name: "Tanya Sinclair",
    position: "UX Engineer",
    img: "./images/image-tanya.jpg",
    text: `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
  },
  {
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    img: "./images/image-john.jpg",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer. ” John Tarkpor
    Junior Front-end Developer ”`,
  },
];

// Getting Required Elements
const testimonialsText = document.getElementById("testimonials-text");
const userName = document.getElementById("user-name");
const userProfession = document.getElementById("user-profession");
const userImage = document.getElementById("slider-img");

// Getiing Required Btn
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let count = 0;

updateSlider(count);

// Event Listener for prev button
prevBtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = data.length - 1;
  }
  updateSlider(count);
});

// Event Listener for next button
nextBtn.addEventListener("click", () => {
  count++;
  if (count > data.length - 1) {
    count = 0;
  }

  updateSlider(count);
});

// Funciton for updating the content
function updateSlider(index) {
  testimonialsText.textContent = data[index].text;
  userName.textContent = data[index].name;
  userProfession.textContent = data[index].position;
  userImage.src = data[index].img;
}

// Event listener for arrow right and arrow left key
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    count++;
    if (count > data.length - 1) {
      count = 0;
    }
    updateSlider(count);
  } else if (e.key === "ArrowLeft") {
    count--;
    if (count < 0) {
      count = data.length - 1;
    }
    updateSlider(count);
  }
});
