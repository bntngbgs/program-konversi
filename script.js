const nilai = prompt('Masukkan nilai anda : ');

if (nilai > 90 && nilai <= 100) {
  alert('Nilai Kamu A');
} else if (nilai < 90 && nilai > 80) {
  alert('Nilai Kamu B');
} else if (nilai < 80 && nilai > 70) {
  alert('Nilai Kamu C');
} else if (nilai < 70 && nilai >= 50) {
  alert('Nilai Kamu D');
} else if (nilai < 50) {
  alert('Nilai Kamu E');
} else {
  alert('masukkan angka dari 1-100');
}
