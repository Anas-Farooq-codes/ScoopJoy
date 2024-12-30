// LOADER 

const preloader = document.getElementById("preloader");

// Function to hide the loader
function hideLoader() {
    preloader.style.display = 'none'; // Hide preloader
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Function to show the loader
function showLoader() {
    preloader.style.display = 'grid'; // Show preloader
    document.body.style.overflow = 'hidden'; // Block scrolling
}

// Show the loader initially
showLoader();

// Set a timeout to hide the loader after 1 second (adjust as necessary)
const hideLoaderTimeout = setTimeout(hideLoader, 1000);

// Event listener to hide the loader when the window is fully loaded
window.addEventListener('load', function() {
    // If loading is completed before 1 second, clear the timeout and ensure loader stays visible for the remaining time
    if (hideLoaderTimeout) {
        clearTimeout(hideLoaderTimeout);
        const timeElapsed = Date.now() - window.performance.timing.navigationStart;
        const remainingTime = Math.max(0, 1000 - timeElapsed);
        setTimeout(hideLoader, remainingTime);
    }
});