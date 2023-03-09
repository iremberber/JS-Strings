//Bilgiler

let url = "https://www.linkedin.com/in";
let HesapSahibiAdi = "İrem Berber";


//Url kaç karakterli?
sonuc = url.length;
console.log(sonuc);


//Url içindeki 5-20. karakter arasındaki karakterler hangileri?

sonuc = url.slice(5,20);
console.log(sonuc);


// HesapSahibiAdi tamamen büyük yazılsın.

sonuc = HesapSahibiAdi.toUpperCase();
console.log(sonuc);


//HesapSahibiAdi kaç kelimeden oluşuyor?
sonuc = HesapSahibiAdi.split(' ').length;
console.log(sonuc);

//Url 'https' ile mi başlıyor?

if (sonuc = url.startsWith("https"))
{ console.log("evet")
} else { console.log(hayır)}

//HesapSahibiAdi'nda İrem kelimesi var mı?

if (sonuc = HesapSahibiAdi.indexOf("irem"))
{ console.log("evet,var")
} else { console.log(hayır,yok)}


//url ve HesapSahibiAdi kullanarak yeni url oluşturma

HesapSahibiAdi = HesapSahibiAdi.toLowerCase();
HesapSahibiAdi = HesapSahibiAdi.replaceAll(" ", "-");

sonuc=HesapSahibiAdi;

sonuc = `${url}/${HesapSahibiAdi}/`;

console.log(sonuc);

