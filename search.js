// search.js
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-bar');
  
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = this.querySelector('input[type="search"]');
      const query = searchInput.value.trim();
      
      if (query) {
        // Option 1: Redirect to a search results page
        window.location.href = search.html?q=${encodeURIComponent(query)};
        
        // Option 2: Log to console for debugging (remove in production)
        console.log('Search query:', query);
      }
    });
  }
});