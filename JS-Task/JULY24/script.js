var app = new function () {

    this.cell1 = document.getElementById('names');
    this.cell2 = document.getElementById('emails');

    this.names = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];
    this.emails = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];

    this.Count = function (data) {
        var cell1 = document.getElementById('counter');
        var cell2 = document.getElementById('counter');
        var name = 'teachername';
        var email = 'teacheremail';

        if (data) {
            if (data > 1) {
                name = 'names';
                email = 'emails'
            }
            cell1.innerHTML = data + ' ' + name;
            cell2.innerHTML = data + ' ' + email;
        } else {
            cell1.innerHTML = 'No ' + name;
        }
    };

    this.FetchAll = function () {
        var data = '';

        if (this.names.length > 0) {
            for (i = 0; i < this.names.length; i++) {
                data += '<tr>';
                data += '<td>' + this.names[i] + '</td>';
                data += '<td>' + this.emails[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }

        this.Count(this.names.length);
        this.Count(this.emails.length);
        return this.cell1.innerHTML = data;
    };

    this.Add = function () {
        cell1 = document.getElementById('add-name');
        cell2 = document.getElementById('add-email');
        // Get the value
        var teachername = cell1.value;
        var email = cell2.value;

        if (teachername) {
            // Add the new value
            this.names.push(teachername.trim());
            this.emails.push(teacheremail.trim());
            // Reset input value
            cell1.value = '';
            cell2.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };

    this.Edit = function (item) {
        var cell1 = document.getElementById('edit-name');
        // Display value in the field
        cell1.value = this.names[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function () {
            // Get value
            var teachername = cell1.value;

            if (teachername) {
                // Edit value
                self.names.splice(item, 1, teachername.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };

    this.Delete = function (item) {
        // Delete the current row
        this.names.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}