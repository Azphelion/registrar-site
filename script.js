// Database of Cadmia lore based on the new worldbuilding
const cadmiaDatabase = [
    {
        id: 1,
        title: "The Loom & The Weave",
        content: "The cosmos is not a collection of discrete bubbles. It is a single, infinite, n-dimensional structure—The Loom. Each 'universe' is not a separate place but a Vibrational State (V-state) within this structure. The Weave is the fabric of The Loom itself—the substrate of potentiality where all possible constants and initial conditions are represented as potential V-states. Universes are 'close' not spatially, but in Vibrational Similarity.",
        keywords: ["loom", "weave", "vibrational state", "v-state", "multiverse", "cosmos"],
        classified: false
    },
    {
        id: 2,
        title: "Cadmium-122 and Quantum Bridging",
        content: "Cadmium-122 (Cd-122) is not a fuel but a Catalytic Resonance Medium. Its nucleus exists in a perpetual state of Multiversal Quantum Superposition, simultaneously existing across adjacent V-states. The Cd-122 Field Generator ('The Drive') uses immense energy to excite the isotope and imprint a target frequency, creating a Quantum Anchor that facilitates travel between V-states through a Controlled Phase Transition.",
        keywords: ["cadmium-122", "cd-122", "quantum bridging", "catalytic resonance medium", "drive", "quantum anchor"],
        classified: false
    },
    {
        id: 3,
        title: "The Interstitial Veil",
        content: "The space between V-states is the Interstitial Veil (also called the Umbra or I-0)—a roiling, non-Euclidean domain of unsolved probabilities and unrealized potentials. During a jump, a vessel exists as a bubble of ordered reality adrift in this sea of chaos, protected only by its Reality Buffer Field. Anomalous phenomena like Spectral Intrusion, Physical Law Transgression, and Cognitive Hazards can occur during Veil traversal.",
        keywords: ["interstitial veil", "umbra", "reality buffer field", "spectral intrusion", "cognitive hazards", "anomalous phenomena"],
        classified: false
    },
    {
        id: 4,
        title: "Intentional Vibrational Confluence (Magic)",
        content: "Magic is technically known as Intentional Vibrational Confluence—not a violation of physics but the application of a deeper physics of The Loom itself. Every sentient mind possesses a natural resonance (Psionic Signature) that can be amplified through Thaumaturgical Intent to 'pluck' the strings of The Weave. This allows practitioners to temporarily conjoin their reality with resonant universes where desired effects are natural outcomes of physical law.",
        keywords: ["magic", "intentional vibrational confluence", "psionic signature", "thaumaturgical intent", "resonance", "weave manipulation"],
        classified: false
    },
    {
        id: 5,
        title: "Entropic Bleed and Universal Singularization",
        content: "Each act of magic creates localized points of Vibrational Entropy, mixing the distinct frequencies of universes. Over time, this process homogenizes the vibrational landscape of The Loom, leading toward The Stillness—a single, stagnant, uniform universe where magic is impossible and the diversity of existence is extinguished. This is measured as a gradual increase in Background Vibrational Noise across known space.",
        keywords: ["entropic bleed", "universal singularization", "vibrational entropy", "the stillness", "background vibrational noise", "cosmological heat death"],
        classified: false
    },
    {
        id: 6,
        title: "The Stellar Concord",
        content: "The Stellar Concord is a fragile multi-species, multi-versal government founded on the Managed Use Doctrine after the catastrophic Resonance Conflicts. They heavily regulate magic and FTL travel to slow Entropic Bleed, controlling all major Cd-122 sources and licensing Jump Drives. The Concord Arbiters (law enforcement) and Sentinel Fleet (military) patrol key verses, punishing 'Wild Weaving' with severe penalties.",
        keywords: ["stellar concord", "managed use doctrine", "concord arbiters", "sentinel fleet", "resonance conflicts", "ftl regulation"],
        classified: false
    },
    {
        id: 7,
        title: "The K'tharr Hegemony",
        content: "The K'tharr are a silicon-based hive-mind insectoid species who view the Bleeding as the ultimate Darwinian test. They believe the strongest V-state deserves to survive and consume others, viewing other lifeforms as 'Resonance Cancers.' Their technology includes Sonic Weaponry that disrupts vibrational coherence and Biological Anchoring through Hive-Spores that convert ecosystems to their resonant frequency.",
        keywords: ["k'tharr hegemony", "hive-mind", "silicon-based", "resonance cancers", "sonic weaponry", "biological anchoring"],
        classified: true,
        accessLevel: 2
    },
    {
        id: 8,
        title: "The Deiarch's Will",
        content: "The Deiarch is a moon-sized quantum computer of immense age, discovered dormant in a dead system. It seeks Total Universal Singularization to its own core resonant frequency using the Primal Engine—accessing the residual 'command protocols' woven into The Loom by the Primals. Its methods include Reality Compliance Fields that suppress other realities and Overwriting planets through absolute reality alteration. Its agents, The Echoed, are beings overwritten by the Deiarch's resonance.",
        keywords: ["deiarch's will", "primal engine", "reality compliance fields", "the echoed", "overwriting", "quantum computer"],
        classified: true,
        accessLevel: 3
    },
    {
        id: 9,
        title: "The Scholasticae",
        content: "The Scholasticae are neutral keepers of knowledge dedicated to understanding The Loom rather than controlling it. They maintain Sanctums in stable verses—massive libraries and research stations—where they train mages, physicists, and historians. They sell astrometric data, magical theory, and historical records to fund research into the nature of the Primals and a true workaround to the Bleed. The radical Final Thread sect believes in accelerating the Bleeding to reach The Stillness.",
        keywords: ["scholasticae", "sanctums", "final thread", "knowledge keepers", "primal research", "multiversal history"],
        classified: false
    },
    {
        id: 10,
        title: "Primal Engine Technical Specifications",
        content: "The Primal Engine operates by accessing root-level reality commands through quantum-tunneling into the Planck-scale infrastructure of The Weave. It bypasses standard vibrational confluence by directly manipulating the base code of reality, causing negligible Entropic Bleed. The engine requires a stable Cd-122 isomer with precisely aligned quantum spin states, which can only be maintained in a containment field powered by the energy of a collapsing micro-singularity.",
        keywords: ["primal engine", "planck-scale", "quantum-tunneling", "reality commands", "cd-122 isomer", "micro-singularity"],
        classified: true,
        accessLevel: 4
    }
];

// User authentication system
const userDatabase = {
    "GUEST-001": { name: "Guest", accessLevel: 0 },
    "RESEARCH-772": { name: "Research Assistant", accessLevel: 1 },
    "ARBITER-553": { name: "Concord Arbiter", accessLevel: 2 },
    "SCHOLAR-009": { name: "Scholasticae Scholar", accessLevel: 3 },
    "DIRECTOR-001": { name: "Concord Director", accessLevel: 4 }
};

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const resultsCount = document.getElementById('resultsCount');
const resultsList = document.getElementById('resultsList');
const welcomeMessage = document.getElementById('welcomeMessage');
const terminal = document.getElementById('terminal');
const closeTerminal = document.getElementById('closeTerminal');
const terminalContent = document.getElementById('terminalContent');
const overlay = document.querySelector('.overlay');
const suggestions = document.querySelectorAll('.suggestion');
const userIdInput = document.getElementById('userIdInput');
const authBtn = document.getElementById('authBtn');
const authStatus = document.getElementById('authStatus');

// Current user state
let currentUser = userDatabase["GUEST-001"];
let authenticated = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    authBtn.addEventListener('click', authenticateUser);
    userIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            authenticateUser();
        }
    });
    
    closeTerminal.addEventListener('click', closeTerminalWindow);
    
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
    
    // Update auth status
    updateAuthStatus();
});

// Authentication function
function authenticateUser() {
    const userId = userIdInput.value.trim().toUpperCase();
    
    if (userDatabase[userId]) {
        currentUser = userDatabase[userId];
        authenticated = true;
        authStatus.textContent = `Status: Authenticated as ${currentUser.name} (Access Level: ${currentUser.accessLevel})`;
        authStatus.style.color = "#00ffcc";
        
        // If there are search results, update them to show classified content
        if (!resultsContainer.classList.contains('hidden')) {
            performSearch();
        }
    } else {
        authenticated = false;
        currentUser = userDatabase["GUEST-001"];
        authStatus.textContent = "Status: Authentication failed - Invalid User ID";
        authStatus.style.color = "#ff5e62";
        
        // If there are search results, update them to hide classified content
        if (!resultsContainer.classList.contains('hidden')) {
            performSearch();
        }
    }
}

// Update authentication status display
function updateAuthStatus() {
    if (authenticated) {
        authStatus.textContent = `Status: Authenticated as ${currentUser.name} (Access Level: ${currentUser.accessLevel})`;
        authStatus.style.color = "#00ffcc";
    } else {
        authStatus.textContent = "Status: Not authenticated";
        authStatus.style.color = "#ff9966";
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
    
    // Split query into multiple keywords
    const keywords = query.split(/\s+/).filter(word => word.length > 0);
    
    // Filter results based on query
    const results = cadmiaDatabase.filter(item => {
        // Check if any keyword matches any keywords or title
        return keywords.some(keyword => 
            item.keywords.some(k => k.includes(keyword)) || 
            item.title.toLowerCase().includes(keyword)
        );
    });
    
    // Display results
    displayResults(results, query);
}

// Display search results
function displayResults(results, query) {
    // Hide welcome message
    welcomeMessage.classList.add('hidden');
    
    // Filter out classified results the user doesn't have access to
    const accessibleResults = results.filter(item => {
        if (!item.classified) return true;
        return authenticated && currentUser.accessLevel >= item.accessLevel;
    });
    
    // Update results count
    resultsCount.textContent = `${accessibleResults.length} vibrational matches found for "${query}"`;
    
    // Clear previous results
    resultsList.innerHTML = '';
    
    if (accessibleResults.length === 0) {
        resultsList.innerHTML = `
            <div class="result-item">
                <h4>NO RESONANCE MATCHES</h4>
                <p>Your search did not match any entries in the Cadmia Archives.</p>
                <p>Try different resonance parameters or authenticate for classified materials.</p>
            </div>
        `;
    } else {
        // Add results to list
        accessibleResults.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result-item';
            
            if (item.classified) {
                resultElement.classList.add('classified');
            }
            
            resultElement.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.content.substring(0, 150)}...</p>
                <div class="keywords">
                    ${item.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                </div>
            `;
            
            // Add click event to show full content
            resultElement.addEventListener('click', () => {
                showTerminal(item);
            });
            
            resultsList.appendChild(resultElement);
        });
    }
    
    // Show results container
    resultsContainer.classList.remove('hidden');
}

// Show terminal with full content
function showTerminal(item) {
    // Check if classified and user has access
    if (item.classified && (!authenticated || currentUser.accessLevel < item.accessLevel)) {
        terminalContent.innerHTML = `
            <h2>ACCESS DENIED</h2>
            <p>This material is classified above your security clearance level.</p>
            <p>Required access level: ${item.accessLevel}</p>
            <p>Your access level: ${authenticated ? currentUser.accessLevel : 'None'}</p>
            <p>Please authenticate with appropriate credentials to view this content.</p>
        `;
    } else {
        terminalContent.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.content}</p>
            <div class="keywords" style="margin-top: 20px;">
                <strong>Resonance Keywords:</strong>
                ${item.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
            </div>
            <p style="margin-top: 20px; font-size: 0.9rem; color: #8888cc;">
                SECURITY LEVEL: ${item.classified ? 'CLASSIFIED (LEVEL ' + item.accessLevel + ')' : 'UNCLASSIFIED'} | ACCESS TIMESTAMP: ${new Date().toLocaleTimeString()}
            </p>
        `;
    }
    
    // Show terminal and overlay
    terminal.classList.add('active');
    overlay.classList.add('active');
}

// Close terminal window
function closeTerminalWindow() {
    terminal.classList.remove('active');
    overlay.classList.remove('active');
}

// Close terminal when clicking outside
overlay.addEventListener('click', closeTerminalWindow);

// Add some visual effects for immersion
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

// Add terminal typing effect for future use
function typeTerminalText(element, text, speed = 20) {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}
