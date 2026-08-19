//Deklarasi Objek
const karakter = {
    nama: "WIBU",
    health: 100,
    attack: 20,
    defense: 10,
    skill: ["ninja", "samurai"]
};
//Output
console.log(karakter);
//Dot notation
console.log(karakter.nama);
console.log(karakter.health);
console.log(karakter.attack);
console.log(karakter.defense);
console.log(karakter.skill);
//Bracket notation
console.log(karakter['nama']);
console.log(karakter['health']);
console.log(karakter['attack']);
console.log(karakter['defense']);
console.log(karakter['skill']);
//template literal
console.log(`nama: ${karakter.nama},health: ${karakter.health},attack: ${karakter.attack},defense: ${karakter.defense},skill: ${karakter.skill}`);
//mengubah nilai properti
karakter.health = 80;
karakter.attack = 25;
console.log(karakter);