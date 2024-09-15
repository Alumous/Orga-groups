function addRow() {
    const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const newCell = newRow.insertCell(0);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = "PRÉNOM DE L'ÉLÈVE";
    newCell.appendChild(input);
}

function createGroups() {
    const groupType = parseInt(document.getElementById('groupType').value);
    const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const students = [];

    for (let i = 0; i < rows.length; i++) {
        const input = rows[i].getElementsByTagName('input')[0];
        if (input.value.trim() !== "") {
            students.push(input.value.trim());
        }
    }

    const groups = [];
    while (students.length > 0) {
        const group = students.splice(0, groupType);
        groups.push(group);
    }

    displayGroups(groups);
}

function createRandomGroups() {
    const groupType = parseInt(document.getElementById('groupType').value);
    const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const students = [];

    for (let i = 0; i < rows.length; i++) {
        const input = rows[i].getElementsByTagName('input')[0];
        if (input.value.trim() !== "") {
            students.push(input.value.trim());
        }
    }

    // Shuffle the students array
    for (let i = students.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [students[i], students[j]] = [students[j], students[i]];
    }

    const groups = [];
    while (students.length > 0) {
        const group = students.splice(0, groupType);
        groups.push(group);
    }

    displayGroups(groups);
}

function displayGroups(groups) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h2>GROUPES CRÉÉS :</h2>";
    groups.forEach((group, index) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';
        groupDiv.innerHTML = `<strong>Groupe ${index + 1} :</strong> ${group.join(', ')}`;
        resultDiv.appendChild(groupDiv);
    });
}
