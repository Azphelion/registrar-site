// Function to fill search bar with example
function fillSearch(value) {
    document.getElementById('regsearch').value = value;
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

// Initialize page when loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for Enter key in search
    document.getElementById('regsearch').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Add visual effects to status meters
    const meterFills = document.querySelectorAll('.meter-fill');
    meterFills.forEach(meter => {
        // Reset width to 0 for animation
        const width = meter.style.width;
        meter.style.width = '0';
        
        // Animate to the target width
        setTimeout(() => {
            meter.style.transition = 'width 2s ease-in-out';
            meter.style.width = width;
        }, 500);
    });
});
