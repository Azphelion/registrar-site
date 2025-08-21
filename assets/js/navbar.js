// Navigation bar functionality for all regsites
document.addEventListener('DOMContentLoaded', function() {
    // Create navigation bar
    const navContainer = document.getElementById('nav-container');
    
    if (navContainer) {
        navContainer.innerHTML = `
            <nav class="registrar-nav">
                <div class="nav-logo">
                    <a href="/cadmia-site/" class="nav-home">THE REGISTRAR</a>
                </div>
                <div class="nav-search">
                    <input type="text" id="nav-search-input" placeholder="Search regsites...">
                    <button id="nav-search-btn">Search</button>
                </div>
                <div class="nav-user">
                    <span id="nav-user-status">Guest</span>
                    <button id="nav-auth-btn">Login</button>
                </div>
            </nav>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .registrar-nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
                background: rgba(5, 10, 30, 0.95);
                border-bottom: 1px solid rgba(80, 100, 220, 0.4);
                backdrop-filter: blur(8px);
                position: sticky;
                top: 0;
                z-index: 1000;
            }
            
            .nav-logo a {
                font-family: 'Orbitron', sans-serif;
                font-weight: 700;
                color: #6c5ce7;
                text-decoration: none;
                font-size: 1.2rem;
                text-shadow: 0 0 10px rgba(108, 92, 231, 0.5);
            }
            
            .nav-search {
                display: flex;
                flex: 1;
                max-width: 400px;
                margin: 0 20px;
            }
            
            #nav-search-input {
                flex: 1;
                padding: 8px 12px;
                background: rgba(2, 5, 20, 0.9);
                border: 1px solid rgba(80, 100, 220, 0.4);
                border-right: none;
                border-radius: 4px 0 0 4px;
                color: #e0e0ff;
                font-family: 'Space Grotesk', sans-serif;
            }
            
            #nav-search-btn {
                padding: 8px 15px;
                background: linear-gradient(135deg, #6c5ce7 0%, #4a3fb9 100%);
                border: none;
                border-radius: 0 4px 4px 0;
                color: white;
                font-family: 'Space Grotesk', sans-serif;
                cursor: pointer;
            }
            
            #nav-search-btn:hover {
                background: linear-gradient(135deg, #7986ff 0%, #5c6ce7 100%);
            }
            
            .nav-user {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            #nav-user-status {
                color: #00ffcc;
                font-size: 0.9rem;
            }
            
            #nav-auth-btn {
                padding: 6px 12px;
                background: rgba(255, 153, 102, 0.2);
                border: 1px solid rgba(255, 153, 102, 0.5);
                border-radius: 4px;
                color: #ff9966;
                font-family: 'Space Grotesk', sans-serif;
                cursor: pointer;
            }
            
            #nav-auth-btn:hover {
                background: rgba(255, 153, 102, 0.3);
            }
            
            @media (max-width: 768px) {
                .registrar-nav {
                    flex-direction: column;
                    gap: 10px;
                }
                
                .nav-search {
                    max-width: 100%;
                    margin: 10px 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add functionality
        const navSearchInput = document.getElementById('nav-search-input');
        const navSearchBtn = document.getElementById('nav-search-btn');
        const navUserStatus = document.getElementById('nav-user-status');
        const navAuthBtn = document.getElementById('nav-auth-btn');
        
        // Check if user is logged in
        const savedUser = localStorage.getItem('registrarUser');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            if (userDatabase[userData.id] && userDatabase[userData.id].password === userData.password) {
                navUserStatus.textContent = userDatabase[userData.id].name;
                navAuthBtn.textContent = "Logout";
            }
        }
        
        // Search functionality
        navSearchBtn.addEventListener('click', function() {
            if (navSearchInput.value.trim() !== '') {
                window.location.href = `/cadmia-site/?search=${encodeURIComponent(navSearchInput.value.trim())}`;
            }
        });
        
        navSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && navSearchInput.value.trim() !== '') {
                window.location.href = `/cadmia-site/?search=${encodeURIComponent(navSearchInput.value.trim())}`;
            }
        });
        
        // Auth functionality
        navAuthBtn.addEventListener('click', function() {
            if (navAuthBtn.textContent === "Login") {
                window.location.href = "/cadmia-site/";
            } else {
                localStorage.removeItem('registrarUser');
                navUserStatus.textContent = "Guest";
                navAuthBtn.textContent = "Login";
                // Reload to reflect logout state
                window.location.reload();
            }
        });
    }
});
