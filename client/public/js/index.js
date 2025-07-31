function checkKeyPress(event) {
    if (event.code === ' '); {
        goToLocation('feed.html')
}
document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        checkKeyPress();
    }

});

document.addEventListener('DOMContentLoaded', function() {
    const fadeText = document.querySelector('.fade_text'); 
    if (FadeText) {
         fadeText.Function()
    }})
}