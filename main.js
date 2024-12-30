// LOADER 

const preloader = document.getElementById("preloader");

// Function to hide the loader

function hideLoader() {
    preloader.style.display = 'none'; 
    document.body.style.overflow = 'auto'; 
}

// Function to show the loader
function showLoader() {
    preloader.style.display = 'grid'; 
    document.body.style.overflow = 'hidden'; 
}

showLoader();

const hideLoaderTimeout = setTimeout(hideLoader, 1000);

window.addEventListener('load', function() {

    if (hideLoaderTimeout) {
        clearTimeout(hideLoaderTimeout);
        const timeElapsed = Date.now() - window.performance.timing.navigationStart;
        const remainingTime = Math.max(0, 1000 - timeElapsed);
        setTimeout(hideLoader, remainingTime);
    }
});