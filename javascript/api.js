function createLeaderboardPlayer(rank, flagSrc, playerName, accuracy, score) {
    let section = document.createElement('section');
    section.classList.add('leaderboard-player');

    let playerInfo = document.createElement('section');
    playerInfo.classList.add('player-info');

    let playerRank = document.createElement('p');
    playerRank.textContent = '#' + rank;

    let flagImage = document.createElement('img');
    flagImage.classList.add('flag-image');
    flagImage.src = flagSrc;
    flagImage.alt = '';

    let playerNameElement = document.createElement('p');
    playerNameElement.textContent = playerName;

    let playerStats = document.createElement('section');
    playerStats.classList.add('player-stats');

    let accuracyElement = document.createElement('p');
    accuracyElement.classList.add('accuracy');
    accuracyElement.textContent = accuracy;

    let scoreElement = document.createElement('p');
    scoreElement.textContent = score;

    playerInfo.appendChild(playerRank);
    playerInfo.appendChild(flagImage);
    playerInfo.appendChild(playerNameElement);

    playerStats.appendChild(accuracyElement);
    playerStats.appendChild(scoreElement);

    section.appendChild(playerInfo);
    section.appendChild(playerStats);

    return section;
}


const leaderboardContainer = document.querySelector('.leaderboard');

const loadingIndicator = document.querySelector('.loading-indicator');
const leaderboardExplanation = document.querySelector('.leaderboard-explanation');
const footer = document.querySelector('.footer');


fetch('https://osu-api.onrender.com/leaderboard')
    .then(response => response.json())
    .then(data => {
        loadingIndicator.remove();
        leaderboardExplanation.style.display = 'grid';
        footer.style.position = 'relative';

        console.log(data);
        let i = 1;
        for(const a of data.ranking){
            console.log(a.user.username);
            var leaderboardPlayer = createLeaderboardPlayer(
                i,
                'obrázky/Flag_of_Australia_(1901–1903).svg.png',
                a.user.username,
                a.hit_accuracy.toFixed(2) + '%',
                Math.round(a.pp),
            );
            leaderboardContainer.appendChild(leaderboardPlayer);
            i++
        }
    })
    .catch(error => {
        console.error('Error fetching leaderboard data:', error);
    });