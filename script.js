document.addEventListener("DOMContentLoaded", function () {
    // Dummy data for multiple credit score submissions
    const submissions = [
        {
            name: "Rohit sharma",
            creditScore: 720,
            location: "Bengalore,karnataka",
            imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
            timestamp: new Date().toLocaleString(),
        }
    ];

    // Function to generate submission card HTML
    function createSubmissionCard(submission) {
        const scoreText = getScoreText(submission.creditScore);
        const cardHTML = `
            <div class="score-submission">
                <img class="profile-img" src="${submission.imageUrl}" alt="${submission.name}'s Profile Picture">
                <div class="submission-details">
                    <h3>${submission.name}</h3>
                    <p>Location: ${submission.location}</p>
                    <p class="score-text">Credit Score: ${submission.creditScore}</p>
                    <p class="score-text">${scoreText}</p>
                    <p class="submission-time">Submitted on: ${submission.timestamp}</p>
                </div>
            </div>
        `;
        return cardHTML;
    }

    // Function to determine the score text (Excellent, Good, Fair, Poor)
    function getScoreText(score) {
        if (score >= 750) return "Excellent";
        if (score >= 700) return "Good";
        if (score >= 650) return "Fair";
        return "Poor";
    }

    // Insert the submission cards into the DOM
    const submissionsContainer = document.getElementById("score-submissions");
    submissions.forEach(submission => {
        const cardHTML = createSubmissionCard(submission);
        submissionsContainer.innerHTML += cardHTML;
    });
});