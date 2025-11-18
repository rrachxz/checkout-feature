CARA MENYAMBUNGKAN FORM KE GOOGLE SPREADSHEET

Buat Google Sheet
-> buat kolom tanggal, nama, no.hp, jumlah pengguna, nama perusahaan, alamat perusahaan, no. telp kantor, email kantor, jabatan/posisi, harga
Buka Extensions > App Script
Beri nama project
Copy paste kode yang ada di code-appscript.txt
Tambahkan paste sheet id:
-> cara mendapatkan sheet id
   -> lihat pada url dan copy kode yang berada diantara d/.../id
   cth: https://docs.google.com/spreadsheets/d/ [1FbgPJtpNN6xo35nyVcaZJPsAKCJ_aKnQroNB93ltits]
   /edit?gid=0#gid=0
   yang dikurung siku itu id sheet nya
Atur trigger (logo jam beker), tambah trigger, dan setting trigger sprti di setting trigger.png
Run dan pastikan tidak ada error
Deploy dan copy Web App Url dari app script
Paste Web App Url ke form action dan kode javascript di function fetch
Form HTML dapat terhubung ke google spreadsheet