//console.log("JavaScript Dosyası Bağlandı");

let ornekObje = { ad: "Hasan", soyad: "ÇELİK" };
let ornekObjeJSON = JSON.stringify(ornekObje); //Objeyi JSON Formatına Çevirir
let jsonToObje = JSON.parse(ornekObjeJSON); //JSON formatından işlenebilecek hale getirir
//console.log(jsonToObje)

//=====Java Script Obje======//

//Objeler Anahtar-Değer(Key-Value) çifti şeklinde oluşturlur

let ogrenci = { isim: "Ayşe", soyIsim: "ÇELIK", yas: 50, cinsiyet: "Kadın" };

//Objelerin Değerlerini Okumak İçin Nokta Operatörü Kullanılır
//console.log(ogrenci.isim)
// console.log(
//   `Öğrencinin Adı:${ogrenci.isim} \nÖğrencinin Soyadı: ${ogrenci.soyIsim}\nÖğrencinin Yaşı:${ogrenci.yas} `
// );
//JavaScript SingleThread Bir Dildir

let superFiyatUrun = {
  marka: "HP",
  model: "Victus Gamin",
  resmi: "Resim URl i",
  fiyat: 22.999,
};

// console.log(`
// Super Fiyatlı Ürün Marka: ${superFiyatUrun.marka}\n
// Super Fiyatlı Ürün Model: ${superFiyatUrun.model}\n
// Super Fiyatlı Ürün Resmi: ${superFiyatUrun.resmi}\n
// Super Fiyatlı Ürün Fiyat: ${superFiyatUrun.fiyat}
// `);

// superFiyatUrun.marka='Nivea'

// console.log(`
// Super Fiyatlı Ürün Marka: ${superFiyatUrun.marka}\n
// Super Fiyatlı Ürün Model: ${superFiyatUrun.model}\n
// Super Fiyatlı Ürün Resmi: ${superFiyatUrun.resmi}\n
// Super Fiyatlı Ürün Fiyat: ${superFiyatUrun.fiyat}
// `);

let kisi = new Object();
//console.log(kisi)
//kisi.isim='Murat'
//kisi.soyisim='Kaya'
//kisi.yas=30
//kisi.cinsiyet='Erkek'
//console.log(kisi)

//let kisiClone=kisi
//console.log(kisiClone)

//kisiClone.isim='Hasan'
//console.log(kisi)

/** Kendinize ait isim yas cinsiyet gözrengi bilgierini obje
 * şeklinde oluşturun ve consolda benim Hasan yaşım 25 cinsiyetim erkek
 */

let araba = {
  marka: "Fiat",
  model: "Egea",
  yili: 2023,
  tipi: "Cross",
};

//Obje içerisindeki anahtar değere erişme içinköşeli parantezde kullanılabilir ['anahtarDeğer']

// console.log(araba['marka'])
// console.log(araba)

// delete araba.model

// delete araba['yili']
// araba.yeniTip='hatcback'
// console.log(araba)

// const urun = {
//   marka: "HP",
//   model: "Victus Gamin",
//   fiyat: 25000,
//   resimler: {
//     kapakResmi: "Kapak Resmi URL",
//     minikResim1: "Minik Resim 1 URL",
//     minikResim2: "Minik Resim 2 URL",
//     minikResim3: "Minik Resim 3 URL",
//   },
//   urunTamIsim:function(){
//     return this.marka+ " " + this.model
//   }

// };

// document.write(`Ürün Marka: ${urun.marka} <br> Ürün Model: ${urun.model}

// <br> Ürün Fiyat: ${urun.fiyat} <br>
// Ürün Kapak Fotosu: ${urun.resimler.kapakResmi} <br>
// Ürün Minik Resim1: ${urun.resimler.minikResim1} <br>
// Ürün Minik Resim2: ${urun["resimler"]["minikResim2"]} <br>
// Ürün Tam Isım : ${urun.urunTamIsim()}

// `);

// console.log(`Ürün Tam Isım : ${urun.urunTamIsim()}`)

//Aileniz deki Anne adı Baba adı
//kişi sayısı ve kardeşler altında kardeş isim içeren obje

// const kurs={
//     sirketAdi:'Udemig',
//     kursSecenekleri:{
//         backEnd:'Nodej',
//         frontEnd:['WebFrontEnd','MobilFrontEnd']
//     }
// }

 const bilgisayar = {
   marka: "HP",
   model: "Victus Gamin",
   fiyat: 23000,
   urunResimler: ["Kapak Resmi", "MinikResim1", "MinikResim2", "MinikResim3"],
};
console.log('dede',bilgisayar)

// console.log(bilgisayar.urunResimler[0]);
// bilgisayar.urunResimler.map((i) => console.log(i));

//====Object Constructor====//

function Kisi(adi,soyisim,yas,gozRengi){

    this.kisiAdi=adi,
    this.kisiSoyadi=soyisim,
    this.kisiYas=yas,
    this.kisiGozRengi=gozRengi
}

let kendim=new Kisi('Hasan','Çelik',25,'Kahverengi')
console.log(kendim)

kendim.meslek='React React Native Developer'
console.log(kendim)

let baskasi=new Kisi('Ali','Cabbar',30,'Yeşil')
console.log(baskasi)
baskasi.meslek='Müzisyen'
console.log(baskasi)
baskasi.tamIsim=function(){
    return this.kisiAdi + ' ' + this.kisiSoyadi
}

console.log(baskasi.tamIsim())

//öğrencinin bulunduğu dönem,aldığı eğitim,proje sayısı içerecek şekilde
//bir obje constact ve içeriğini doldurup konsolda yazdırın

Kisi.prototype.egitim='React'
//console.log('asd',kendim)