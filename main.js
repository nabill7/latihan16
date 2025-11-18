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
  document.getElementById("hasil").style.color ="#c0392b"
  return 
  }

 // logika pengecekan kelulusan
 if (
   (nilaiinput >=90 && hadirinput >= 95) || // keduanya tinggi
   (nilaiinput >=95 && hadirinput >= 80) || // nilai sangat tinggi + hadir cukup 
   (nilaiinput >=75 && hadirinput >= 98) || // nilai cukup + hadir sangat tinggi
   (nilaiinput >=80 && hadirinput >= 85) ||
   (nilaiinput >=70 && hadirinput >= 60) 
   ) {
    // kelulusan dengan bonus
    hasil = "🎉 selamat, Anda Lulus dengan bonus!"
 } else if (nilaiinput >=80 && hadirinput >= 85){
   // kelulusan standar
   hasil ="☑️ lulus."
 } else {
   // tidak lulus
   hasil ="❌ tidak lulus."
 }
 // tampilkan hasil ke elemen dengan id hasil
 document.getElementById("hasil").innerHTML = hasil
}