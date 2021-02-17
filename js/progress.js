document.addEventListener('DOMContentLoaded', () => {

    var progress = 0;
    var incrementSpeed = 1;
    var progressBar = document.querySelector('progress');
    var progressInterval = setInterval(() => {

        progress += incrementSpeed;

        progressBar.value = progress;

        if (progress >= 100) {
            clearInterval(progressInterval);
        }

    }, 10);
});