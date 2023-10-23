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