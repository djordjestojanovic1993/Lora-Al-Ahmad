function playVideoAutomaticly(){
  document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById("videoContainer");
    const myVideo = document.getElementById("myVideo");
  
    myVideo.src = 'videos/video1.mp4';
    myVideo.type="video/mp4";

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          myVideo.currentTime = 0; // Postavite trenutno vreme na početak
          myVideo.play();
        } else {
          myVideo.pause();
        }
      });
    }, options);
  
    observer.observe(videoContainer);
  });
}
playVideoAutomaticly();

  function playVideoManually(){
    let videos = document.getElementsByClassName('video');
    const videoPlayWindowCover = document.getElementsByClassName('video-play-window-cover');
    const videoPlayWindow = document.getElementsByClassName('video-play-window');
    for(const video of videos){
      video.addEventListener('click', (e)=>{
        videoPlayWindowCover[0].classList.remove("hidden");
        videoPlayWindow[0].classList.remove("hidden");
        videoPlayWindowCover[0].addEventListener('click', (e)=>{
          videoPlayWindowCover[0].classList.add('hidden')
          videoPlayWindow[0].classList.add("hidden");
          // video.pause();
          stopVideo();
        })
      })
    }
  }
  playVideoManually();
  
  function stopVideo() {
    var iframe = document.getElementsByClassName("vide-iframe");
    console.log(iframe);
    var temp = iframe[0].src;
    iframe[0].src = temp;
  }

  function showPicture(){
    let pictures = document.getElementsByClassName('picture-img');
    const pictureWindowCover = document.getElementsByClassName('picture-window-cover');
    const pictureWindow = document.getElementsByClassName('picture-window');
    const pictureWindowImg = document.getElementById('picture-window-img');
    for(const picture of pictures){
      picture.addEventListener('click', (e)=>{
        pictureWindowCover[0].classList.remove("hidden");
        pictureWindow[0].classList.remove("hidden");
        pictureWindowImg.src = picture.src;
        pictureWindowCover[0].addEventListener('click', (e)=>{
          pictureWindowCover[0].classList.add('hidden')
          pictureWindow[0].classList.add("hidden");
        })
      })
    }
  }
  showPicture();

  function hamburger(){
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const hamburger = document.getElementById('hamburger');
    const list = document.querySelector('nav ul');
    const nav = document.querySelector('nav');


    const openList = function(){
        line1.style.transform = "rotate(45deg)";
        line2.style.transform = "scaleY(0)";
        line3.style.transform = "rotate(-45deg)";
        list.style.display = "flex";
        if(!nav.classList.contains('scrolled')){
            nav.classList.add('scrolled');
            addedScrolled = true;
        }
        clicked = true;
    }
    const closeList = function(){
        line1.style.transform = "rotate(0deg)";
        line2.style.transform = "scaleY(1)";
        line3.style.transform = "rotate(0deg)";
        list.style.display = "none";
        if(addedScrolled){
            nav.classList.remove('scrolled');
            addedScrolled = false;
        }
        clicked = false;
    }

    let addedScrolled = false;
    let clicked = false;

    hamburger.addEventListener('click', function(){
        if(clicked === false){
            openList();
        }else{
            closeList();
        }
    });

    list.addEventListener('click', function(){
        if(clicked === true)
            closeList();
    });

}
hamburger();