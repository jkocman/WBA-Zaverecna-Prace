fetch('http://localhost:3000/leaderboard')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching leaderboard data:', error);
    });