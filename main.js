//fungsi untuk mengecek kelulusan siswa
function cekkelulusan(){
  //ambil nilai dari elemen input
  //diubah menjadi tipe data number 
  let nilaiinput = Number (document.getElementById("nilai").value);
  
  //ambil hadir dari elemen input
  //diubah menjadi tipe data number
  let hadirinput = Number (document.getElementById("hadir").value);
  
  //membuat variabel untuk menyimpan hasil 
  let hasil = "";
//validasi imput kosong
if (!nilaiinput || !hadirinput) {
  hasil = " ⚠️nilai dan kehadiran harus diisi";
  document.getElementById("hasil").innerHTML=hasil 
  return 
  
}

}