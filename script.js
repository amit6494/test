 document.getElementById('loadDataBtn').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            displayData(data);
        } else {
            console.error('Error loading data');
        }
    };

    xhr.onerror = function () {
        console.error('Error loading data');
    };

    xhr.send();
}
 
function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';

    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        `;
        dataContainer.appendChild(itemDiv);
    });
}