let usia : number =-10;
let nilai =100000;
let nilai2 = 0.5
let nilai3 = 0.7
let nilai4 = 1
let nilai5 = 0.9
if(usia <= 5 && usia > 0) {
    console.log(`tiket ${nilai*nilai2} = ${usia} tahun`);
}
else if(usia >=6 && usia <=13) {
    console.log(`tiket ${nilai*nilai3} = ${usia} tahun`);
}
else if(usia >=14 && usia <=65) {
    console.log(`tiket ${nilai*nilai4} = ${usia} tahun`);
}
else if(usia > 65) {
    console.log(`tiket ${nilai*nilai5} = ${usia} tahun`);
}
else {
    console.log(`usia salah`)
}
