// Add extra interactive features to the Valentine's Day page

document.addEventListener('DOMContentLoaded', function() {
    
    // Add click effect to reason cards
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });

    // Add click effect to photo cards
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-15px) rotate(5deg) scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 400);
        });
    });

    // Add hover glow effect to love letter
    const loveLetter = document.querySelector('.love-letter');
    if (loveLetter) {
        loveLetter.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 50px rgba(255, 105, 180, 0.5), 0 0 30px rgba(255, 182, 193, 0.4)';
        });
        loveLetter.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 40px rgba(255, 105, 180, 0.3), 0 0 20px rgba(255, 182, 193, 0.2)';
        });
    }

    // Bouquet click interaction
    const bouquet = document.querySelector('.bouquet');
    if (bouquet) {
        bouquet.addEventListener('click', function() {
            createHeartBurst();
        });
    }

    // Create heart burst effect
    function createHeartBurst() {
        const hearts = ['💖', '💗', '💕', '💓', '💝'];
        const bouquet = document.querySelector('.bouquet');
        const rect = bouquet.getBoundingClientRect();
        
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = rect.left + rect.width / 2 + 'px';
            heart.style.top = rect.top + rect.height / 2 + 'px';
            heart.style.fontSize = '30px';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            heart.style.transition = 'all 1.5s ease-out';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                const angle = (Math.PI * 2 * i) / 10;
                const distance = 150;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                heart.style.transform = `translate(${x}px, ${y}px) scale(2)`;
                heart.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                heart.remove();
            }, 1600);
        }
    }

    // Random compliment generator (optional - can be activated on button click if you add one)
    const compliments = [
        "You light up my world! 🌟",
        "You're absolutely amazing! 💖",
        "I'm so lucky to have you! 🍀",
        "You make every day better! ✨",
        "You're my everything! 💕",
        "I love you more than words can say! 💗",
        "You're the best thing that ever happened to me! 🌹",
        "My heart belongs to you! 💓"
    ];

    // Add sparkle effect on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Create occasional sparkles while scrolling
        if (Math.random() > 0.95) {
            createSparkle();
        }
        
        lastScrollTop = scrollTop;
    });

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.textContent = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.zIndex = '1000';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.transition = 'all 1s ease-out';
        sparkle.style.opacity = '1';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.style.transform = 'translateY(-50px) scale(2)';
            sparkle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1100);
    }

    // Console message
    console.log('%c💖 Happy Valentine\'s Day! 💖', 'color: #FF1493; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.5);');
    console.log('%cMade with love! 💕', 'color: #FF69B4; font-size: 16px; font-style: italic;');
});
