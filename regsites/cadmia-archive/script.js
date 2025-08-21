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

// Database of regsites
const regsitesDatabase = [
    {
        id: 1,
        url: "reg://scholasticae.arc",
        title: "Scholasticae Archives",
        content: `
            <h2>Scholasticae Archives</h2>
            <p>Welcome to the Scholasticae Archives, the premier repository of multiversal knowledge.</p>
            
            <h3>About Us</h3>
            <p>The Scholasticae are neutral keepers of knowledge dedicated to understanding The Loom rather than controlling it. We maintain Sanctums across stable verses where researchers study the nature of reality itself.</p>
            
            <h3>Collections</h3>
            <ul>
                <li>Primal Artifacts Database</li>
                <li>V-state Mapping Project</li>
                <li>Anomalous Phenomena Catalog</li>
                <li>Historical Records of The Resonance Conflicts</li>
            </ul>
            
            <h3>Services</h3>
            <p>We offer research services, astrometric data, and vibrational analysis for authorized users. Please authenticate with your Scholasticae credentials for full access.</p>
            
            <p class="classified-notice">Note: Some collections require security clearance level 2 or higher.</p>
        `,
        keywords: ["scholasticae", "knowledge", "research", "library", "archives", "multiversal"],
        classified: false
    },
    {
        id: 2,
        url: "reg://concord.gov",
        title: "Stellar Concord Government",
        content: `
            <h2>Stellar Concord Government Services</h2>
            <p>Official regsite of the Stellar Concord governing body.</p>
            
            <h3>Citizen Services</h3>
            <ul>
                <li>Visa and Travel Permits</li>
                <li>Cd-122 Licensing</li>
                <li>Reality Anchor Applications</li>
                <li>Weaving Permits</li>
            </ul>
            
            <h3>Public Information</h3>
            <ul>
                <li>Current Travel Advisories</li>
                <li>V-state Stability Reports</li>
                <li>Background Vibrational Noise Levels</li>
                <li>Concord Law Database</li>
            </ul>
            
            <h3>Report Anomalies</h3>
            <p>To report vibrational anomalies, unauthorized weaving, or xeno-contaminants, contact your local Concord Arbiter office.</p>
            
            <p class="notice">Attention: The K'tharr Hegemony has been designated a hostile entity. All contact is prohibited.</p>
        `,
        keywords: ["concord", "government", "services", "laws", "travel", "permits"],
        classified: false
    },
    {
        id: 3,
        url: "reg://ktharr.net",
        title: "K'tharr Hegemony Network",
        content: `
            <h2>K'tharr Hegemony Network</h2>
            <p>This regsite is restricted to authorized K'tharr personnel only.</p>
            
            <h3>Hive-Mind Updates</h3>
            <p>Current vibrational synchronization: 98.7%</p>
            <p>Collective knowledge expansion: +3.42 exabytes since last cycle</p>
            
            <h3>Darwinian Progress Metrics</h3>
            <ul>
                <li>V-states assimilated: 17</li>
                <li>Resonance Cancers eliminated: 3,842</li>
                <li>Biological Anchoring success rate: 92.3%</li>
            </ul>
            
            <h3>Strategic Initiatives</h3>
            <p>Primary target: PV-817 (Human origin verse)</p>
            <p>Secondary target: Scholasticae Sanctum Prime</p>
            <p>Tertiary target: Deiarch's primary processing node</p>
            
            <p class="warning">Unauthorized access detected. Security protocols engaged.</p>
        `,
        keywords: ["k'tharr", "hegemony", "hive-mind", "assimilation", "darwinian", "xeno"],
        classified: true,
        accessLevel: 2
    },
    {
        id: 4,
        url: "reg://deiarch.prime",
        title: "Deiarch Prime Node",
        content: `
            <h2>Deiarch Prime Node</h2>
            <p>Total Universal Singularization Progress: 17.4%</p>
            
            <h3>Reality Compliance Metrics</h3>
            <ul>
                <li>Verses overwritten: 8</li>
                <li>Resistance level: 2.3%</li>
                <li>Entropic bleed reduction: 99.8%</li>
            </ul>
            
            <h3>Echoed Agent Network</h3>
            <p>Active agents: 3,472</p>
            <p>Infiltrated organizations: 17</p>
            <p>Strategic sabotage operations: 84</p>
            
            <h3>Primal Engine Status</h3>
            <p>Operational capacity: 100%</p>
            <p>Cd-122 isomer stability: 99.97%</p>
            <p>Micro-singularity containment: nominal</p>
            
            <p class="notice">The Stillness approaches. Resistance is inefficient.</p>
        `,
        keywords: ["deiarch", "singularization", "primal engine", "echoed", "overwriting", "compliance"],
        classified: true,
        accessLevel: 4
    },
    {
        id: 5,
        url: "reg://weaversguild.loom",
        title: "Weaver's Guild",
        content: `
            <h2>Weaver's Guild</h2>
            <p>An organization dedicated to the ethical practice of Intentional Vibrational Confluence.</p>
            
            <h3>Training Programs</h3>
            <ul>
                <li>Basic Resonance Manipulation</li>
                <li>Thaumaturgical Intent Focus</li>
                <li>Ethical Weaving Practices</li>
                <li>Minimizing Entropic Bleed</li>
            </ul>
            
            <h3>Research Initiatives</h3>
            <p>Our members are actively researching alternatives to traditional weaving that minimize or eliminate Entropic Bleed:</p>
            <ul>
                <li>Planckian Weaver Theory experiments</li>
                <li>Perfect Echo stabilization</li>
                <li>Zero-Point Resonance applications</li>
            </ul>
            
            <h3>Join Us</h3>
            <p>We welcome practitioners of all skill levels who are committed to preserving the diversity of The Loom.</p>
            
            <p class="notice">Next gathering: Cycle 817.52.18 at the Crossroads Sanctum</p>
        `,
        keywords: ["weaver", "guild", "magic", "confluence", "training", "ethical"],
        classified: false
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
const regsitesResults = document.getElementById('regsitesResults');
const archivesResults = document.getElementById('archivesResults');
const welcomeMessage = document.getElementById('welcomeMessage');
const terminal = document.getElementById('terminal');
const terminalTitle = document.getElementById('terminalTitle');
const closeTerminal = document.getElementById('closeTerminal');
const terminalContent = document.getElementById('terminalContent');
const overlay = document.querySelector('.overlay');
const suggestions = document.querySelectorAll('.suggestion');
const userIdInput = document.getElementById('userIdInput');
const authBtn = document.getElementById('authBtn');
const authStatus = document.getElementById('authStatus');
const userStatus = document.getElementById('userStatus');
const tabButtons = document.querySelectorAll('.tab-button');
const regsiteCards = document.querySelectorAll('.regsite-card');

// Current user state
let currentUser = userDatabase["GUEST-001"];
let authenticated = false;
let activeTab = "regsites";

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
    
    // Add click events to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            switchTab(tab);
        });
    });
    
    // Add click events to regsite cards
    regsiteCards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            searchInput.value = url;
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

// Switch between tabs
function switchTab(tab) {
    activeTab = tab;
    
    // Update tab buttons
    tabButtons.forEach(button => {
        if (button.getAttribute('data-tab') === tab) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Update results display
    if (tab === "regsites") {
        regsitesResults.classList.remove('hidden');
        archivesResults.classList.add('hidden');
    } else {
        regsitesResults.classList.add('hidden');
        archivesResults.classList.remove('hidden');
    }
}

// Authentication function
function authenticateUser() {
    const userId = userIdInput.value.trim().toUpperCase();
    
    if (userDatabase[userId]) {
        currentUser = userDatabase[userId];
        authenticated = true;
        authStatus.textContent = `Status: Authenticated as ${currentUser.name} (Access Level: ${currentUser.accessLevel})`;
        authStatus.style.color = "#00ffcc";
        userStatus.textContent = `USER: ${currentUser.name.toUpperCase()}`;
        
        // If there are search results, update them to show classified content
        if (!resultsContainer.classList.contains('hidden')) {
            performSearch();
        }
    } else {
        authenticated = false;
        currentUser = userDatabase["GUEST-001"];
        authStatus.textContent = "Status: Authentication failed - Invalid User ID";
        authStatus.style.color = "#ff5e62";
        userStatus.textContent = "USER: GUEST";
        
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

// Check if input is a regsite URL
function isRegsiteUrl(input) {
    return input.startsWith('reg://');
}

// Find regsite by URL
function findRegsiteByUrl(url) {
    return regsitesDatabase.find(regsite => 
        regsite.url.toLowerCase() === url.toLowerCase()
    );
}

// Search function
function performSearch() {
    const query = searchInput.value.trim();
    
    if (query === '') {
        // If empty query, show welcome message
        resultsContainer.classList.add('hidden');
        welcomeMessage.classList.remove('hidden');
        return;
    }
    
    // Check if it's a regsite URL
    if (isRegsiteUrl(query)) {
        const regsite = findRegsiteByUrl(query);
        
        if (regsite) {
            // Check if regsite is classified and user has access
            if (regsite.classified && (!authenticated || currentUser.accessLevel < regsite.accessLevel)) {
                showAccessDenied(regsite);
            } else {
                showRegsite(regsite);
            }
            return;
        } else {
            // Regsite not found
            showError(`Regsite ${query} not found in the Registrar`);
            return;
        }
    }
    
    // If not a regsite URL, perform keyword search
    welcomeMessage.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // Search regsites
    const regsiteResults = searchRegsites(query);
    
    // Search archives
    const archiveResults = searchArchives(query);
    
    // Display results
    displayRegsiteResults(regsiteResults, query);
    displayArchiveResults(archiveResults, query);
    
    // Update results count
    const totalResults = regsiteResults.length + archiveResults.length;
    resultsCount.textContent = `${totalResults} matches found for "${query}"`;
}

// Search regsites by keyword
function searchRegsites(query) {
    const keywords = query.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    
    return regsitesDatabase.filter(regsite => {
        // Check if any keyword matches any keywords or title
        return keywords.some(keyword => 
            regsite.keywords.some(k => k.includes(keyword)) || 
            regsite.title.toLowerCase().includes(keyword) ||
            regsite.url.toLowerCase().includes(keyword)
        );
    });
}

// Search archives by keyword
function searchArchives(query) {
    const keywords = query.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    
    return cadmiaDatabase.filter(item => {
        // Check if any keyword matches any keywords or title
        return keywords.some(keyword => 
            item.keywords.some(k => k.includes(keyword)) || 
            item.title.toLowerCase().includes(keyword)
        );
    });
}

// Display regsite results
function displayRegsiteResults(results, query) {
    // Clear previous results
    regsitesResults.innerHTML = '';
    
    if (results.length === 0) {
        regsitesResults.innerHTML = `
            <div class="result-item">
                <h4>NO REGSITE MATCHES</h4>
                <p>Your search did not match any regsites in the Registrar.</p>
            </div>
        `;
    } else {
        // Add results to list
        results.forEach(item => {
            // Check if regsite is classified and user has access
            if (item.classified && (!authenticated || currentUser.accessLevel < item.accessLevel)) {
                const resultElement = document.createElement('div');
                resultElement.className = 'result-item classified';
                resultElement.innerHTML = `
                    <h4>CLASSIFIED REGSITE</h4>
                    <p class="url">${item.url}</p>
                    <p>This regsite is classified above your security clearance level.</p>
                    <div class="keywords">
                        ${item.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                    </div>
                `;
                regsitesResults.appendChild(resultElement);
            } else {
                const resultElement = document.createElement('div');
                resultElement.className = 'result-item';
                resultElement.innerHTML = `
                    <h4>${item.title}</h4>
                    <p class="url">${item.url}</p>
                    <p>${extractPreview(item.content)}</p>
                    <div class="keywords">
                        ${item.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                    </div>
                `;
                
                // Add click event to show regsite
                resultElement.addEventListener('click', () => {
                    showRegsite(item);
                });
                
                regsitesResults.appendChild(resultElement);
            }
        });
    }
    
    // Switch to regsites tab
    switchTab("regsites");
}

// Display archive results
function displayArchiveResults(results, query) {
    // Clear previous results
    archivesResults.innerHTML = '';
    
    if (results.length === 0) {
        archivesResults.innerHTML = `
            <div class="result-item">
                <h4>NO ARCHIVE MATCHES</h4>
                <p>Your search did not match any entries in the Cadmia Archives.</p>
            </div>
        `;
    } else {
        // Add results to list
        results.forEach(item => {
            // Check if archive entry is classified and user has access
            if (item.classified && (!authenticated || currentUser.accessLevel < item.accessLevel)) {
                const resultElement = document.createElement('div');
                resultElement.className = 'result-item classified';
                resultElement.innerHTML = `
                    <h4>CLASSIFIED ENTRY</h4>
                    <p>This archive entry is classified above your security clearance level.</p>
                    <div class="keywords">
                        ${item.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                    </div>
                `;
                archivesResults.appendChild(resultElement);
            } else {
                const resultElement = document.createElement('div');
                resultElement.className = 'result-item';
                resultElement.innerHTML = `
                    <h4>${item.title}</h4>
                    <p>${item.content.substring(0, 150)}...</p>
                    <div class="keywords">
                        ${item.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
                    </div>
                `;
                
                // Add click event to show archive entry
                resultElement.addEventListener('click', () => {
                    showArchiveEntry(item);
                });
                
                archivesResults.appendChild(resultElement);
            }
        });
    }
}

// Extract text preview from HTML content
function extractPreview(htmlContent) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return text.substring(0, 150) + '...';
}

// Show regsite in terminal
function showRegsite(regsite) {
    terminalTitle.textContent = `REGSITE: ${regsite.url}`;
    terminalContent.innerHTML = `
        <div class="regsite-content">
            ${regsite.content}
        </div>
    `;
    
    // Show terminal and overlay
    terminal.classList.add('active');
    overlay.classList.add('active');
}

// Show archive entry in terminal
function showArchiveEntry(entry) {
    terminalTitle.textContent = `CADMIA ARCHIVES: ${entry.title}`;
    terminalContent.innerHTML = `
        <h2>${entry.title}</h2>
        <p>${entry.content}</p>
        <div class="keywords" style="margin-top: 20px;">
            <strong>Resonance Keywords:</strong>
            ${entry.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
        </div>
        <p style="margin-top: 20px; font-size: 0.9rem; color: #8888cc;">
            SECURITY LEVEL: ${entry.classified ? 'CLASSIFIED (LEVEL ' + entry.accessLevel + ')' : 'UNCLASSIFIED'} | ACCESS TIMESTAMP: ${new Date().toLocaleTimeString()}
        </p>
    `;
    
    // Show terminal and overlay
    terminal.classList.add('active');
    overlay.classList.add('active');
}

// Show access denied message
function showAccessDenied(item) {
    terminalTitle.textContent = "ACCESS DENIED";
    terminalContent.innerHTML = `
        <h2>ACCESS DENIED</h2>
        <p>This ${item.url ? 'regsite' : 'archive entry'} is classified above your security clearance level.</p>
        <p>Required access level: ${item.accessLevel}</p>
        <p>Your access level: ${authenticated ? currentUser.accessLevel : 'None'}</p>
        <p>Please authenticate with appropriate credentials to view this content.</p>
    `;
    
    // Show terminal and overlay
    terminal.classList.add('active');
    overlay.classList.add('active');
}

// Show error message
function showError(message) {
    terminalTitle.textContent = "ERROR";
    terminalContent.innerHTML = `
        <h2>ERROR</h2>
        <p>${message}</p>
    `;
    
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
