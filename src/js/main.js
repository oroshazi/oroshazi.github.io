const data = {
    "players": [
        {
            "firstName": "Noemi",
            "lastName": "Szentimrei",
            "score": 6
        },
        {
            "firstName": "Zsofi",
            "lastName": "Oszlay",
            "score": 11
        },
        {
            "firstName": "Tomi",
            "lastName": "Nagy",
            "score": 5
        },
        {
            "firstName": "OPeti",
            "lastName": "Oroshazi",
            "score": 11
        },
        {
            "firstName": "Julcsi",
            "lastName": "Oroshazi",
            "score": 14
        },
        {
            "firstName": "LPeti",
            "lastName": "Lindner",
            "score": 10
        }
    ]
}


function createTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let header of data) {

        let th = document.createElement("th");
        let text = document.createTextNode(header);

        th.appendChild(text)
        row.appendChild(th);
    }

}

function createTable(table, data) {
    let players = data.players;

    players.sort((a, z) => z.score - a.score)

    for (player of players) {
        let row = table.insertRow();

        let indexCell = row.insertCell();
        let index = document.createTextNode(players.indexOf(player) + 1);
        indexCell.appendChild(index);

        let nameCell = row.insertCell();
        let name = document.createTextNode(player.firstName)
        nameCell.appendChild(name);

        let scoreCell = row.insertCell();
        let score = document.createTextNode(player.score)
        scoreCell.appendChild(score);

    }
}



let tableHeaders = ["#", "name", "score"];
let table = document.querySelector("table");

createTableHead(table, tableHeaders);
createTable(table, data); 