/**
 * Student Name: Wilson Yang
 * Student Number: 301195179
 */

const defaultRowMax = 10, defaultCellMax = 10;

window.addEventListener('load', (event) => {
    createTable(defaultRowMax, defaultCellMax)
});

function createTable(rowParam, colParam) {

    const element = document.getElementById('default-table');
    const currentTableElem = document.getElementById('currentTable');

    if (currentTableElem) {
        currentTableElem.remove();
    }

    const userTable = document.createElement('table');
    userTable.setAttribute('id', 'currentTable')

    const tableBody = document.createElement('tbody');
    userTable.appendChild(tableBody);

    var maxRow = document.getElementById('maxRows').value;
    var maxColumn = document.getElementById('maxColumns').value;

    if (maxRow == "" || maxRow == null) {
        for (let rowCounter = 0; rowCounter< defaultRowMax; rowCounter++) {
            const tableRow = document.createElement('tr');
            tableBody.appendChild(tableRow);
            
    
            for (let columnCounter = 0; columnCounter < defaultCellMax; columnCounter++) {
                const tableColumn = document.createElement('td');
                const cellText = document.createTextNode(`${rowCounter + 1} x ${columnCounter + 1} = ${(rowCounter + 1) * (columnCounter + 1)}`);
    
                tableRow.appendChild(tableColumn);
                tableColumn.appendChild(cellText);
            }
        }
        document.body.appendChild(userTable);
    }

    else {
       for (let rowCounter = 0; rowCounter< maxRow; rowCounter++) {
        const tableRow = document.createElement('tr');
        tableBody.appendChild(tableRow);
        

            for (let columnCounter = 0; columnCounter < maxColumn; columnCounter++) {
                const tableColumn = document.createElement('td');
                const cellText = document.createTextNode(`${rowCounter + 1} x ${columnCounter + 1} = ${(rowCounter + 1) * (columnCounter + 1)}`);

                tableRow.appendChild(tableColumn);
                tableColumn.appendChild(cellText);
            }
        }
        document.body.appendChild(userTable); 
    }
}

const userInputTable = () => {
    if (document.getElementById("maxRows").value && document.getElementById("maxColumns").value) {
        createTable(document.getElementById("maxRows").value, document.getElementById("maxColumns").value);
    }
}
