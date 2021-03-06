const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//===============My code===============

//navigation tags
const navAnchors = document.querySelectorAll('a');
navAnchors[0].textContent = siteContent.nav['nav-item-1'];
navAnchors[1].textContent = siteContent.nav['nav-item-2'];
navAnchors[2].textContent = siteContent.nav['nav-item-3'];
navAnchors[3].textContent = siteContent.nav['nav-item-4'];
navAnchors[4].textContent = siteContent.nav['nav-item-5'];
navAnchors[5].textContent = siteContent.nav['nav-item-6'];

//Header 
const headerTitle = document.querySelector('.cta h1');
headerTitle.innerHTML = "DOM<br> Is<br> Awesome"

//Get Started button
const headerButton = document.querySelector(".cta button");
headerButton.innerHTML = siteContent.cta["button"];

//Header Image
const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent.cta["img-src"]);

//Content Titles
const textHeaders = document.querySelectorAll(".text-content h4");
textHeaders[0].textContent = siteContent["main-content"]["features-h4"];
textHeaders[1].textContent = siteContent["main-content"]["about-h4"];
textHeaders[2].textContent = siteContent["main-content"]["services-h4"];
textHeaders[3].textContent = siteContent["main-content"]["product-h4"];
textHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

//Content Paragraphs
const mainParagraphs = document.querySelectorAll(".text-content p");
mainParagraphs[0].textContent = siteContent["main-content"]["features-content"];
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"];
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"];
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"];
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

//Middle Image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Contact Header
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact['contact-h4'];

//Contact Info
const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

//Footer
const footerCR = document.querySelector("footer p");
footerCR.textContent = siteContent["footer"]["copyright"];

// //Changing nav text color
// navAnchors.forEach(element => {
//   element.style.color = "green";
// });


//Appending Legal Information
const nav = document.querySelector('nav');
const legalNav = document.createElement("a");
legalNav.setAttribute("href", "#");
legalNav.innerHTML = "Legal";
nav.appendChild(legalNav);

//Prepending Home nav tag 
const homeNav = document.createElement("a");
homeNav.setAttribute("href", "#");
homeNav.innerHTML = "Home";
nav.prepend(homeNav);

//Changing nav text color
navAnchors.forEach(element => {
  element.style.color = "green";
});