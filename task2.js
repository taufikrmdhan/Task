
function myGrade (mtk,bahasaIndonesia,bahasaInggris,ipa){
    var nilai = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4;
    console.log(`Rata-rata = ${nilai}`);
    if (nilai >= 90 && nilai <= 100){
        return "Grade = A";
    } else if (nilai >= 80 && nilai <= 89){
        return "Grade = B";
    } else if (nilai >= 70 && nilai <= 79){
        return "Grade = C";
    } else if (nilai >= 60 && nilai <= 69){
        return "Grade = D";
    } else if (nilai >= 0 && nilai <= 59){
        return "Grade = E";
    }
}
console.log(myGrade(90,80,80,80));