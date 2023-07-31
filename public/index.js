var videoObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      var iframe = entry.target.querySelector("iframe");
      var videoUrl = "https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID?autoplay=1";
      iframe.setAttribute("src", videoUrl);
    } else {
      var iframe = entry.target.querySelector("iframe");
      iframe.setAttribute("src", "");
    }
  });
}, { threshold: 0.5 });

var videoContainer = document.getElementById("video-container");
videoObserver.observe(videoContainer);

// Dodajemo event listener na učitavanje stranice kako bismo ručno pokrenuli video
window.addEventListener("load", function() {
  var iframe = document.getElementById("youtube-video");
  var videoUrl = "https://www.youtube.com/watch?v=tQ46mSyW_jg";
  iframe.setAttribute("src", videoUrl);
});

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