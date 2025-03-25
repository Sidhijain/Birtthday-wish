function checkAnswer() { 
    let questionElement = document.getElementById("question");
    let message = document.getElementById("message");
    let userAnswer = document.getElementById("answerInput").value.toLowerCase();

    const clues = [
        { question: "Final Question! What's our favorite hangout spot?", answer: "cafe" }
    ];

    let currentClue = 0; 
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

    let questionElement = document.getElementById("question");
    if (questionElement) {
        console.log("Treasure Hunt Page Detected!");
        questionElement.textContent = "Final Question! What's our favorite hangout spot?";
    }

    let loadMoreBtn = document.getElementById("loadMoreBtn");
    let extraGallery = document.getElementById("extraGallery");

    if (loadMoreBtn && extraGallery) {
        console.log("Surprise Page Detected!");
        loadMoreBtn.addEventListener("click", function () {
            console.log("Button Clicked!");
            let extraImages = [
                { src: "images/img1.jpg", caption: "Your cutest childhood moment! 🍼" },
                { src: "images/img2.jpg", caption: "A memory from our last trip! ✈️" },
                { src: "images/img3.jpg", caption: "The best cake we ever had! 🎂" },
                { src: "images/img4.jpg", caption: "That day we laughed till we cried! 😂" },
                { src: "images/img5.jpg", caption: "A dream destination for us! 🌍" }
            ];

            // Shuffle images
            extraImages.sort(() => Math.random() - 0.5);

            for (let i = 0; i < 3; i++) {
                let item = document.createElement("div");
                item.classList.add("gallery-item");

                let img = document.createElement("img");
                img.src = extraImages[i].src;
                img.alt = "Extra Memory";

                let caption = document.createElement("p");
                caption.textContent = extraImages[i].caption;

                item.appendChild(img);
                item.appendChild(caption);
                extraGallery.appendChild(item);
            }

            // Hide button after clicking
            loadMoreBtn.style.display = "none";
        });
    } else {
        console.warn("Skipping Image Gallery Logic - Not on surprise.html");
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
    }});
