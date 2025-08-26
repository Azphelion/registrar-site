// Scholasticae Archive Script
document.addEventListener('DOMContentLoaded', function() {
    checkArchiveAccess();
    loadArchiveData();
});

// Check if user has access to the archive
function checkArchiveAccess() {
    const currentUser = getCurrentUser();
    const accessDenied = document.getElementById('access-denied');
    const archiveContent = document.getElementById('archive-content');
    
    if (currentUser) {
        // Check if user has access to this regsite
        const regsite = regsites.find(r => r.id === 'scholasticae-archive');
        if (regsite && hasAccessToRegsite(regsite, currentUser.username)) {
            accessDenied.style.display = 'none';
            archiveContent.style.display = 'block';
        } else {
            accessDenied.style.display = 'block';
            archiveContent.style.display = 'none';
        }
    } else {
        accessDenied.style.display = 'block';
        archiveContent.style.display = 'none';
    }
}

// Load archive data and populate the page
function loadArchiveData() {
    // In a real implementation, this would fetch from a JSON file or API
    // For now, we'll use sample data
    const featuredPapers = [
        {
            id: 'paper-001',
            title: 'Quantum Bridging Efficiency in Cd-122 Catalytic Resonance',
            author: 'Dr. Aris Thorne, Scholasticae Physica',
            abstract: 'This study examines the efficiency thresholds of Cadmium-122 as a catalytic resonance medium, with particular focus on its multiversal quantum superposition properties and implications for vibrational state travel.',
            date: '237.4.12',
            category: 'physics',
            vState: 'PV-817'
        },
        {
            id: 'paper-002',
            title: 'Entropic Bleed: Measurement and Implications for Universal Singularization',
            author: 'Research Division, Concord Science Directorate',
            abstract: 'Long-term analysis of background vibrational noise across 47 monitored N-verses, with projections for singularization timelines and recommended protocols for bleed mitigation.',
            date: '237.3.28',
            category: 'metaphysics',
            vState: 'Multiple'
        },
        {
            id: 'paper-003',
            title: 'Primal Ruin Analysis: Deciphering Arcanus Protocol Fragments',
            author: 'Kaelen Voss, Primal Studies Department',
            abstract: 'A breakthrough in translating Primal information structures found in PV-817 ruins, with potential insights into the original extension of The Loom.',
            date: '237.4.05',
            category: 'primal',
            vState: 'PV-817'
        }
    ];
    
    const recentPapers = [
        {
            id: 'paper-004',
            title: 'Reality Anchor Stability Metrics in High-Bleed Environments',
            author: 'Engineering Corps, Sentinel Fleet',
            abstract: 'Evaluation of Anchor performance under extreme entropic conditions, with proposed modifications to buffer field generation in unstable V-states.',
            date: '237.4.18',
            category: 'engineering',
            vState: 'NV-432'
        },
        {
            id: 'paper-005',
            title: 'The Resonance Conflicts: Historical Analysis of Mage-Lord Weaponization',
            author: 'Historical Documentation Office',
            abstract: 'Previously classified records from the Resonance Conflicts, detailing the catastrophic use of vibrational weaponry and its long-term effects on V-state stability.',
            date: '237.4.15',
            category: 'history',
            vState: 'Multiple'
        },
        {
            id: 'paper-006',
            title: 'Cognitive Hazards of Interstitial Veil Exposure: Case Studies',
            author: 'Medical Research Division, Scholasticae',
            abstract: 'Analysis of neural rewiring and psychic feedback in subjects exposed to X-verse resonance during Veil traversal, with proposed safety protocols.',
            date: '237.4.10',
            category: 'metaphysics',
            vState: 'PV-817'
        }
    ];
    
    populatePapersGrid('featured-papers', featuredPapers);
    populatePapersGrid('recent-papers', recentPapers);
    
    // Add event listeners to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            filterByCategory(category);
        });
    });
}

// Populate a papers grid with data
function populatePapersGrid(gridId, papers) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    papers.forEach(paper => {
        const paperElement = document.createElement('div');
        paperElement.className = 'paper-card';
        paperElement.innerHTML = `
            <h3>${paper.title}</h3>
            <div class="paper-author">${paper.author}</div>
            <div class="paper-abstract">${paper.abstract}</div>
            <div class="paper-meta">
                <span>${paper.date}</span>
                <span>${paper.vState}</span>
            </div>
        `;
        
        paperElement.addEventListener('click', () => {
            viewPaper(paper.id);
        });
        
        grid.appendChild(paperElement);
    });
}

// View a specific paper
function viewPaper(paperId) {
    // In a real implementation, this would navigate to the paper page
    // For now, we'll show an alert
    alert(`Navigating to paper: ${paperId}\n\nIn a full implementation, this would open the detailed paper view.`);
}

// Filter by category
function filterByCategory(category) {
    // In a real implementation, this would filter the displayed papers
    alert(`Filtering by category: ${category}\n\nIn a full implementation, this would show only papers from this category.`);
}

// Perform archive search
function performArchiveSearch() {
    const query = document.getElementById('archive-search').value.trim();
    const category = document.getElementById('category-filter').value;
    const date = document.getElementById('date-filter').value;
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    
    // In a real implementation, this would perform a search
    alert(`Searching for: ${query}\nCategory: ${category}\nDate: ${date}\n\nIn a full implementation, this would display search results.`);
}

// Override the general performSearch function for the archive
function performSearch() {
    performArchiveSearch();
}
