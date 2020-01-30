// FUNCTIONAL PROGRAMMING - MODULAR FUNCTION
​
// FUNCTION pada VARIABEL (Anonymouse Function)
​
function functionSatu(){
    return "Halo";
}
​
function functionDua(){
    let satu = functionSatu();
    console.log(satu + "Dunia");
}
​
functionDua();
​
// function register(nama, alamat, email){
​
//     var validGak = validasi(nama, alamat, email);
​
//     if(validGak){
//         kirimKeServer(nama, alamat, email);
//     }
//     else{
//         gagalKembali();
//     }
​
        // function validasi(nama, alamat, email){
        //     // nama kosong
        //     // return true / false;
        // }
​
    // function kirimKeServer(nama, alamat, email){
    // // NODE JS + API
    // }
​
// }
​
// FUNCTION DENGAN RETURN
​
function apaaja(){
    if(false){
        return "Halo";
    }
​
    return "Hola";
}
​
console.log(apaaja());
​
​
// FUNCTION YANG MEMANGGIL FUNCTION LAIN
​
function isiMie(){
    return "Mie";
}
​
function siapkanMie(jumlah){
    let pesanan = [];
​
    for(let i = 1; i <= jumlah; i++){
        let mie = isiMie();// "Mie"
        pesanan.push(mie);
    }
​
    return pesanan;
}
​
console.log(siapkanMie(10));
​
​
// SELAMA PEMANGGIL FUNCTION / FUNCTION PEMANGGIL MASIH 1 SCOPE
​
function isiBuburKetan(){
    return "Bubur Ketan"; // console.log
}
​
function isiBuburAyam(){
    return "Bubur Ayam";
}
​
function siapkanMakanan(isiNya, jumlah){
    let pesanan = [];
​
    for(let i = 1; i <= jumlah; i++){
        let makanan = isiNya(); // Bubur Ketan
        pesanan.push(makanan);
    }
​
    return pesanan;
}
​
console.log(siapkanMakanan(isiBuburKetan, 20));
console.log(siapkanMakanan(isiBuburAyam, 30));
​
// Jika kita tidak invoke function di argument function lain, maka kita bisa isi argument dengan nama function lalu invoke-nya di dalam function lain
​
​
// FUNCTION YANG MEMANGGIL FUNCTION LAIN (DENGAN RETURN)
​
function tambah(angka1, angka2){
    return angka1 + angka2;
}
​
function kurang(angka1, angka2){
    return angka1 - angka2;
}
function kali(angka1, angka2){
    return angka1 * angka2;
}
function bagi(angka1, angka2){
    return angka1 / angka2;
}
​
function tambahLaluKali(angka1, angka2, angka3){
    // let hasilTambah = tambah(angka1, angka2);
    // let hasilKali = kali(hasilTambah, angka3);
    // return hasilKali;
​
    return kali(tambah(angka1, angka2), angka3);
}
​
console.log(tambahLaluKali(10, 20, 2));
​
console.log(kali(tambah(10, 20), 2));
​
console.log(bagi(kali(tambah(10, 20), 2), 3));
​
// FUNCTION YANG MEMANGGIL FUNCTION LAIN DI PARAMETER (DENGAN RETURN) -> 2
​
​
function judul(kalimat){
​
    function awalAkhir(kalimat, karakter){
        let awal = `${karakter} ${kalimat} ${karakter}`;
        return awal;
    }
​
    let kata = awalAkhir(kalimat, "<h1>");
    let hasil = kata.toUpperCase();
    return hasil;
}
​
console.log(judul("halo dunia"));
​
// FUNCTION MEMANGGIL FUNCTION LAIN (DENGAN RETURN)
​
​
​
​
// PARAMETER DARI RETURN FUNCTION (PASS TEST)
​
​
​
​
// FUNCTION DALAM FUNCTION
​


​
// ARGUMEN DENGAN FUNCTION (CALLBACK)
​
function cari(arr, validasi){
    for(let i = 0; i < arr.length; i++){
        if(!validasi(arr[i])){
            console.log(arr[i]);
            return false;
        }
    }
​
    return true;
}
​
console.log(cari([20, 200, 100, 40, 50], function(angka){
    return angka > 10; // true / false
}));
