const PLACES = "places";


// Read the data from the JSON file 
$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        let theTable = document.getElementById(PLACES);
        data.forEach(function(elements) {
           var tbl_row = theTable.insertRow();
           var button = document.createElement('BUTTON');
           var text = document.createTextNode("Open in Google Maps");
           button.appendChild(text);
           var link = "https://www.google.com/maps?q=" + elements["location"];
           button.onclick = function() {
                location.href = link;
           };
           tbl_row.insertCell().innerHTML = elements["name"];
           tbl_row.insertCell().innerHTML = elements["description"];
           tbl_row.insertCell().appendChild(button);
        });
    });
});