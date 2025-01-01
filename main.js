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

// GSAP 

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#s1",
      start: "20% 65%",
      end: "80% 50%",
      scrub: true,
    
    }
  });

  tl.to(".hero-center-image", {
    top: "158%",
    left: "50%",
    rotate: "0",
    width: "12vw",

  })

  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#s2",
      start: "0% 65%",
      end: "80% 50%",
      scrub: true,
    }
  });

  tl.to(".hero-center-image", {
    top: "158%",
    left: "50%",
    rotate: "0",
    width: "12vw",

  })

  tl1.to(".hero-center-image", {
    top: "260.5%",
    left: "20.2%",
    rotate: "360",
    width: "8vw",

  })

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#s3",
      start: "20% 65%",
      end: "80% 50%",
      scrub: true,
    }
  });

  tl.to(".hero-center-image", {
    top: "160%",
    left: "50%",
    width: "12vw",

  })

  tl2.to(".hero-center-image", {
    top: "331.3%",
    left: "29%",
    rotate: "-55deg",
    width: "17vw",

  })