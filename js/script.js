function validateForm() {
    const nama = document.forms["message-us"]["namalengkap"].value;
    const tanggallahir = document.forms ["message-us"]["tgllahir"].value;
    const gender = document.forms ["message-us"]["gender"].value;
    const pesan = document.forms ["message-us"]["pesan"].value;

    if (Nama == "" || tanggal-lahir == "" || gender == "" || pesan == "") {
    alert("Tidak Boleh Kosong");
    return false;
}

setSenderUI(nama, tanggallahir, gender, pesan);
return false;

}

function setSenderUI (nama, tanggallahir, gender, pesan) {
    document.getElementById("sender-fullname").innerHTML = nama;
    document.getElementById("sender-birthdate").innerHTML = tanggallahir;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = pesan;
}