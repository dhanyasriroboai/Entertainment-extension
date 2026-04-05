document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const indicator = document.querySelector('.tab-indicator');
  
  // Initialize Rendering
  renderCategory('south-movies');
  renderCategory('south-tv');
  renderCategory('english-movies');
  renderCategory('sports');

  // Handle Tab Switching
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      
      // Set active
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
      
      // Move Indicator
      indicator.style.transform = `translateX(${index * 100}%)`;
    });
  });
});

function renderCategory(categoryId) {
  const container = document.getElementById(categoryId);
  const data = mockData[categoryId] || [];
  
  container.innerHTML = ''; // Clear existing
  
  if (data.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 20px;">No updates available.</p>`;
    return;
  }
  
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
      <div class="poster">
        <img src="${item.poster}" alt="${item.title}">
      </div>
      <div class="info">
        <div class="title">${item.title}</div>
        <div class="meta">
          <span class="rating">${item.rating}</span>
          <span class="language">${item.language}</span>
        </div>
        <div class="overview">${item.overview}</div>
        <div class="card-footer">
          <div class="ott-badge">📺 ${item.ott}</div>
          <a href="${item.link}" target="_blank" class="watch-btn">Details</a>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}
