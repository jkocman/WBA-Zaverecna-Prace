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
const footer = document.querySelector('footer');



// Bohužel načtení dat může trvat až 50 sekund kvůli free hostingu, který se po 15ti minutách stane neaktivní
fetch('https://osu-api.onrender.com/leaderboard')
    .then(response => response.json())
    .then(data => {
        loadingIndicator.remove();
        leaderboardExplanation.style.display = 'grid';
        footer.style.position = 'relative'

        console.log(data);
        let i = 1;
        for(const a of data.ranking){
            console.log(a.user.username);
            let flagPath = '';
            
            switch(a.user.country.name) {
                case 'Australia':
                    flagPath = 'images/flags/Australia.png';
                    break;
                case 'Brazil':
                    flagPath = 'images/flags/Brazil.png';
                    break;
                case 'Canada':
                    flagPath = 'images/flags/Canada.png';
                    break;
                case 'Chile':
                    flagPath = 'images/flags/Chile.png';
                    break;
                case 'Germany':
                    flagPath = 'images/flags/Germany.png';
                    break;
                case 'Indonesia':
                    flagPath = 'images/flags/Indonesia.png';
                    break;
                case 'Japan':
                    flagPath = 'images/flags/Japan.png';
                    break;
                case 'Kazakhstan':
                    flagPath = 'images/flags/Kazakhstan.png';
                    break;
                case 'Malaysia':
                    flagPath = 'images/flags/Malaysia.png';
                    break;
                case 'Netherlands':
                    flagPath = 'images/flags/Netherlands.png';
                    break;
                case 'New Zealand':
                    flagPath = 'images/flags/NewZealand.png';
                    break;
                case 'Norway':
                    flagPath = 'images/flags/Norway.png';
                    break;
                case 'Peru':
                    flagPath = 'images/flags/Peru.png';
                    break;
                case 'Philippines':
                    flagPath = 'images/flags/Philippines.png';
                    break;
                case 'Poland':
                    flagPath = 'images/flags/Poland.png';
                    break;
                case 'Qatar':
                    flagPath = 'images/flags/Qatar.png';
                    break;
                case 'Russian Federation':
                    flagPath = 'images/flags/Russia.png';
                    break;
                case 'South Korea':
                    flagPath = 'images/flags/SouthKorea.png';
                    break;
                case 'Spain':
                    flagPath = 'images/flags/Spain.png';
                    break;
                case 'United Kingdom':
                    flagPath = 'images/flags/UK.png';
                    break;
                case 'United States':
                    flagPath = 'images/flags/US.png';
                    break;
                default:
                    flagPath = a.user.country.name
            }

            var leaderboardPlayer = createLeaderboardPlayer(
                i,
                flagPath,
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