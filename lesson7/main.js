article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}

const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
  const src = img.getAttribute("data-src");
  if (!src){
    return;
  }
  else {
    img.src = src;
  }
}

const imgOptions = {
  threshold = 0,
  rootMargin = "0px 0px 300px 0px";
  
};

const imgObserver = new intersectionObserver((entries, imgObserver) => {

  entries.forEach(entry => {
   
    if (!entry.isIntersecting)
    {
      return;
    } else {
      preloadImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
    
  }

}, imgOptions);
  
  images.forEach(image => {
    imageObserver.observe(image);
  });
