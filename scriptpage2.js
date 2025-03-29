document.addEventListener("DOMContentLoaded", () => {
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach(heart => {
        // Gera uma cor aleatória (vermelho ou roxo)
        const randomColor = Math.random() > 0.5 ?  "rgba(255, 0, 0)" :"rgba(128, 0, 128)";
        heart.style.color = randomColor;
        
        const boxShadowColor = randomColor.replace(", 1)", ", 0.2)"); 
        heart.style.boxShadow = `0 0 50px ${boxShadowColor}, 0 0 100px ${boxShadowColor}`;       
    });
    function functionTime() {
        const startDate = new Date('December 3, 2024 13:00:00');
        const now = new Date();
        const elapsedTime = now - startDate;
    
        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    
        document.getElementById('timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
        setInterval(functionTime, 1000);

        const imagePaths = [
            "assets/img1.png",
            "assets/img2.png",
            "assets/img3.png",
            "assets/img4.png",
            "assets/img5.png",
            "assets/img6.png",
            "assets/img7.jpg",
            "assets/img8.png",
            "assets/img9.png",
            "assets/img10.jpg",
            "assets/img11.jpg",
            "assets/img12.jpg",
            "assets/img13.jpg",
            "assets/img14.jpg",
            "assets/img15.jpg",
            "assets/img16.jpg",
            "assets/img17.jpg",
            
            "assets/img19.jpg",
            "assets/img20.jpg",
            "assets/img21.jpg",
            "assets/img22.jpg",
            "assets/img23.jpg",
            "assets/img24.jpg"
        ];
    
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const randomImage = imagePaths[randomIndex];
    
        const imageElement = document.getElementById("random-image");
        imageElement.src = randomImage;
    
});