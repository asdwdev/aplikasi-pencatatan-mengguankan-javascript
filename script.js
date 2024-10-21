// tangkap elemen kelas buat catatan
const buatCatatan = document.querySelector('.buat-catatan');

// ketika elemen buatcatatan di klik, maka 
buatCatatan.addEventListener('click', function() {
    // jika form awalnya di hide, maka tampilkan, begitupun sebaliknya
    const form = document.querySelector('form');
    form.classList.toggle('hide');
})

// tangkap elemen textarea
const textarea = document.querySelector('textarea');

// tangkap element button
const button = document.querySelector('button');

// ketika elemen button di klik
button.addEventListener('click', function() {
    // Tangkap elemen ul 
    const ul = document.querySelector('ul');

    // Ambil teks dari textarea
    const text = textarea.value.trim(); // Mengambil dan menghapus spasi di awal dan akhir

    // Hanya buat elemen <li> baru jika text tidak kosong
    if (text !== '') {
        // Buat elemen <li> baru
        const li = document.createElement('li');
        // Tambahkan teks dari textarea ke dalam elemen <li> yang baru
        li.textContent = text;

        // Masukkan <li> baru ini ke dalam elemen ul
        ul.appendChild(li);
        
        // Tangkap elemen p yang memiliki kelas belum ada catatan
        const pKeterangan = document.querySelector('p.belum-ada-catatan');

        // Jika ada catatan, kosongkan pKeterangan
        pKeterangan.innerHTML = '';
    }

    // Bersihkan textarea setelah eksekusi
    textarea.value = '';
});


// Menambahkan event listener untuk menangani event keydown pada textarea
textarea.addEventListener('keydown', function(event) {
    // Jika tombol yang ditekan adalah Tab
    if (event.key === 'Tab') {
        event.preventDefault(); // Mencegah perilaku default Tab
        button.focus(); // Fokus ke tombol
    }
});

document.body.addEventListener('keydown', function(event) {
    // Cek apakah Ctrl + K ditekan
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault(); // Mencegah perilaku default
        buatCatatan.focus(); // Pindahkan fokus ke elemen buatCatatan
    }
})