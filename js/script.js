function validateForm() {
    const nama = document.forms['message-form'][name-input].value;
    if(nama == '') {
        document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong"
        return false
    }
    document.getElementById("name").innerHTML = nama;
    document.getElementById("error-name").innerHTML = "";
    return false
}

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
console.log(dateTime)