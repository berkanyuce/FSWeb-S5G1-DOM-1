const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const header_nav = document.querySelectorAll(".container header nav a");
header_nav[0].setAttribute("class", "italic")
header_nav[1].setAttribute("class", "italic")
header_nav[2].setAttribute("class", "italic")
header_nav[3].setAttribute("class", "italic")
header_nav[4].setAttribute("class", "italic")
header_nav[5].setAttribute("class", "italic")

header_nav[0].textContent = siteContent["nav"]["nav-item-1"];
header_nav[1].textContent = siteContent["nav"]["nav-item-2"];
header_nav[2].textContent = siteContent["nav"]["nav-item-3"];
header_nav[3].textContent = siteContent["nav"]["nav-item-4"];
header_nav[4].textContent = siteContent["nav"]["nav-item-5"];
header_nav[5].textContent = siteContent["nav"]["nav-item-6"];

const logo_img = document.getElementById("logo-img");
logo_img.setAttribute("src", siteContent["images"]["logo-img"]);

const cta_text_h1 = document.querySelector(".cta-text h1");
const cta_text_button = document.querySelector(".cta-text button");

cta_text_h1.textContent = siteContent["cta"]["h1"];
cta_text_button.textContent = siteContent["cta"]["button"];

const cta_img = document.getElementById("cta-img");
cta_img.setAttribute("src", siteContent["images"]["cta-img"]);

const text_content_h4 = document.querySelectorAll(".text-content h4");
text_content_h4[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
text_content_h4[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
text_content_h4[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
text_content_h4[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
text_content_h4[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];


const middle_img = document.getElementById("middle-img");
middle_img.setAttribute("src", siteContent["images"]["accent-img"]);


const text_content_p = document.querySelectorAll(".text-content p");
text_content_p[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
text_content_p[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
text_content_p[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
text_content_p[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
text_content_p[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const contact_h4 = document.querySelectorAll(".contact h4");
contact_h4[0].textContent = siteContent["iletisim"]["iletişim-h4"];

const contact_p = document.querySelectorAll(".contact p");
contact_p[0].textContent = siteContent["iletisim"]["adres"];
contact_p[1].textContent = siteContent["iletisim"]["telefon"];
contact_p[2].textContent = siteContent["iletisim"]["email"];

const footer = document.querySelector("footer a");
footer.setAttribute("class", "bold")
footer.textContent = siteContent["footer"]["copyright"];