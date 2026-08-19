"use strict";
let nilai = 60;
let nilai2 = 90;
// OA 
let penjumlahan = nilai + nilai2;
let pengurangan = nilai - nilai2;
let perkalian = nilai * nilai2;
let pembagian = nilai / nilai2;
let pangkat = nilai ** 2;
console.log(`${nilai} + ${nilai2} = ${penjumlahan}`);
console.log(`${nilai} - ${nilai2} = ${pengurangan}`);
console.log(`${nilai} * ${nilai2} = ${perkalian}`);
console.log(`${nilai} / ${nilai2} = ${pembagian}`);
console.log(`${nilai} ** 2 = ${pangkat}`);
// OP
console.log(`${nilai} < ${nilai2} = ${nilai < nilai2}`);
console.log(`${nilai} > ${nilai2} = ${nilai > nilai2}`);
console.log(`${nilai} === ${nilai2} = ${nilai === nilai2}`);
console.log(`${nilai} <= ${nilai2} = ${nilai <= nilai2}`);
console.log(`${nilai} >= ${nilai2} = ${nilai >= nilai2}`);
console.log(`${nilai} == ${nilai2} = ${nilai == nilai2}`);
console.log(`${nilai} != ${nilai2} = ${nilai != nilai2}`);
console.log(`${nilai} !== ${nilai2} = ${nilai !== nilai2}`);
// OL
let kondisi = true;
let kondisi2 = false;
console.log(`kondisi 1 AND kondisi 2 = ${kondisi && kondisi2}`);
console.log(`kondisi 1 OR kondisi 2 = ${kondisi || kondisi2}`);
console.log(`NOT kondisi 1 = ${!kondisi}`);
console.log(`NOT kondisi 2 = ${!kondisi2}`);
