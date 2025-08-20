  <script>
        // script.js
        document.addEventListener('DOMContentLoaded', function() {
            // Elements
            const epilepsyWarning = document.getElementById('epilepsyWarning');
            const mainContent = document.getElementById('mainContent');
            const acceptBtn = document.getElementById('acceptBtn');
            const disableFlashing = document.getElementById('disableFlashing');
            const flashingElements = document.querySelectorAll('.flashing');
            const glowTextElements = document.querySelectorAll('.glow-text');
            const socialIcons = document.querySelectorAll('.social-icon');
            const playButtons = document.querySelectorAll('.play-btn');
            
            // Show epilepsy warning on load
            epilepsyWarning.style.display = 'flex';
            mainContent.style.display = 'none';
            
            // Accept button functionality
            acceptBtn.addEventListener('click', function() {
                epilepsyWarning.style.display = 'none';
                mainContent.style.display = 'block';
                
                // Apply flashing effects setting
                toggleFlashingEffects();
            });
            
            // Toggle flashing effects
            disableFlashing.addEventListener('change', function() {
                toggleFlashingEffects();
            });
            
            function toggleFlashingEffects() {
                if (disableFlashing.checked) {
                    // Disable flashing effects
                    flashingElements.forEach(el => {
                        el.style.animation = 'none';
                    });
                    
                    // Reduce glow intensity
                    document.documentElement.style.setProperty('--glow-intensity', '0');
                } else {
                    // Enable flashing effects
                    flashingElements.forEach(el => {
                        el.style.animation = 'flashing 1s infinite';
                    });
                    
                    // Restore glow intensity
                    document.documentElement.style.setProperty('--glow-intensity', '0.5');
                }
            }
            
            // Social media redirects
            socialIcons.forEach(icon => {
                icon.addEventListener('click', function(e) {
                    e.preventDefault();
                    const platform = this.getAttribute('data-platform');
                    const socialUrls = {
                        facebook: 'https://facebook.com/cyberwave',
                        twitter: 'https://twitter.com/cyberwave',
                        instagram: 'https://instagram.com/cyberwave',
                        youtube: 'https://youtube.com/cyberwave',
                        spotify: 'https://open.spotify.com/artist/cyberwave'
                    };
                    
                    if (socialUrls[platform]) {
                        window.open(socialUrls[platform], '_blank');
                    }
                });
            });
            
            // Play track functionality
            playButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const track = this.getAttribute('data-track');
                    alert(`Now playing: ${track}`);
                    
                    // Visual feedback
                    this.textContent = 'PLAYING...';
                    this.style.background = 'var(--neon-purple)';
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        this.textContent = 'PLAY';
                        this.style.background = 'var(--neon-pink)';
                    }, 3000);
                });
            });
        });
    </script>
