// video-controls.js

// Function to play or pause the video
function togglePlayPause() {
    var video = document.getElementById('video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Event listener for clicking on the video to toggle play/pause
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    video.addEventListener('click', togglePlayPause);
});
