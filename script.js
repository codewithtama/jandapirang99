document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("transaksiForm");
  const daftarBody = document.getElementById("daftar-transaksi-body");

  let transaksiData = JSON.parse(localStorage.getItem("transaksi")) || [];

  // Kalau halaman daftar_transaksi.html
  if (daftarBody) {
    transaksiData.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${item.nama}</td><td>${item.jumlah}</td><td>${item.kategori}</td>`;
      daftarBody.appendChild(row);
    });
  }

  // Kalau halaman transaksi.html
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = form.nama.value.trim();
      const jumlah = form.jumlah.value.trim();
      const kategori = form.kategori.value.trim();

      if (!nama || !jumlah || !kategori) {
        alert("Semua field wajib diisi!");
        return;
      }

      const newData = { nama, jumlah, kategori };
      transaksiData.push(newData);
      localStorage.setItem("transaksi", JSON.stringify(transaksiData));

      alert("Transaksi berhasil disimpan!");
      form.reset();
    });
  }
});
