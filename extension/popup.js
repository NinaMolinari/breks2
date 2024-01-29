// document.getElementById('listClusters').addEventListener('click', function() {
//     fetch('http://localhost:8080/list-clusters')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('output').innerText = data;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });

let token = null;
tableBody        = document.getElementById('table_01');

function login() {
    fetch('http://localhost:8080/login', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        token = data.token;
    })
    .catch(error => {
        console.error('Login error:', error);
    });
}

window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('listClusters').addEventListener('click', function() {
        fetch('http://localhost:8080/list-clusters', {
            headers: {
                'Authorization': token
            }
        })
        .then(response => response.json())
        .then(data => {
            let tCount = 0;
            // const clusters = data.clusters.join(", ");
            // document.getElementById('output').innerText = "Clusters: " + clusters;
            tableBody.innerHTML         = '';

            caasClusters = data.clusters;
            console.log(caasClusters);
            caasClusters.forEach (function (cluster) {
                tCount +=1 ;
                var tr = document.createElement('tr');
                tr.innerHTML = '<td> (' + tCount + ')</td><td width="400">' + cluster + '</td>';
                tableBody.appendChild(tr);
              });

        })
        .catch(error => {
            console.error('Error:', error);
            outputBox = document.getElementById('output');
            outputBox.innerHTML = 'Error (' + error.error + "): " + error.message
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    tableBody        = document.getElementById('table_01');
});

    // login();
