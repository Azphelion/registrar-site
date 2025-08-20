// Database of Cadmia lore
const cadmiaDatabase = [
    {
        id: 1,
        title: "Aethel Corporation",
        content: "The Aethel Corporation is the dominant economic and political force in the Cadmia system. Founded in 3124 by visionary industrialist Alistair Aethel, the corporation controls most of the system's resources, manufacturing, and interstellar travel. Their emblem, a stylized 'A' encircled by stars, is ubiquitous throughout inhabited space.",
        keywords: ["aethel", "corporation", "alistair", "government", "economy", "control"]
    },
    {
        id: 2,
        title: "Void Wraiths",
        content: "Void Wraiths are mysterious entities that inhabit the dark spaces between stars. They are believed to be non-corporeal energy beings that feed on psychic energy. Many spacers tell stories of encountering these beings in the deep void, reporting feelings of dread, temporal distortions, and equipment malfunctions. The Aethel Corporation has classified all research on Void Wraiths.",
        keywords: ["void wraiths", "entities", "energy beings", "psychic", "void", "supernatural"]
    },
    {
        id: 3,
        title: "Quantum Drives",
        content: "Quantum Drives are the primary means of Faster-Than-Light travel in the Cadmia system. Utilizing principles of quantum entanglement and dimensional folding, these drives allow ships to traverse light-years in a matter of days. All Quantum Drive technology is proprietary property of the Aethel Corporation, with unauthorized possession punishable by spacing.",
        keywords: ["quantum drives", "ftl", "travel", "technology", "aethel", "starship"]
    },
    {
        id: 4,
        title: "Cadmia Prime",
        content: "Cadmia Prime is the central planet of the system and home to the Aethel Corporation headquarters. A terraformed world with carefully controlled biospheres, it's the political and economic heart of the system. The planet is divided into seven administrative districts, each specializing in different aspects of industry and governance.",
        keywords: ["cadmia prime", "planet", "capital", "headquarters", "aethel", "terraformed"]
    },
    {
        id: 5,
        title: "Nexus Station",
        content: "Nexus Station is the largest space station in the Cadmia system, serving as the primary hub for interstellar travel and commerce. Located at the Lagrange point between Cadmia Prime and its moon, the station houses over 500,000 permanent residents and processes thousands of ships daily. Security is maintained by Aethel Peacekeepers.",
        keywords: ["nexus station", "space station", "travel", "commerce", "lagrange", "peacekeepers"]
    },
    {
        id: 6,
        title: "The Chromatic Fleet",
        content: "The Chromatic Fleet is the military arm of the Aethel Corporation, tasked with system defense and enforcement of corporate law. Named for the distinctive color-coded ship classifications (Ruby frigates, Emerald destroyers, Sapphire carriers), the fleet is the most powerful military force in the system. Fleet Admiral Valerius commands from the flagship 'Aethel's Glory'.",
        keywords: ["chromatic fleet", "military", "navy", "valerius", "aethel", "warship"]
    },
    {
        id: 7,
        title: "Psionic Abilities",
        content: "Psionic abilities are rare genetic mutations that allow individuals to manipulate reality through mental focus. These abilities are classified by type: Telepathy, Telekinesis, Precognition, and Energy Manipulation. The Aethel Corporation identifies and recruits psions at a young age for specialized training and service.",
        keywords: ["psionic", "telepathy", "telekinesis", "precognition", "energy manipulation", "psions"]
    },
    {
        id: 8,
        title: "The Void Crisis",
        content: "The Void Crisis (3520-3525) was a period of unprecedented Void Wraith activity that resulted in the disappearance of 17 starships and two entire colonies. The crisis ended abruptly when Aethel Corporation deployed an unknown countermeasure. All records of the event are classified above Security Level Omega.",
        keywords: ["void crisis", "history", "3520", "3525", "colonies", "classified"]
    },
    {
        id: 9,
        title: "Cybernetic Enhancements",
        content: "Cybernetic enhancements are common throughout the Cadmia system, ranging from basic neural interfaces to full-body replacements. The Aethel Corporation regulates enhancement technology, with certain advanced modifications restricted to corporate officials and Peacekeepers. Unauthorized enhancements are grounds for immediate detainment.",
        keywords: ["cybernetic", "enhancements", "neural interface", "technology", "peacekeepers"]
    },
    {
        id: 10,
        title: "The Outer Colonies",
        content: "The Outer Colonies are settlements on the fringe of the Cadmia system, beyond the direct control of the Aethel Corporation. These colonies are often mining operations, research outposts, or autonomous communities that reject corporate authority. Life in the Outer Colonies is harsh and dangerous, with limited resources and protection from Void Wraith activity.",
        keywords: ["outer colonies", "settlements", "fringe", "mining", "autonomous", "void wraiths"]
    }
];

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

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
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
});

// Search function
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        // If empty query, show welcome message
        resultsContainer.classList.add('hidden');
        welcomeMessage.classList.remove('hidden');
        return;
    }
    
    // Filter results based on query
    const results = cadmiaDatabase.filter(item => {
        // Check if query matches any keywords or title
        return item.keywords.some(keyword => keyword.includes(query)) || 
               item.title.toLowerCase().includes(query);
    });
    
    // Display results
    displayResults(results, query);
}

// Display search results
function displayResults(results, query) {
    // Hide welcome message
    welcomeMessage.classList.add('hidden');
    
    // Update results count
    resultsCount.textContent = `${results.length} entries found for "${query}"`;
    
    // Clear previous results
    resultsList.innerHTML = '';
    
    if (results.length === 0) {
        resultsList.innerHTML = `
            <div class="result-item">
                <h4>NO RESULTS FOUND</h4>
                <p>Your search did not match any entries in the Cadmia Archives.</p>
                <p>Try different keywords or contact your system administrator for access to restricted files.</p>
            </div>
        `;
    } else {
        // Add results to list
        results.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result-item';
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
    terminalContent.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.content}</p>
        <div class="keywords" style="margin-top: 20px;">
            <strong>Indexed Keywords:</strong>
            ${item.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
        </div>
        <p style="margin-top: 20px; font-size: 0.9rem; color: #8888cc;">
            SECURITY LEVEL: ALPHA | ACCESS TIMESTAMP: ${new Date().toLocaleTimeString()}
        </p>
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
