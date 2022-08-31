// 2. Buat program yang menghitung rata-rata UN beserta gradenya,
// dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris
// Matematika dan IPA, yang di dalam program tersebut memiliki
// validasi yaitu semua nilai tersebut harus diisi, dan juga untuk
// grade memiliki kondisi dengan ketentuan sebagai berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E
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