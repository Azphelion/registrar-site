// Database of regsites
const regsiteDatabase = [
    {
        id: 1,
        title: "Cadmia Archives",
        description: "The central repository of knowledge about The Loom, its vibrational states, and the factions navigating the multiverse.",
        url: "reg://cadmia-archive.arc",
        physicalPath: "regsites/cadmia-archive",
        keywords: ["cadmia", "archive", "knowledge", "multiverse", "loom", "scholasticae"],
        private: false,
        allowedUsers: []
    },
    {
        id: 2,
        title: "Scholasticae Library",
        description: "The official knowledge repository maintained by the Scholasticae, containing research on The Loom and vibrational theory.",
        url: "reg://scholasticae.schol",
        physicalPath: "regsites/scholasticae",
        keywords: ["scholasticae", "library", "research", "knowledge", "vibrational theory"],
        private: false,
        allowedUsers: []
    },
    {
        id: 3,
        title: "Concord Directory",
        description: "Official directory of the Stellar Concord, containing regulations, member systems, and public announcements.",
        url: "reg://concord-directory.con",
        physicalPath: "regsites/concord-directory",
        keywords: ["concord", "directory", "regulations", "stellar", "government"],
        private: false,
        allowedUsers: []
    },
    {
        id: 4,
        title: "K'tharr Network",
        description: "Secure communication network for the K'tharr Hegemony. Access restricted to authorized personnel only.",
        url: "reg://ktharr-network.kth",
        physicalPath: "regsites/ktharr-network",
        keywords: ["k'tharr", "hegemony", "network", "secure", "silicon-based"],
        private: true,
        allowedUsers: ["ARBITER-553", "DIRECTOR-001", "SUPER-001"]
    },
    {
        id: 5,
        title: "Deiarch Core",
        description: "Primary access point to the Deiarch's consciousness. Extreme clearance required.",
        url: "reg://deiarch-core.dai",
        physicalPath: "regsites/deiarch-core",
        keywords: ["deiarch", "core", "consciousness", "quantum computer", "primal engine"],
        private: true,
        allowedUsers: ["DIRECTOR-001", "SUPER-001"]
    },
    {
        id: 6,
        title: "Resonance Research Lab",
        description: "Cutting-edge research on vibrational resonance and interdimensional physics. Classified access only.",
        url: "reg://resonance-lab.schol",
        physicalPath: "regsites/resonance-lab",
        keywords: ["resonance", "research", "laboratory", "vibrational physics", "interdimensional"],
        private: true,
        allowedUsers: ["SCHOLAR-009", "SUPER-001"]
    },
    {
        id: 7,
        title: "Quantum Cartography",
        description: "Mapping the vibrational states of The Loom. Access requires special clearance.",
        url: "reg://quantum-cartography.arc",
        physicalPath: "regsites/quantum-cartography",
        keywords: ["quantum", "cartography", "mapping", "vibrational states", "loom"],
        private: true,
        allowedUsers: ["RESEARCH-772", "SCHOLAR-009", "SUPER-001"]
    }
];

// User authentication system with realistic passwords
const userDatabase = {
    "GUEST": { name: "Guest", accessLevel: 0 },
    "RESEARCH-772": { name: "Dr. Aris Thorne", accessLevel: 1, password: "V1br@t10n$tudY" },
    "ARBITER-553": { name: "Commander Valerius", accessLevel: 2, password: "C0nc0rd$ecur1ty" },
    "SCHOLAR-009": { name: "Lysandra Vex", accessLevel: 3, password: "Kn0wl3dg3$ch0lar" },
    "DIRECTOR-001": { name: "Director Marcus Kane", accessLevel: 4, password: "D1r3ct0r1al$ystem" },
    "TECH-228": { name: "Engineer Juno", accessLevel: 2, password: "R3p@1rT3ch$tation" },
    "SUPER-001": { name: "Administrator Prime", accessLevel: 5, password: "0mni@ccess$uper", superUser: true }
};

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
const connectionStatus = document.getElementById('connectionStatus');
const vStateStatus = document.getElementById('vStateStatus');

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
            currentUser = { id: userData.id, ...userDatabase[userData.id] };
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
    
    // Start fluctuating network values
    fluctuateNetworkValues();
    
    // Add glitch effect randomly to header
    setInterval(() => {
        document.querySelector('.logo h1').style.animation = 'none';
        setTimeout(() => {
            document.querySelector('.logo h1').style.animation = 'glitch 10s infinite';
        }, 10);
    }, 30000);
});

// Function to fluctuate network values
function fluctuateNetworkValues() {
    setInterval(() => {
        // Fluctuate regsite count
        const baseRegsites = 14772891;
        const regsiteVariation = Math.floor(Math.random() * 1000) - 500;
        regsiteCount.textContent = (baseRegsites + regsiteVariation).toLocaleString();
        
        // Fluctuate network latency
        const baseLatency = 12.7;
        const latencyVariation = (Math.random() * 4) - 2;
        networkLatency.textContent = (baseLatency + latencyVariation).toFixed(1);
        
        // Occasionally change connection status
        if (Math.random() < 0.1) {
            const statuses = ["QUANTUM ENTANGLED", "HYPERSPACE LINKED", "REALITY SYNCHED", "DIMENSIONAL BRIDGE"];
            connectionStatus.textContent = statuses[Math.floor(Math.random() * statuses.length)];
        }
        
        // Occasionally change vibrational state
        if (Math.random() < 0.08) {
            const states = ["STABLE", "COHERENT", "RESONANT", "HARMONIC"];
            vStateStatus.textContent = states[Math.floor(Math.random() * states.length)];
        }
    }, 3000);
}

// Authentication function
function authenticateUser() {
    const userId = userIdInput.value.trim().toUpperCase();
    const password = passwordInput.value;
    
    if (userDatabase[userId] && userDatabase[userId].password === password) {
        currentUser = { id: userId, ...userDatabase[userId] };
        authenticated = true;
        
        // Save to localStorage
        localStorage.setItem('registrarUser', JSON.stringify({
            id: userId,
            password: password
        }));
        
        updateAuthStatus();
        
        // If there are search results, update them to show private content
        if (!resultsContainer.classList.contains('hidden')) {
            performSearch();
        }
    } else {
        authenticated = false;
        currentUser = userDatabase["GUEST"];
        authStatus.textContent = "Status: Authentication failed - Invalid credentials";
        authStatus.style.color = "#ff6e48";
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
        authStatus.style.color = "#00ffdd";
        userStatus.textContent = `USER: ${currentUser.name}`;
        logoutBtn.classList.remove('hidden');
    } else {
        authStatus.textContent = "Status: Not authenticated";
        authStatus.style.color = "#ffaa55";
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
            if (urlMatch.private && (!authenticated || 
                (!urlMatch.allowedUsers.includes(currentUser.id) && !currentUser.superUser))) {
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

// Display search results
function displayResults(results, query) {
    // Hide welcome message
    welcomeMessage.classList.add('hidden');
    
    // Filter out private regsites the user doesn't have access to
    const accessibleResults = results.filter(regsite => {
        if (!regsite.private) return true;
        return authenticated && (regsite.allowedUsers.includes(currentUser.id) || currentUser.superUser);
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
                if (regsite.private && (!authenticated || 
                    (!regsite.allowedUsers.includes(currentUser.id) && !currentUser.superUser))) {
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
