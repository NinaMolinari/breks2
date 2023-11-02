document.getElementById('listClusters').addEventListener('click', function() {
    fetch('http://localhost:8080/list-clusters')
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
