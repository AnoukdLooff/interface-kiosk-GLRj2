document.addEventListener("DOMContentLoaded", () => {
    let naam = document.getElementById("naam");
    
    const namen = [
        "Naam 1",
        "Naam 2",
        "Naam 3"
    ]

    const videos = [
      document.getElementById("video1"),
      document.getElementById("video2"),
      document.getElementById("video3")
    ];

    let current = 0;

    const naamBox = document.createElement("p");
    naam.appendChild(naamBox);

    function showVideo(index) {
      videos.forEach(v => {
        v.pause();
        v.style.display = "none";
      });

      const video = videos[index];
      video.style.display = "block";
      video.currentTime = 0;
      video.play().catch(err => {
        console.log("Autoplay geblokkeerd:", err);
      });
      
      let naamMaker = document.createTextNode(namen[index]);

      naamBox.textContent = '';
      naamBox.appendChild(naamMaker); 
    }

    videos.forEach((v, i) => {
      v.addEventListener("ended", () => {
        current = (i + 1) % videos.length;
        showVideo(current);
        
      });
    });

    
    showVideo(current);
  });