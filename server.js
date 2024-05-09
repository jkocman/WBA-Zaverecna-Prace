const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.port || 3000; 

app.use(cors());

app.get('/leaderboard', (req, res) => {
    const url = "https://osu.ppy.sh/oauth/token";
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    const data = {
        "client_id": 31904,
        "client_secret": "kRfI9HzhUsch6IwSeUMTbtu3TM9tWmUPB8fr42JC",
        "grant_type": "client_credentials",
        "scope": "public" 
    };

    axios.post(url, data, { headers })
        .then(response => {
            const accessToken = response.data.access_token;

            const leaderboardUrl = "https://osu.ppy.sh/api/v2/rankings/osu/performance";
            const leaderboardHeaders = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            };

            axios.get(leaderboardUrl, { headers: leaderboardHeaders })
                .then(response => {
                    const leaderboardData = response.data;
                    res.json(leaderboardData);
                })
                .catch(error => {
                    console.error("Error fetching leaderboard data:", error);
                    res.status(500).json({ error: "Internal Server Error" });
                });
        })
        .catch(error => {
            console.error("Error fetching access token:", error);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

app.listen(port, () => {
    console.log(`Server běží na ${port}`);
});