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
});