function selectCourse() {
    const course = document.getElementById('course-dropdown').value;
    alert(`You selected the ${course} course!`);
}

function checkAnswer(selected) {
    const correctAnswer = 'A';
    if (selected === correctAnswer) {
        alert('Correct! Well done!');
    } else {
        alert('Oops! That\'s not correct. Try again.');
    }
}

function submitRating() {
    const rating = document.getElementById('rating').value;
    if (rating >= 1 && rating <= 5) {
        alert(`Thank you for rating this lesson: ${rating}/5`);
    } else {
        alert('Please enter a valid rating between 1 and 5.');
    }
}

function saveProgress() {
    const progress = { course: 'Selected Course', completion: 50 }; // Example progress data
    localStorage.setItem('learningProgress', JSON.stringify(progress));
    alert('Your progress has been saved!');
}

// Animation to dynamically update progress bar width (optional)
function updateProgressBar() {
    const progressElement = document.querySelector('.progress');
    progressElement.style.width = Math.random() * 100 + '%'; // Random example update
}
setInterval(updateProgressBar, 2000); // Progress bar animation
