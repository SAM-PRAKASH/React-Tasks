var selectedRow = null;
function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("personalDetails").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>`
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onDelete(this)">Delete</a>`
}

function resetForm() {
    document.getElementById("firstName").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
}
function onDelete(td) {
    if (confirm('Do you want to delete the selected details ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("personalDetails").deleteRow(row.rowIndex);
    }
}