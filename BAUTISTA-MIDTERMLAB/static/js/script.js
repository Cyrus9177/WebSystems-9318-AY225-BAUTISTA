document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const countInput = document.getElementById('countInput');
  const refreshBtn = document.getElementById('refreshBtn');
  const csvBtn = document.getElementById('csvBtn');
  const gameTable = document.getElementById('gameTable');
  const rowCount = document.querySelector('.row-count');

  let games = [];

  // Fetch games on page load
  fetchGames(10);

  // Refresh button
  refreshBtn.addEventListener('click', function() {
    const count = parseInt(countInput.value) || 10;
    if (count < 10 || count > 25) {
      alert('Count must be between 10-25');
      return;
    }
    fetchGames(count);
  });

  // Search functionality
  searchInput.addEventListener('input', filterGames);

  // CSV export
  csvBtn.addEventListener('click', function() {
    const count = parseInt(countInput.value) || 10;
    window.location.href = `/export/csv?count=${count}`;
  });

  function fetchGames(count) {
    fetch(`/api/games?count=${count}`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(data => {
        games = data;
        renderGames();
        updateRowCount();
      })
      .catch(error => {
        console.error('Error fetching games:', error);
        gameTable.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #666;">Error loading games. Please try again.</td></tr>';
      });
  }

  function renderGames() {
    gameTable.innerHTML = '';

    if (games.length === 0) {
      gameTable.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #666;">No games found.</td></tr>';
      return;
    }

    games.forEach(game => {
      const row = document.createElement('tr');

      const titleCell = document.createElement('td');
      titleCell.textContent = game['Game Title'] || 'N/A';
      row.appendChild(titleCell);

      const releaseCell = document.createElement('td');
      releaseCell.textContent = game['Release Date'] || 'Not Available';
      row.appendChild(releaseCell);

      const featuresCell = document.createElement('td');
      featuresCell.textContent = game['Key Features'] || 'Not Available';
      row.appendChild(featuresCell);

      const platformCell = document.createElement('td');
      platformCell.textContent = game['Platform Availability'] || 'Not Available';
      row.appendChild(platformCell);

      const devCell = document.createElement('td');
      devCell.textContent = game['Developer Information'] || 'Not Available';
      row.appendChild(devCell);

      const pubCell = document.createElement('td');
      pubCell.textContent = game['Publisher Information'] || 'Not Available';
      row.appendChild(pubCell);

      const linkCell = document.createElement('td');
      if (game['Source URL'] && game['Source URL'] !== 'Not Available') {
        const link = document.createElement('a');
        link.href = game['Source URL'];
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'source-link';
        link.title = 'View on Metacritic';
        link.innerHTML = '<i class="fas fa-external-link-alt"></i>';
        linkCell.appendChild(link);
      } else {
        linkCell.textContent = 'N/A';
      }
      row.appendChild(linkCell);

      gameTable.appendChild(row);
    });
  }

  function filterGames() {
    const query = searchInput.value.toLowerCase();
    const rows = gameTable.querySelectorAll('tr');

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.includes(query)) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });

    updateRowCount();
  }

  function updateRowCount() {
    const visibleRows = gameTable.querySelectorAll('tr:not(.hidden)').length;
    const totalRows = gameTable.querySelectorAll('tr').length;

    if (visibleRows === 0) {
      rowCount.textContent = `0 / ${totalRows} games`;
    } else {
      rowCount.textContent = `${visibleRows} / ${totalRows} games`;
    }
  }
});
