// Données intégrées directement dans le fichier JavaScript

const championsLeagueData = [
    { year: 2023, club: "Manchester City" },
    { year: 2022, club: "Real Madrid" },
    { year: 2021, club: "Chelsea" },
    { year: 2020, club: "Bayern Munich" },
    { year: 2019, club: "Liverpool" },
    { year: 2018, club: "Real Madrid" },
    // Ajoutez d'autres années et clubs ici
];

const championshipsData = [
    { year: 2023, championship: "Ligue 1", winner: "Paris Saint-Germain" },
    { year: 2023, championship: "Premier League", winner: "Manchester City" },
    { year: 2023, championship: "La Liga", winner: "Barcelona" },
    { year: 2023, championship: "Serie A", winner: "Napoli" },
    { year: 2022, championship: "Ligue 1", winner: "Paris Saint-Germain" },
    { year: 2022, championship: "Premier League", winner: "Manchester City" },
    { year: 2022, championship: "La Liga", winner: "Real Madrid" },
    { year: 2022, championship: "Serie A", winner: "AC Milan" },
    // Ajoutez d'autres années et championnats ici
];

const ballonDorData = [
    { year: 2023, player: "Lionel Messi" },
    { year: 2022, player: "Karim Benzema" },
    { year: 2021, player: "Lionel Messi" },
    { year: 2020, player: "Robert Lewandowski" },
    { year: 2019, player: "Lionel Messi" },
    { year: 2018, player: "Luka Modric" },
    // Ajoutez d'autres années et joueurs ici
];

// Fonction pour remplir les listes
function populateList(elementId, items, ...fields) {
    const list = document.getElementById(elementId);
    list.innerHTML = '';
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = fields.map(field => item[field]).join(' - ');
        list.appendChild(itemElement);
    });
}

// Remplir les sections après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    populateList('champions-league-list', championsLeagueData, 'year', 'club');
    populateList('championships-list', championshipsData, 'year', 'championship', 'winner');
    populateList('ballon-dor-list', ballonDorData, 'year', 'player');
});

