// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const resultsCount = document.getElementById('resultsCount');
const resultsList = document.getElementById('resultsList');
const welcomeMessage = document.getElementById('welcomeMessage');
const userIdInput = document.getElementById('userIdInput');
const passwordInput = document.getElementById('passwordInput');
const authBtn = document.getElementById('authBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authStatus = document.getElementById('authStatus');
const userStatus = document.getElementById('userStatus');
const suggestions = document.querySelectorAll('.suggestion');
const regsiteCount = document.getElementById('regsiteCount');
const networkLatency = document.getElementById('networkLatency');

// Current user state
let currentUser = userDatabase["GUEST"];
let authenticated = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('registrarUser');
    if (savedUser) {
        const userData = JSON.parse(savedUser);
        if (userDatabase[userData.id] && userDatabase[userData.id].password === userData.password) {
            currentUser = userDatabase[userData.id];
            authenticated = true;
            updateAuthStatus();
        }
    }
    
    // Add event listeners
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    authBtn.addEventListener('click', authenticateUser);
    logoutBtn.addEventListener('click', logoutUser);
    userIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            authenticateUser();
        }
    });
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            authenticateUser();
        }
    });
    
    // Add click events to suggestions
    suggestions.forEach(suggestion => {
        suggestion.addEventListener('click', () => {
            searchInput.value = suggestion.textContent;
            performSearch();
        });
    });
    
    // Add glitch effect randomly to header
    setInterval(() => {
        document.querySelector('.logo h1').style.animation = 'none';
        setTimeout(() => {
            document.querySelector('.logo h1').style.animation = 'glitch 10s infinite';
        }, 10);
    }, 30000);
    
    // Update network stats periodically
    updateNetworkStats();
    setInterval(updateNetworkStats, 5000);
});

// Update network statistics
function updateNetworkStats() {
    // Fluctuate regsite count
    const baseRegsiteCount = 14772891;
    const regsiteVariation = Math.floor(Math.random() * 2000) - 1000;
    regsiteCount.textContent = (baseRegsiteCount + regsiteVariation).toLocaleString();
    
    // Fluctuate network latency
    const baseLatency = 12.7;
    const latencyVariation = (Math.random() * 5 - 2.5).toFixed(1);
    networkLatency.textContent = (parseFloat(baseLatency) + parseFloat(latencyVariation)).toFixed(1);
}

// Authentication function
function authenticateUser() {
    const userId = userIdInput.value.trim().toUpperCase();
    const password = passwordInput.value;
    
    if (userDatabase[userId] && userDatabase[userId].password === password) {
        currentUser = userDatabase[userId];
        authenticated = true;
        
        // Save to localStorage
        localStorage.setItem('registrarUser', JSON.stringify({
            id: userId,
            password: password
        }));
        
        updateAuthStatus();
    } else {
        authenticated = false;
        currentUser = userDatabase["GUEST"];
        authStatus.textContent = "Status: Authentication failed - Invalid credentials";
        authStatus.style.color = "#ff5e62";
    }
}

// Logout function
function logoutUser() {
    authenticated = false;
    currentUser = userDatabase["GUEST"];
    localStorage.removeItem('registrarUser');
    userIdInput.value = "";
    passwordInput.value = "";
    updateAuthStatus();
    
    // If there are search results, update them to hide private content
    if (!resultsContainer.classList.contains('hidden')) {
        performSearch();
    }
}

// Update authentication status display
function updateAuthStatus() {
    if (authenticated) {
        authStatus.textContent = `Status: Authenticated as ${currentUser.name}`;
        authStatus.style.color = "#00ffcc";
        userStatus.textContent = `USER: ${currentUser.name}`;
        logoutBtn.classList.remove('hidden');
    } else {
        authStatus.textContent = "Status: Not authenticated";
        authStatus.style.color = "#ff9966";
        userStatus.textContent = "USER: GUEST";
        logoutBtn.classList.add('hidden');
    }
}

// Search function
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        // If empty query, show welcome message
        resultsContainer.classList.add('hidden');
        welcomeMessage.classList.remove('hidden');
        return;
    }
    
    // Check if query is a reg:// URL
    if (query.startsWith('reg://')) {
        const urlMatch = regsiteDatabase.find(regsite => 
            regsite.url.toLowerCase() === query
        );
        
        if (urlMatch) {
            // Check if user has access to private regsite
            if (urlMatch.private && (!authenticated || !hasAccess(currentUser.id, urlMatch.id))) {
                resultsList.innerHTML = `
                    <div class="result-item private">
                        <h4>ACCESS DENIED</h4>
                        <p>You do not have permission to access this private regsite.</p>
                        <p>URL: ${urlMatch.url}</p>
                    </div>
                `;
            } else {
                // Redirect to the regsite
                window.location.href = urlMatch.physicalPath;
                return;
            }
        } else {
            resultsList.innerHTML = `
                <div class="result-item">
                    <h4>REGSITE NOT FOUND</h4>
                    <p>The regsite "${query}" could not be found in the Registrar database.</p>
                    <p>Please check the URL and try again.</p>
                </div>
            `;
        }
        
        resultsContainer.classList.remove('hidden');
        welcomeMessage.classList.add('hidden');
        resultsCount.textContent = `1 regsite found for "${query}"`;
        return;
    }
    
    // Split query into multiple keywords
    const keywords = query.split(/\s+/).filter(word => word.length > 0);
    
    // Filter results based on query
    const results = regsiteDatabase.filter(regsite => {
        // Check if any keyword matches any keywords or title
        return keywords.some(keyword => 
            regsite.keywords.some(k => k.includes(keyword)) || 
            regsite.title.toLowerCase().includes(keyword) ||
            regsite.description.toLowerCase().includes(keyword)
        );
    });
    
    // Display results
    displayResults(results, query);
}

// Check if user has access to a regsite
function hasAccess(userId, regsiteId) {
    // Superuser has access to everything
    if (userDatabase[userId] && userDatabase[userId].isSuperUser) {
        return true;
    }
    
    // Check if user has specific access to this regsite
    const regsite = regsiteDatabase.find(r => r.id === regsiteId);
    if (!regsite) return false;
    
    return regsite.allowedUsers.includes(userId);
}

// Display search results
function displayResults(results, query) {
    // Hide welcome message
    welcomeMessage.classList.add('hidden');
    
    // Filter out private regsites the user doesn't have access to
    const accessibleResults = results.filter(regsite => {
        if (!regsite.private) return true;
        return authenticated && hasAccess(currentUser.id, regsite.id);
    });
    
    // Update results count
    resultsCount.textContent = `${accessibleResults.length} regsites found for "${query}"`;
    
    // Clear previous results
    resultsList.innerHTML = '';
    
    if (accessibleResults.length === 0) {
        resultsList.innerHTML = `
            <div class="result-item">
                <h4>NO RESULTS FOUND</h4>
                <p>Your search did not match any regsites in the Registrar database.</p>
                <p>Try different keywords or check your authentication for private regsites.</p>
            </div>
        `;
    } else {
        // Add results to list
        accessibleResults.forEach(regsite => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result-item';
            
            if (regsite.private) {
                resultElement.classList.add('private');
            }
            
            resultElement.innerHTML = `
                <h4>${regsite.title}</h4>
                <p class="url">${regsite.url}</p>
                <p>${regsite.description}</p>
                <div class="keywords">
                    ${regsite.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
            `;
            
            // Add click event to navigate to regsite
            resultElement.addEventListener('click', () => {
                if (regsite.private && (!authenticated || !hasAccess(currentUser.id, regsite.id))) {
                    alert("Access denied. You do not have permission to view this regsite.");
                    return;
                }
                window.location.href = regsite.physicalPath;
            });
            
            resultsList.appendChild(resultElement);
        });
    }
    
    // Show results container
    resultsContainer.classList.remove('hidden');
}

// Add some visual effects for immersion
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});
