// Function to generate the navigation bar
function generateNavbar() {
    const currentUser = getCurrentUser();
    const navbarHtml = `
        <nav class="registrar-navbar">
            <div class="nav-brand">
                <span class="registrar-logo">Registrar</span>
                <span class="nav-subtitle">Accessing The Loom</span>
            </div>
            
            <div class="nav-search">
                <input type="text" id="regsearch" placeholder="Enter reg:// address or search keywords">
                <button onclick="performSearch()">Navigate</button>
            </div>
            
            <div class="nav-user">
                ${currentUser ? `
                    <span class="user-info">Logged in as <strong>${currentUser.fullName}</strong> (${currentUser.affiliation})</span>
                    <button onclick="logout()">Logout</button>
                ` : `
                    <button onclick="showLoginForm()">Guest Login</button>
                `}
            </div>
        </nav>
        
        <div id="login-modal" class="modal" style="display:none;">
            <div class="modal-content">
                <span class="close" onclick="closeLoginForm()">&times;</span>
                <h2>Registrar Authentication</h2>
                <form onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label for="username">User ID:</label>
                        <input type="text" id="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Access Code:</label>
                        <input type="password" id="password" required>
                    </div>
                    <button type="submit">Authenticate</button>
                </form>
                <p class="guest-notice">Or <a href="#" onclick="continueAsGuest()">continue as guest</a> with limited access.</p>
            </div>
        </div>
        
        <div id="search-results" class="search-results" style="display:none;"></div>
    `;
    
    // Inject the navbar into the placeholder
    const navContainer = document.getElementById('nav-container');
    if (navContainer) {
        navContainer.innerHTML = navbarHtml;
    }
}

// Function to get current user from localStorage
function getCurrentUser() {
    const userData = localStorage.getItem('registrar_current_user');
    return userData ? JSON.parse(userData) : null;
}

// Function to show login form
function showLoginForm() {
    document.getElementById('login-modal').style.display = 'block';
}

// Function to close login form
function closeLoginForm() {
    document.getElementById('login-modal').style.display = 'none';
}

// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Store user data without password for security
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('registrar_current_user', JSON.stringify(userWithoutPassword));
        closeLoginForm();
        generateNavbar(); // Refresh navbar to show user info
        alert(`Authentication successful. Welcome, ${user.fullName}.`);
    } else {
        alert('Authentication failed. Invalid credentials.');
    }
}

// Function to continue as guest
function continueAsGuest() {
    localStorage.removeItem('registrar_current_user');
    closeLoginForm();
    generateNavbar(); // Refresh navbar
    alert('Continuing as guest. Access to private regsites is restricted.');
}

// Function to logout
function logout() {
    localStorage.removeItem('registrar_current_user');
    generateNavbar(); // Refresh navbar
    alert('Logged out successfully.');
}

// Function to perform search
function performSearch() {
    const query = document.getElementById('regsearch').value.trim();
    const currentUser = getCurrentUser();
    const username = currentUser ? currentUser.username : null;
    
    // Clear previous results
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
    
    if (!query) return;
    
    // Check if it's a direct reg:// URL
    if (query.startsWith('reg://')) {
        const regsiteName = query.replace('reg://', '').split('/')[0];
        const regsite = regsites.find(r => r.url === `reg://${regsiteName}`);
        
        if (regsite && hasAccessToRegsite(regsite, username)) {
            window.location.href = regsite.realUrl;
        } else if (regsite) {
            alert('Access denied. You do not have permission to view this regsite.');
        } else {
            alert('Regsite not found. Please check the address and try again.');
        }
        return;
    }
    
    // Otherwise perform keyword search
    const results = regsites.filter(regsite => {
        // Check if user has access
        if (!hasAccessToRegsite(regsite, username)) return false;
        
        // Check if query matches any keywords
        return regsite.keywords.some(keyword => 
            keyword.toLowerCase().includes(query.toLowerCase())
        );
    });
    
    if (results.length > 0) {
        resultsContainer.innerHTML = `
            <h3>Search Results for "${query}"</h3>
            <ul>
                ${results.map(regsite => `
                    <li>
                        <a href="${regsite.realUrl}" class="regsite-link">
                            <span class="regsite-url">${regsite.url}</span>
                            <span class="regsite-name">${regsite.name}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.innerHTML = '<p>No regsites found matching your query.</p>';
        resultsContainer.style.display = 'block';
    }
}

// Function to check if a user has access to a regsite
function hasAccessToRegsite(regsite, username) {
    // Public regsites have empty access array
    if (regsite.access.length === 0) return true;
    
    // If no user is logged in, they can't access private regsites
    if (!username) return false;
    
    // Check if the user has access
    return regsite.access.includes(username);
}

// Initialize navbar when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateNavbar();
});
