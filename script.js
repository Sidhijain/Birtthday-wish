let currentClue = 0; // Persist across function calls

const clues = [
    { question: "Soniya tu kon haii?", answer: "titli" },
    { question: "Birthday month of Sidhi?", answer: "august" },
    { question: "Anish kya peene ke liye mana krta hai?", answer: "cold coffee" },
    { question: "Home town of Anish?", answer: "satara" },
];

document.addEventListener("DOMContentLoaded", function () {
    let questionElement = document.getElementById("question");

    if (questionElement) {
        questionElement.textContent = clues[0].question; // Set the first question on page load
    }

    // Ensure background music plays (Fix autoplay issues)
    let bgMusic = document.getElementById("bg-music");
    if (bgMusic) {
        let playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => console.warn("Autoplay prevented. User interaction needed!", error));
        }
    }
});

function checkAnswer() {
    let questionElement = document.getElementById("question");
    let message = document.getElementById("message");
    let userAnswer = document.getElementById("answerInput").value.toLowerCase();

    if (userAnswer === clues[currentClue].answer) {
        currentClue++; 

        if (currentClue < clues.length) {
            questionElement.textContent = clues[currentClue].question;
            document.getElementById("answerInput").value = "";
            message.textContent = "Correct! Here's your next clue!";
        } else {
            questionElement.textContent = "🎉 Congratulations! You found the treasure!";
            message.innerHTML = "Click <a href='main.html'>here</a> for your reward!";
            document.getElementById("answerInput").style.display = "none";
        }
    } else {
        message.textContent = "Oops! Try again.";
    }
}

//for audio
document.addEventListener("click", function() {
    let audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play();
    }
});
// ✅ Keep the rest of the script inside DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    let loadMoreBtn = document.getElementById("loadMoreBtn");
    let extraGallery = document.getElementById("extraGallery");

    if (loadMoreBtn && extraGallery) {
        console.log("Surprise Page Detected!");
        loadMoreBtn.addEventListener("click", function () {
            console.log("Button Clicked!");

            // Clear existing content
            extraGallery.innerHTML = "";

            // Create a single image element
            let item = document.createElement("div");
            item.classList.add("gallery-item");
            item.classList.add("size-div");

            let img = document.createElement("img");
            img.src = "images/20250321_163238.jpg"; // Change this to the funny image path
            img.alt = "Funny Surprise";
          
            let caption = document.createElement("p");
            caption.textContent = "kitna khd ko dekhogi ab hmare sth memories dekho 😂🎭";

            item.appendChild(img);
            item.appendChild(caption);
            extraGallery.appendChild(item);

            // Hide the button after clicking
            loadMoreBtn.style.display = "none";
        });
    } else {
        console.warn("Skipping Image Logic - Not on surprise.html");
    }
    let seeMemoriesBtn = document.getElementById("seeMemoriesBtn");
    if (seeMemoriesBtn) {
        seeMemoriesBtn.addEventListener("click", function () {
            window.location.href = "memories.html";
        });
    }

    let backToGallery = document.getElementById("backToGallery");
    if (backToGallery) {
        backToGallery.addEventListener("click", function () {
            window.location.href = "surprise.html";
        });
    }
});
