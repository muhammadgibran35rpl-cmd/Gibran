//Nilai spesifik
let hari: number = 7;

switch(hari){
    case 1 : 
    console.log(`hari senin`);
        break;
    case 2 :
        console.log(`hari selasa`);
        break;
    case 3 :
        console.log(`hari rabu`);
        break;
    case 4 :
        console.log(`hari kamis`);
        break;
    case 5 :
        console.log(`hari jumat`);
        break;
    case 6 :
        console.log(`hari sabtu`);
        break;
    case 7 :
        console.log(`hari minggu`);
        break;
        default:
            console.log(`input salah`);
}

let op: string = `a`;
switch(op){
    case `a` : 
    console.log(`RPL 1`);
        break;
    case `b`:
        console.log(`RPL 2`);
        break;
    case `c` :
        console.log(`RPL 5`);
        break;
    case `d` :
        console.log(`RPL 4`);
        break;
    case `e` :
        console.log(`RPL 6`);
        break;
    case `f` :
        console.log(`RPL ICP`);
        break;
        default:
            console.log(`kelas tidak tersedia`)
}
//Nilai rentang
let nilai: number = 85;
switch(true) {
    case nilai>=0 && nilai <=75:
    console.log(`tidak lulus`);
    break;
    case nilai > 75 && nilai <=100: 
    console.log(`lulus`);
    break;
    default:
        console.log(`input salah`);
}