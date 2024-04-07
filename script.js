

// Function to start animations when elements are in view
function startAnimationIfInView() {
  var green1 = document.getElementById('green1');
  var gcircle1 = document.getElementById('gcircle1');
  var green2 = document.getElementById('green2');
  var gcircle2 = document.getElementById('gcircle2');
  var green3 = document.getElementById('green3');
  var gcircle3 = document.getElementById('gcircle3');
  var green4 = document.getElementById('green4');
  var gcircle4 = document.getElementById('gcircle4');
  var green5 = document.getElementById('green5');
  var gcircle5 = document.getElementById('gcircle5');

  if (
    isElementInViewport(green1) &&
    isElementInViewport(gcircle1) &&
    isElementInViewport(green2) &&
    isElementInViewport(gcircle2) &&
    isElementInViewport(green3) &&
    isElementInViewport(gcircle3) &&
    isElementInViewport(green4) &&
    isElementInViewport(gcircle4) &&
    isElementInViewport(green5) &&
    isElementInViewport(gcircle5)
  ) {
    green1.classList.add('animate');
    gcircle1.classList.add('animate');
    green2.classList.add('animate');
    gcircle2.classList.add('animate');
    green3.classList.add('animate');
    gcircle3.classList.add('animate');
    green4.classList.add('animate');
    gcircle4.classList.add('animate');
    green5.classList.add('animate');
    gcircle5.classList.add('animate');
  }
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Call startAnimationIfInView when the page is scrolled
window.addEventListener('scroll', startAnimationIfInView);


    function hideProjectContainer() {
        var projectContainer = document.getElementById("projectContainer");
        var chulaGharPro = document.getElementById("chulaGharPro");
        
        projectContainer.style.display = "none";
        chulaGharPro.style.display = "block";
        window.scrollTo({ top: 0, behavior: 'auto' });
    }
 
    function downloadImage() {
      var downloadLink = document.createElement("a");
      downloadLink.href = "images/RushikeshGaikwadCV.jpg";
      downloadLink.download = "RushikeshGaikwadCV.jpg"; 
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  }

  function scrolltotop() {
    var scrolltotop = document.getElementById("scroll-to-top");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}

  document.getElementById('scroll-to-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

