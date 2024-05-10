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
            let b = '';
            
            switch(a.user.country.name) {
                case 'Australia':
                    b = 'obrázky/flags/Australia.png';
                    break;
                case 'Brazil':
                    b = 'obrázky/flags/Brazil.png';
                    break;
                case 'Canada':
                    b = 'obrázky/flags/Canada.png';
                    break;
                case 'Chile':
                    b = 'obrázky/flags/Chile.png';
                    break;
                case 'Germany':
                    b = 'obrázky/flags/Germany.png';
                    break;
                case 'Indonesia':
                    b = 'obrázky/flags/Indonesia.png';
                    break;
                case 'Japan':
                    b = 'obrázky/flags/Japan.png';
                    break;
                case 'Kazakhstan':
                    b = 'obrázky/flags/Kazakhstan.png';
                    break;
                case 'Malaysia':
                    b = 'obrázky/flags/Malaysia.png';
                    break;
                case 'Netherlands':
                    b = 'obrázky/flags/Netherlands.png';
                    break;
                case 'New Zealand':
                    b = 'obrázky/flags/NewZealand.png';
                    break;
                case 'Norway':
                    b = 'obrázky/flags/Norway.png';
                    break;
                case 'Peru':
                    b = 'obrázky/flags/Peru.png';
                    break;
                case 'Philippines':
                    b = 'obrázky/flags/Philippines.png';
                    break;
                case 'Poland':
                    b = 'obrázky/flags/Poland.png';
                    break;
                case 'Qatar':
                    b = 'obrázky/flags/Qatar.png';
                    break;
                case 'Russian Federation':
                    b = 'obrázky/flags/Russia.png';
                    break;
                case 'South Korea':
                    b = 'obrázky/flags/SouthKorea.png';
                    break;
                case 'Spain':
                    b = 'obrázky/flags/Spain.png';
                    break;
                case 'United Kingdom':
                    b = 'obrázky/flags/UK.png';
                    break;
                case 'United States':
                    b = 'obrázky/flags/US.png';
                    break;
                default:
                    b = 'obrázky/flags/US.png'
            }

            var leaderboardPlayer = createLeaderboardPlayer(
                i,
                b,
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