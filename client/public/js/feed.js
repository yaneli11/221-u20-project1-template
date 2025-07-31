document.addEventListener('DOMContentLoaded', function() {
    const portalButton = document.getElementById('portal_button');
    if (portalButton) {
        portalButton.addEventListener('click', function() {
            goToLocation('https://mymarist.edu');
        });
    }

    const currentStories = [
        {
            Tile: "Marist Campus Update: New Libary Hours",
            Body: "The James A. Cannavino Libary has announced extended hours for the upcoming exam period.",
            linkUri: "https://www.marist.edu/libary/hours",
            imagesuri: "https://www.marist.edu/images/libary.jpg"
        },
        {
            Title: "Alumni Spotlight: Tech CEO Visits Campus",
            Body: "Marist Alumnus and succesful tech entrepreneur, Jane Doe '05, returned to campus today.",
            linkUri: "https://www.marist.edu/alumni/spotlight-jane-doe",
            imageUri: "https://www.marist.edu/images/alumni-speaker.jpg"
        },
        {
            Title: "Students Government Elections Announced",
            Body: "The Student Governemt Elections were announced today.",
            linkUri: "https://www.marist.edu/elections/student-government",
            imageUri: "https://www.marist.edu/images/student-elections.jpg"
        },
];

function displayItem(feedItem) {
    const newsFeedElement = document.getElementById('newsfeed');

    window.addEventListener('load', function() {
        currentStories.forEach(item => {
            currentStories.forEach(item => {
                displayItem(item);
            });
        });
    });

}})