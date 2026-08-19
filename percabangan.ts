let cuaca: string = "mendung";
if(cuaca === "hujan") {
    console.log(`bawa payung`);
} else if (cuaca === "panas") {
    console.log(`pakai kacamata`)
} else {
    console.log(`bawa topi`);
}

let nilai: number = 100;
if(nilai >= 0 && nilai <= 75) {
    console.log(`nilai ${nilai} = tidak lulus`);
}
else if(nilai > 75 && nilai <= 100) {
    console.log(`nilai ${nilai}= lulus`);
}
else {
    console.log(`nilai salah`);
}

if(nilai < 0) {
    console.log(`nilai salah`);
}
else if(nilai <= 75) {
    console.log(`nilai${nilai}=tidak lulus`);
}
else if(nilai <= 100) {
    console.log(`nilai${nilai}=lulus`);
}
else (
    console.log(`nilai salah`)
)