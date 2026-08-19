const guru = {
    "Nama Guru": "Dimas",
    "Umur": 40,
    "Sudah sertifikasi": true,
    "Mapel": "PJOK",
    "Telepon": null
};
for (let data in guru) {
    console.log(`${data}: ${guru[data]}`);
}