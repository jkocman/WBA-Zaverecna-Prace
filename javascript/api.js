const url = new URL(
    "https://osu.ppy.sh/oauth/token"
);

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

const body = JSON.stringify({
    "client_id": 31904,
    "client_secret": "kRfI9HzhUsch6IwSeUMTbtu3TM9tWmUPB8fr42JC",
    "grant_type": "client_credentials",
    "scope": "public" 
});

fetch(url, {
    method: "POST",
    headers,
    body: body,
    mode: 'no-cors'
})
.then(response => response.json())
.then(data => {
    const accessToken = data.access_token;

    const leaderboardUrl = "https://osu.ppy.sh/api/v2/rankings/osu/performance";
    const leaderboardHeaders = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
    };

    fetch(leaderboardUrl, {
        method: "GET",
        headers: leaderboardHeaders,
    })
    .then(response => response.json())
    .then(leaderboardData => {
        for(const a of leaderboardData.ranking){
            console.log(a.user.username + ' ' + Math.round(a.pp) + ' ' + Math.round(a.hit_accuracy * 100) / 100);
        }
    })
    .catch(error => {
        console.error("Error fetching profile data:", error);
    });
})
.catch(error => {
    console.error("Error fetching access token:", error);
});