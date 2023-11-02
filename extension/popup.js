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

document.getElementById('listClusters').addEventListener('click', function() {
    fetch('http://localhost:8080/list-clusters', {
        headers: {
            'Authorization': token
        }
    })
    .then(response => response.json())
    .then(data => {
        const clusters = data.clusters.join(", ");
        document.getElementById('output').innerText = "Clusters: " + clusters;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

login();

