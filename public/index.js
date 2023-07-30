
  // Funkcija koja će se pozvati kada div postane vidljiv
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Pustite video kada div postane vidljiv
        const player = new YT.Player('player', {
          videoId: 'liJVSwOiiwg', // Zamijenite ovo sa ID-om YouTube videa koji želite reproducirati
          playerVars: {
            autoplay: 1 // Pustite video automatski kada se učita
          }
        });

        // Isključite promatranje nakon prvog puštanja videa
        observer.disconnect();
      }
    });
  }

  // Kreirajte Intersection Observer
  const options = {
    root: null, // Koristi viewport kao root element za provjeru vidljivosti
    rootMargin: '0px',
    threshold: 0.5 // Proveri kada je 50% elementa vidljivo
  };

  const videoObserver = new IntersectionObserver(handleIntersection, options);

  // Pratite vidljivost div-a sa klasom .video-container
  const videoContainer = document.querySelector('.video-container');
  videoObserver.observe(videoContainer);

  // Učitajte YouTube JavaScript API skriptu
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
