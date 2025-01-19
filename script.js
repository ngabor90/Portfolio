const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 7) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 8;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});


//TRANSLATIONS
const translations = {
    hu: {
        navHome: "Főoldal",
        navService: "Szolgáltatások",
        navResume: "Magamról",
        navPortfolio: "Portfolió",
        navContact: "Kapcsolat",

        homeH1: 'Németh Gábor',
        homeH2: 'Junior',
        spans: [
            { text: 'Webfejlesztő', styleIndex: 4 },
            { text: 'Front-end fejlesztő', styleIndex: 3 },
            { text: 'Backend fejlesztő', styleIndex: 2 },
            { text: 'Fullstack fejlesztő', styleIndex: 1 }
        ],
        homeP1: 'Webfejlesztői munkát keresek.',
        homeP2: 'Gyorsan és lelkesen tanulok, szeretnék elhelyezkedni a szakmában.',
        homeP3: 'Nyitott vagyok újabb és újabb technológiák elsajátítására a hatékonyabb munkavégzés érdekében.',
        homeCV: 'Magyar nyelvű CV letöltése',

        serviceH2: "",
        serviceH2Span: "Szolgáltatások",
        service1H3: "Front-end fejlesztés",
        service1p1: "A front-end fejlesztés során modern, reszponzív és esztétikusan megtervezett felületeket hozok létre, amelyek nemcsak jól mutatnak, hanem kiváló felhasználói élményt is biztosítanak. Fontosnak tartom, hogy az általam fejlesztett alkalmazások minden eszközön - legyen az telefon, tablet vagy asztali számítógép - gördülékenyen és gyorsan működjenek.",
        service1p2: "Az alábbi technológiákat használom: HTML5, CSS, JavaScript, TypeScript, Angular",
        service2H3: "Backend fejlesztés",
        service2p1: "A hatékony webes alkalmazások szívét a stabil és megbízható szerveroldali rendszer alkotja. A back-end fejlesztés során az adatkezelési és szerveroldali logikára fókuszálok, így az alkalmazások zökkenőmentesen kommunikálnak a front-end réteggel.",
        service2p2: "A következő technológiákkal dolgozom: PHP és MySQL adatbáziskezelő",
        service3H3: "Fullstack fejlesztés",
        service3p1: "A front-end és back-end fejlesztés kombinációjával teljes körű webes megoldásokat kínálok. A Fullstack fejlesztés során nemcsak a felhasználói felület megtervezésére és fejlesztésére fókuszálok, hanem a háttérrendszer kidolgozására is, hogy az alkalmazás minden szempontból tökéletesen működjön.",
        service3p2: "A két terület összefonódásának köszönhetően olyan rendszereket hozok létre, amelyek zökkenőmentesen működnek mind a felhasználói, mind az adminisztrációs oldalon. Könnyen bővíthetők és testreszabhatók az ügyféligények szerint. Biztosítják az adatok biztonságos kezelését és tárolását.",

        resumeH2: "Miért engem válassz?",
        resumeP: "Több mint egy évtizedes irodai munkatapasztalattal és friss, piacképes webfejlesztői tudással rendelkezem. Szenvedéllyel és elkötelezettséggel dolgozom, mindig a minőséget és az ügyfél elégedettségét tartom szem előtt.",
        resumeButton1: "Munkahelyeim",
        resumeButton2: "Képzések",
        resumeButton3: "Technológiák",
        resumeButton4: "Rólam",

        resumeExperienceH2: "",
        resumeExperienceH2Span: "Munkahelyeim",
        resumeExperienceP: "Az elmúlt 10 évben irodai környezetben dolgoztam, ahol precizitás, hatékony időgazdálkodás és analitikus gondolkodás vált alapvető készségeimmé. Ez az időszak nemcsak a munkafegyelmet és a csapatmunkát erősítette bennem, hanem felkészített a webfejlesztői munkák kihívásaira is. Most az irodai tapasztalatokat ötvözöm a technikai tudással, hogy értékes hozzájárulást nyújtsak új csapatomban.",
        resumeExperienceItem1P1: "2024. február - Jelenleg",
        resumeExperienceItem1H3: "Webfejlesztő",
        resumeExperienceItem1P2: "Szabadúszó",
        resumeExperienceItem1P3: "Webfejlesztés, front-end, backend fejlesztés",

        resumeExperienceItem2P1: "2018 augusztus - Jelenleg",
        resumeExperienceItem2H3: "Iratkezelő",
        resumeExperienceItem2P2: "Közbeszerzés és Ellátási Főigazgatóság",
        resumeExperienceItem2P3: "Iratkezelés, irattárolás, adminisztráció",

        resumeExperienceItem3P1: "2014 május - 2018 július",
        resumeExperienceItem3H3: "Irattáros",
        resumeExperienceItem3P2: "Iron Mountain Magyarország Kft.",
        resumeExperienceItem3P3: "Irattárolás, adminisztráció",

        resumeExperienceItem4P1: "2011 júlis - 2014 április",
        resumeExperienceItem4H3: "Webshop adminisztrátor",
        resumeExperienceItem4P2: "Hangszerker Kft.",
        resumeExperienceItem4P3: "Webshop kezelés",

        resumeExperienceItem5P1: "2011 május - 2011 július",
        resumeExperienceItem5H3: "Irodai munkatárs",
        resumeExperienceItem5P2: "Educatio Kft.",
        resumeExperienceItem5P3: "Adminisztráció",

        resumeEducationH2: "",
        resumeEducationH2Span: "Képzéseim",
        resumeEducationP: "A Ruander Oktatási Központban kezdtem meg webfejlesztői tanulmányaimat, ahol Frontend Fejlesztést tanultam és sikeres vizsgát tettem. Ennek eredményeként államilag elismert Junior Frontend OKJ bizonyítványt szereztem. Ezt követően mélyebb ismereteket szereztem a PHP és SQL területén, és elvégeztem a Fullstack Webfejlesztő képzést. A folyamatos önképzés révén bővítem ismereteimet a legmodernebb technológiákról.",
        resumeEducationItem1P1: "2024 február - 2024 július",
        resumeEducationItem1H3: "Webfejlesztő",
        resumeEducationItem1P2: "Ruander Oktatási Központ",

        resumeEducationItem2P1: "2023 február - 2024 február",
        resumeEducationItem2H3: "Front-end fejlesztő",
        resumeEducationItem2P2: "Ruander Oktatási Központ",

        resumeEducationItem3P1: "2004 szeptember - 2008 június",
        resumeEducationItem3H3: "Érettségi",
        resumeEducationItem3P2: "ELTE Gyakorló Középiskola",
        resumeEducationItem3P3: "Informatikai érettségi",

        resumeSkillsH2: "",
        resumeSkillsH2Span: "Techológiák",
        resumeSkillsP: "Az alábbi technológiákban rendelkezem tapasztalattal, de nagyon szívesen tanulok új technológiákat.",

        resumeAboutH2: "",
        resumeAboutH2Span: "Magamról",
        resumeAboutP: "Budapesten élek, ahol a kreativitás és a fejlődés iránti vágy vezérel a mindennapokban. Gyorsan és lelkesen tanulok, célom, hogy teljes értékű tagja legyek egy profi fejlesztőcsapatnak. Rugalmasságom és analitikus gondolkodásom segít, hogy komplex problémákra is hatékony megoldásokat találjak. Emellett nyitott vagyok új technológiák megismerésére, hiszen hiszek abban, hogy az IT-világ folyamatosan fejlődik, és lépést kell tartani vele.",

        resumeAboutItemP1: "Név: ",
        resumeAboutItemP1Span: "Németh Gábor",
        resumeAboutItemP2: "Nem: ",
        resumeAboutItemP2Span: "Férfi",
        resumeAboutItemP3: "Kor: ",
        resumeAboutItemP3Span: "35",
        resumeAboutItemP4: "Város: ",
        resumeAboutItemP4Span: "Budapest",
        resumeAboutItemP5: "Nemzetiség: ",
        resumeAboutItemP5Span: "Magyar",
        resumeAboutItemP6: "Teljes munkatapasztalat: ",
        resumeAboutItemP6Span: "10+ év",
        resumeAboutItemP7: "Webfejlesztés: ",
        resumeAboutItemP7Span: "Junior",
        resumeAboutItemP8: "Teljes Munkaidő: ",
        resumeAboutItemP8Span: "Igen",
        resumeAboutItemP9: "Szabadúszó: ",
        resumeAboutItemP9Span: "Igen",
        resumeAboutItemP10: "Nyelvek: ",
        resumeAboutItemP10Span: "Magyar, Angol",

        portfolioH2: "Legutóbbi ",
        portfolioH2Span: "Projektek",
        portfolio1: "Gitár API",
        portfolio2: "PHP Szivarpontozó oldal",
        portfolio3: "Lash By Judie - Szempilla stylist oldal",
        portfolio4: "PHP MVC alapú szervíz oldal",
        portfolio5: "PHP Apróhirdetések oldal",
        portfolio6: "Angular Hangszerbolt Oldal",
        portfolio7: "Az Outlaw zenekar honlapja",
        portfolio8: "Rick & Morty API",
        portfolio9: "TypeScript Szivarpontozó oldal",
        portfolioP1: "Ez egy fullstack weboldal ami gitárokkal foglalkozik, API hívás történik, a backend része MVC alapú PHP MySQL adatbázissal, a frontend része HTML és Javascript. Bejelentkezés után van lehetőség a gitárok módosítására, törlésére illetve új termék felvitelre.",
        portfolioP2: "Ez egy Szivar pontozó vélemény oldal, ami PHP-ban lett megírva, CSV adatbázist használ.",
        portfolioP3: "A legfrissebb Front-end-es munkám, hosszú CSS stílusokkal, Bootstrap keretrendszerrel. Büki Judit szempilla stylist oldala.",
        portfolioP4: "Ez egy PHP-ban megírt MySQL adatbázissal ellátott fullstack weboldal! A Szervizelt termékek menüpont alatt lehet megnézni a képzeletbeli szervíz oldalán lévő szervizelt termékek adatait és állapotukat.",
        portfolioP5: "Ez egy PHP-ban megírt MySQL adatbázissal ellátott apróhirdetések oldal, ahol meg lehet nézni a hirdetéseket regisztráció nélkül. Regisztráció és bejelentkezés után fel lehet rakni új hirdetést, illetve tudunk adatokat módosítani.",
        portfolioP6: "Ez egy Angular projekt ami bemutat egy hangszerbolt minta oldalt Netlify App-ra feltöltve.",
        portfolioP7: "Ez az Outlaw blues-rock zenekarom honlapja.",
        portfolioP8: "Ez a Rick & Morty API oldalról történő XML API hívás.",
        portfolioP9: "Ez egy szivar pontozó oldal, ahol feltöltheted szivarjaid értékeléseit, Netlify App-ra feltöltve.",
        goToWebsite: "Irány a honlapra",
        goToGithub: "Irány a kódhoz",

        contactH2: "Dolgozzunk együtt",
        contactP: "Köszönöm, hogy időt szántál portfólióm megtekintésére. Szenvedélyem a webfejlesztés, és célom, hogy egy professzionális csapat tagjaként kamatoztathassam tudásom, miközben folyamatosan fejlődhetek. Ha nyitott vagy arra, hogy együtt dolgozzunk, örömmel venném, ha felvennéd velem a kapcsolatot!",
        contactPhone: "Telefon",
        contactAdress: "Cím",
        contactAdress2: "1041 Budapest, Magyarország",
        contactMe: "Írj ",
        contactMeSpan: "nekem!",
        input1Placeholder: "Teljes név",
        input2Placeholder: "Email",
        input3Placeholder: "Telefonszám",
        input4Placeholder: "Tárgy",
        input5Placeholder: "Az üzeneted",
        inputButton: "Küldés",

        successTitle: "Sikeres üzenetküldés!",
        successText: "Köszönöm levelét, hamarosan felveszem a kapcsolatot Önnel!",
        errorTitle: "Hiba történt!",
        errorText: "Hiba történt az üzenet küldésekor.",
        loadingTitle: "Üzenet küldése...",
        loadingText: "Kérem, várjon...",
        sendingEmail: "Küldés..."
    },
    en: {
        navHome: "Home",
        navService: "Service",
        navResume: "Resume",
        navPortfolio: "Portfolio",
        navContact: "Contact",

        homeH1: 'Gabor Nemeth',
        homeH2: 'Junior',
        spans: [
            { text: 'Web Developer', styleIndex: 4 },
            { text: 'Front-end Developer', styleIndex: 3 },
            { text: 'Back-end Developer', styleIndex: 2 },
            { text: 'Fullstack Developer', styleIndex: 1 }
        ],
        homeP1: 'I am looking for a job as a web developer.',
        homeP2: 'I learn quickly and enthusiastically, I want to get a job in the IT field.',
        homeP3: 'I am open to learning more and more new technologies in order to work more efficiently.',
        homeCV: 'Download English CV',

        serviceH2: "My ",
        serviceH2Span: "Services",
        service1H3: "Front-end Development",
        service1p1: "In front-end development, I create modern, responsive, and aesthetically pleasing interfaces that not only look great but also provide an excellent user experience. I ensure that the applications I develop run smoothly and quickly on all devices—whether it is a phone, tablet, or desktop computer.",
        service1p2: "The technologies I use include: HTML5, CSS, JavaScript, TypeScript, Angular.",
        service2H3: "Backend Development",
        service2p1: "The heart of effective web applications is a stable and reliable server-side system. In back-end development, I focus on data management and server-side logic, ensuring that applications communicate seamlessly with the front-end layer.",
        service2p2: "The technologies I work with include: PHP and MySQL database management.",
        service3H3: "Fullstack Development",
        service3p1: "By combining front-end and back-end development, I offer comprehensive web solutions. Fullstack development allows me to focus not only on designing and developing user interfaces but also on building robust backend systems, ensuring the application works perfectly in all aspects.",
        service3p2: "The integration of these two areas enables me to create systems that run seamlessly on both the user and administrative sides. They are easy to expand and customize according to client requirements, ensuring secure data handling and storage.",

        resumeH2: "Why Choose Me?",
        resumeP: "I bring over a decade of office work experience combined with fresh, marketable web development skills. I work with passion and dedication, always prioritizing quality and client satisfaction.",
        resumeButton1: "Experience",
        resumeButton2: "Education",
        resumeButton3: "Skills",
        resumeButton4: "About",

        resumeExperienceH2: "My ",
        resumeExperienceH2Span: "Experience",
        resumeExperienceP: "For the past 10 years, I have worked in office environments where precision, effective time management, and analytical thinking became key strengths. This period not only honed my discipline and teamwork skills but also prepared me for the challenges of web development. Now, I combine my office experience with technical expertise to contribute valuable skills to my new team.",
        resumeExperienceItem1P1: "February 2024 - Present",
        resumeExperienceItem1H3: "Web Developer",
        resumeExperienceItem1P2: "Freelancer",
        resumeExperienceItem1P3: "Web development, front-end and back-end development",

        resumeExperienceItem2P1: "August 2018 - Present",
        resumeExperienceItem2H3: "Document Manager",
        resumeExperienceItem2P2: "Közbeszerzési és Ellátási Főigazgatóság",
        resumeExperienceItem2P3: "Document management, archiving, administration",

        resumeExperienceItem3P1: "May 2014 - July 2018",
        resumeExperienceItem3H3: "Archivist",
        resumeExperienceItem3P2: "Iron Mountain Hungary Ltd.",
        resumeExperienceItem3P3: "Document storage, administration",

        resumeExperienceItem4P1: "July 2011 - April 2014",
        resumeExperienceItem4H3: "Webshop Administrator",
        resumeExperienceItem4P2: "Hangszerker Ltd.",
        resumeExperienceItem4P3: "Webshop management",

        resumeExperienceItem5P1: "May 2011 - July 2011",
        resumeExperienceItem5H3: "Office Assistant",
        resumeExperienceItem5P2: "Educatio Ltd.",
        resumeExperienceItem5P3: "Administration",

        resumeEducationH2: "My ",
        resumeEducationH2Span: "Education",
        resumeEducationP: "I started my web development studies at Ruander Education Center, where I completed a Frontend Development course and successfully passed the final exam. As a result, I earned a state-recognized Junior Frontend Developer qualification. Later, I gained deeper knowledge in PHP and SQL and completed the Fullstack Web Developer course. Through continuous self-learning, I expand my knowledge of the latest technologies.",
        resumeEducationItem1P1: "February 2024 - July 2024",
        resumeEducationItem1H3: "Web Developer",
        resumeEducationItem1P2: "Ruander Education Center",

        resumeEducationItem2P1: "February 2023 - February 2024",
        resumeEducationItem2H3: "Frontend Developer",
        resumeEducationItem2P2: "Ruander Education Center",

        resumeEducationItem3P1: "September 2004 - June 2008",
        resumeEducationItem3H3: "High School Diploma",
        resumeEducationItem3P2: "ELTE Practice Secondary School",
        resumeEducationItem3P3: "IT-focused graduation",

        resumeSkillsH2: "My ",
        resumeSkillsH2Span: "Skills",
        resumeSkillsP: "I have experience with the following technologies and am always eager to learn new ones.",

        resumeAboutH2: "About ",
        resumeAboutH2Span: "Me",
        resumeAboutP: "I live in Budapest, driven by creativity and a desire for growth in my daily life. I learn quickly and enthusiastically, aiming to become a full-fledged member of a professional development team. My flexibility and analytical thinking help me find effective solutions to complex problems. Additionally, I am open to exploring new technologies because I believe that staying up-to-date is key in the ever-evolving IT world.",

        resumeAboutItemP1: "Name: ",
        resumeAboutItemP1Span: "Gabor Németh",
        resumeAboutItemP2: "Gender: ",
        resumeAboutItemP2Span: "Male",
        resumeAboutItemP3: "Age: ",
        resumeAboutItemP3Span: "35",
        resumeAboutItemP4: "City: ",
        resumeAboutItemP4Span: "Budapest",
        resumeAboutItemP5: "Nationality: ",
        resumeAboutItemP5Span: "Hungarian",
        resumeAboutItemP6: "Total Work Experience: ",
        resumeAboutItemP6Span: "10+ years",
        resumeAboutItemP7: "Web Development: ",
        resumeAboutItemP7Span: "Junior",
        resumeAboutItemP8: "Full-Time: ",
        resumeAboutItemP8Span: "Yes",
        resumeAboutItemP9: "Freelancer: ",
        resumeAboutItemP9Span: "Yes",
        resumeAboutItemP10: "Languages: ",
        resumeAboutItemP10Span: "Hungarian, English",

        portfolioH2: "Latest ",
        portfolioH2Span: "Projects",
        portfolio1: "Guitar API",
        portfolio2: "PHP Cigar Rating Website",
        portfolio3: "Lash By Judie - Eyelash Stylist Website",
        portfolio4: "PHP MVC-Based Service Website",
        portfolio5: "PHP Classified Ads Website",
        portfolio6: "Angular Musical Instrument Store Website",
        portfolio7: "The Outlaw Band's Website",
        portfolio8: "Rick & Morty API",
        portfolio9: "TypeScript Cigar Rating Website",
        portfolioP1: "This is a full-stack website focused on guitars. It uses API calls, the backend is built with MVC-based PHP and MySQL database, and the frontend is built with HTML and JavaScript. After logging in, users can modify, delete, or add new guitar entries.",
        portfolioP2: "This is a cigar rating and review website built in PHP using a CSV database.",
        portfolioP3: "My latest front-end project featuring extensive CSS styling and Bootstrap framework. This is the website for Judit Büki, an eyelash stylist.",
        portfolioP4: "This is a full-stack website built in PHP with a MySQL database! In the 'Serviced Products' section, users can view the details and status of items serviced on this imaginary service website.",
        portfolioP5: "This is a classified ads website built in PHP with a MySQL database, where ads can be viewed without registration. After registering and logging in, users can post new ads and edit existing data.",
        portfolioP6: "This is an Angular project showcasing a sample musical instrument store website, deployed on Netlify App.",
        portfolioP7: "This is the website of my blues-rock band, Outlaw.",
        portfolioP8: "This is an XML API call from the Rick & Morty API.",
        portfolioP9: "This is a cigar rating website where you can upload your cigar reviews, deployed on Netlify App.",
        goToWebsite: "Go to the Website",
        goToGithub: "Go to Github Code",

        contactH2: "Lets work together",
        contactP: "Thank you for taking the time to review my portfolio. I am passionate about web development, and my goal is to contribute my skills as a member of a professional team while continuously growing and improving. If you are open to working together, I would be delighted to hear from you!",
        contactPhone: "Phone",
        contactAdress: "Adress",
        contactAdress2: "1041 Budapest, Hungary",
        contactMe: "Contact ",
        contactMeSpan: "Me!",
        input1Placeholder: "Full name",
        input2Placeholder: "Email",
        input3Placeholder: "Phone",
        input4Placeholder: "Email Subject",
        input5Placeholder: "Your message",
        inputButton: "Send me",

        successTitle: "Message sent successfully!",
        successText: "Thank you for your message, I will get back to you shortly!",
        errorTitle: "Something went wrong!",
        errorText: "There was an error sending your message.",
        loadingTitle: "Sending message...",
        loadingText: "Please wait...",
        sendingEmail: "Sending..."
    }
}

let navHome = document.getElementById('navHome');
let navService = document.getElementById('navService');
let navResume = document.getElementById('navResume');
let navPortfolio = document.getElementById('navPortfolio');
let navContact = document.getElementById('navContact');

let homeH1 = document.getElementById('homeH1');
let homeH2 = document.getElementById('homeH2');
let homeP1 = document.getElementById('homeP1');
let homeP2 = document.getElementById('homeP2');
let homeP3 = document.getElementById('homeP3');
let homeCV = document.getElementById('homeCV');

let serviceH2 = document.getElementById('serviceH2');
let service1H3 = document.getElementById('service1H3');
let service1p1 = document.getElementById('service1p1');
let service1p2 = document.getElementById('service1p2');
let service2H3 = document.getElementById('service2H3');
let service2p1 = document.getElementById('service2p1');
let service2p2 = document.getElementById('service2p2');
let service3H3 = document.getElementById('service3H3');
let service3p1 = document.getElementById('service3p1');
let service3p2 = document.getElementById('service3p2');

let resumeH2 = document.getElementById('resumeH2');
let resumeP = document.getElementById('resumeP');
let resumeButton1 = document.getElementById('resumeButton1');
let resumeButton2 = document.getElementById('resumeButton2');
let resumeButton3 = document.getElementById('resumeButton3');
let resumeButton4 = document.getElementById('resumeButton4');

let resumeExperienceH2 = document.getElementById('resumeExperienceH2');
let resumeExperienceP = document.getElementById('resumeExperienceP');

let resumeExperienceItem1P1 = document.getElementById('resumeExperienceItem1P1');
let resumeExperienceItem1H3 = document.getElementById('resumeExperienceItem1H3');
let resumeExperienceItem1P2 = document.getElementById('resumeExperienceItem1P2');
let resumeExperienceItem1P3 = document.getElementById('resumeExperienceItem1P3');

let resumeExperienceItem2P1 = document.getElementById('resumeExperienceItem2P1');
let resumeExperienceItem2H3 = document.getElementById('resumeExperienceItem2H3');
let resumeExperienceItem2P2 = document.getElementById('resumeExperienceItem2P2');
let resumeExperienceItem2P3 = document.getElementById('resumeExperienceItem2P3');

let resumeExperienceItem3P1 = document.getElementById('resumeExperienceItem3P1');
let resumeExperienceItem3H3 = document.getElementById('resumeExperienceItem3H3');
let resumeExperienceItem3P2 = document.getElementById('resumeExperienceItem3P2');
let resumeExperienceItem3P3 = document.getElementById('resumeExperienceItem3P3');

let resumeExperienceItem4P1 = document.getElementById('resumeExperienceItem4P1');
let resumeExperienceItem4H3 = document.getElementById('resumeExperienceItem4H3');
let resumeExperienceItem4P2 = document.getElementById('resumeExperienceItem4P2');
let resumeExperienceItem4P3 = document.getElementById('resumeExperienceItem4P3');

let resumeExperienceItem5P1 = document.getElementById('resumeExperienceItem5P1');
let resumeExperienceItem5H3 = document.getElementById('resumeExperienceItem5H3');
let resumeExperienceItem5P2 = document.getElementById('resumeExperienceItem5P2');
let resumeExperienceItem5P3 = document.getElementById('resumeExperienceItem5P3');

let resumeEducationH2 = document.getElementById('resumeEducationH2');
let resumeEducationP = document.getElementById('resumeEducationP');

let resumeEducationItem1P1 = document.getElementById('resumeEducationItem1P1');
let resumeEducationItem1H3 = document.getElementById('resumeEducationItem1H3');
let resumeEducationItem1P2 = document.getElementById('resumeEducationItem1P2');

let resumeEducationItem2P1 = document.getElementById('resumeEducationItem2P1');
let resumeEducationItem2H3 = document.getElementById('resumeEducationItem2H3');
let resumeEducationItem2P2 = document.getElementById('resumeEducationItem2P2');

let resumeEducationItem3P1 = document.getElementById('resumeEducationItem3P1');
let resumeEducationItem3H2 = document.getElementById('resumeEducationItem3H2');
let resumeEducationItem3P2 = document.getElementById('resumeEducationItem3P2');
let resumeEducationItem3P3 = document.getElementById('resumeEducationItem3P3');

let resumeSkillsH2 = document.getElementById('resumeSkillsH2');
let resumeSkillsP = document.getElementById('resumeSkillsP');

let resumeAboutP = document.getElementById('resumeAboutP');

let resumeAboutItemP1 = document.getElementById('resumeAboutItemP1');
let resumeAboutItemP2 = document.getElementById('resumeAboutItemP2');
let resumeAboutItemP3 = document.getElementById('resumeAboutItemP3');
let resumeAboutItemP4 = document.getElementById('resumeAboutItemP4');
let resumeAboutItemP5 = document.getElementById('resumeAboutItemP5');
let resumeAboutItemP6 = document.getElementById('resumeAboutItemP6');
let resumeAboutItemP7 = document.getElementById('resumeAboutItemP7');
let resumeAboutItemP8 = document.getElementById('resumeAboutItemP8');
let resumeAboutItemP9 = document.getElementById('resumeAboutItemP9');
let resumeAboutItemP10 = document.getElementById('resumeAboutItemP10');

let portfolioH2 = document.getElementById("portfolioH2");

let portfolio1 = document.getElementById("portfolio1");
let portfolio2 = document.getElementById("portfolio2");
let portfolio3 = document.getElementById("portfolio3");
let portfolio4 = document.getElementById("portfolio4");
let portfolio5 = document.getElementById("portfolio5");
let portfolio6 = document.getElementById("portfolio6");
let portfolio7 = document.getElementById("portfolio7");
let portfolio8 = document.getElementById("portfolio8");
let portfolio9 = document.getElementById("portfolio9");

let portfolioP1 = document.getElementById("portfolioP1");
let portfolioP2 = document.getElementById("portfolioP2");
let portfolioP3 = document.getElementById("portfolioP3");
let portfolioP4 = document.getElementById("portfolioP4");
let portfolioP5 = document.getElementById("portfolioP5");
let portfolioP6 = document.getElementById("portfolioP6");
let portfolioP7 = document.getElementById("portfolioP7");
let portfolioP8 = document.getElementById("portfolioP8");
let portfolioP9 = document.getElementById("portfolioP9");

let goToWebsiteTooltips = document.querySelectorAll(".goToWebsite");
let goToGithubTooltips = document.querySelectorAll(".goToGithub");

let contactH2 = document.getElementById("contactH2");
let contactP = document.getElementById("contactP");
let contactPhone = document.getElementById("contactPhone");
let contactAdress = document.getElementById("contactAdress");
let contactAdress2 = document.getElementById("contactAdress2");
let contactMe = document.getElementById("contactMe");
let inputButton = document.getElementById('inputButton');

const languageSelect = document.getElementById('languageSelect');

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        setLanguage(savedLanguage);
    } else {
        languageSelect.value = 'hu';
        setLanguage('hu');
    }

});

languageSelect.addEventListener('change', (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);

    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

});

const setLanguage = (language) => {
    const selectedTranslations = translations[language];
    setAnimatedText(selectedTranslations);

    // Navigációs elemek szövegének beállítása
    navHome.innerText = selectedTranslations.navHome;
    navService.innerText = selectedTranslations.navService;
    navResume.innerText = selectedTranslations.navResume;
    navPortfolio.innerText = selectedTranslations.navPortfolio;
    navContact.innerText = selectedTranslations.navContact;

    // Főoldali szövegek frissítése
    homeH1.innerText = selectedTranslations.homeH1;
    homeP1.innerText = selectedTranslations.homeP1;
    homeP2.innerText = selectedTranslations.homeP2;
    homeP3.innerText = selectedTranslations.homeP3;
    homeCV.innerText = selectedTranslations.homeCV;

    // Szolgáltatások szövegek beállítása

    const spanService = serviceH2.querySelector('span');
    serviceH2.firstChild.textContent = selectedTranslations.serviceH2.replace(' ' + selectedTranslations.serviceH2Span, '');
    if (spanService) {
        spanService.textContent = selectedTranslations.serviceH2Span;
    }

    service1H3.innerText = selectedTranslations.service1H3;
    service1p1.innerText = selectedTranslations.service1p1;
    service1p2.innerText = selectedTranslations.service1p2;
    service2H3.innerText = selectedTranslations.service2H3;
    service2p1.innerText = selectedTranslations.service2p1;
    service2p2.innerText = selectedTranslations.service2p2;
    service3H3.innerText = selectedTranslations.service3H3;
    service3p1.innerText = selectedTranslations.service3p1;
    service3p2.innerText = selectedTranslations.service3p2;

    resumeH2.innerText = selectedTranslations.resumeH2;
    resumeP.innerText = selectedTranslations.resumeP;

    resumeButton1.innerText = selectedTranslations.resumeButton1;
    resumeButton2.innerText = selectedTranslations.resumeButton2;
    resumeButton3.innerText = selectedTranslations.resumeButton3;
    resumeButton4.innerText = selectedTranslations.resumeButton4;

    resumeExperienceP.innerText = selectedTranslations.resumeExperienceP;

    resumeExperienceItem1P1.innerText = selectedTranslations.resumeExperienceItem1P1;
    resumeExperienceItem1H3.innerText = selectedTranslations.resumeExperienceItem1H3;
    resumeExperienceItem1P2.innerText = selectedTranslations.resumeExperienceItem1P2;
    resumeExperienceItem1P3.innerText = selectedTranslations.resumeExperienceItem1P3;

    resumeExperienceItem2P1.innerText = selectedTranslations.resumeExperienceItem2P1;
    resumeExperienceItem2H3.innerText = selectedTranslations.resumeExperienceItem2H3;
    resumeExperienceItem2P2.innerText = selectedTranslations.resumeExperienceItem2P2;
    resumeExperienceItem2P3.innerText = selectedTranslations.resumeExperienceItem2P3;

    resumeExperienceItem3P1.innerText = selectedTranslations.resumeExperienceItem3P1;
    resumeExperienceItem3H3.innerText = selectedTranslations.resumeExperienceItem3H3;
    resumeExperienceItem3P2.innerText = selectedTranslations.resumeExperienceItem3P2;
    resumeExperienceItem3P3.innerText = selectedTranslations.resumeExperienceItem3P3;

    resumeExperienceItem4P1.innerText = selectedTranslations.resumeExperienceItem4P1;
    resumeExperienceItem4H3.innerText = selectedTranslations.resumeExperienceItem4H3;
    resumeExperienceItem4P2.innerText = selectedTranslations.resumeExperienceItem4P2;
    resumeExperienceItem4P3.innerText = selectedTranslations.resumeExperienceItem4P3;

    resumeExperienceItem5P1.innerText = selectedTranslations.resumeExperienceItem5P1;
    resumeExperienceItem5H3.innerText = selectedTranslations.resumeExperienceItem5H3;
    resumeExperienceItem5P2.innerText = selectedTranslations.resumeExperienceItem5P2;
    resumeExperienceItem5P3.innerText = selectedTranslations.resumeExperienceItem5P3;

    resumeEducationP.innerText = selectedTranslations.resumeEducationP;
    resumeEducationItem1P1.innerText = selectedTranslations.resumeEducationItem1P1;
    resumeEducationItem1H3.innerText = selectedTranslations.resumeEducationItem1H3;
    resumeEducationItem1P2.innerText = selectedTranslations.resumeEducationItem1P2;

    resumeEducationItem2P1.innerText = selectedTranslations.resumeEducationItem2P1;
    resumeEducationItem2H3.innerText = selectedTranslations.resumeEducationItem2H3;
    resumeEducationItem2P2.innerText = selectedTranslations.resumeEducationItem2P2;

    resumeEducationItem3P1.innerText = selectedTranslations.resumeEducationItem3P1;
    resumeEducationItem3H3.innerText = selectedTranslations.resumeEducationItem3H3;
    resumeEducationItem3P2.innerText = selectedTranslations.resumeEducationItem3P2;
    resumeEducationItem3P3.innerText = selectedTranslations.resumeEducationItem3P3;

    resumeSkillsP.innerText = selectedTranslations.resumeSkillsP;

    resumeAboutP.innerText = selectedTranslations.resumeAboutP;

    // resumeExperienceH2 frissítése
    const resumeExperienceH2 = document.getElementById("resumeExperienceH2");
    const spanResumeExperience = resumeExperienceH2.querySelector('span');
    resumeExperienceH2.firstChild.textContent = selectedTranslations.resumeExperienceH2;
    if (spanResumeExperience) {
        spanResumeExperience.textContent = selectedTranslations.resumeExperienceH2Span;
    }

    // resumeEducationH2 frissítése
    const resumeEducationH2 = document.getElementById("resumeEducationH2");
    const spanResumeEducation = resumeEducationH2.querySelector('span');
    resumeEducationH2.firstChild.textContent = selectedTranslations.resumeEducationH2;
    if (spanResumeEducation) {
        spanResumeEducation.textContent = selectedTranslations.resumeEducationH2Span;
    }

    // resumeSkillsH2 frissítése
    const resumeSkillsH2 = document.getElementById("resumeSkillsH2");
    const spanResumeSkills = resumeSkillsH2.querySelector('span');
    resumeSkillsH2.firstChild.textContent = selectedTranslations.resumeSkillsH2;
    if (spanResumeSkills) {
        spanResumeSkills.textContent = selectedTranslations.resumeSkillsH2Span;
    }

    // resumeAboutH2 frissítése
    const resumeAboutH2 = document.getElementById("resumeAboutH2");
    const spanresumeAboutH2 = resumeAboutH2.querySelector('span');
    resumeAboutH2.firstChild.textContent = selectedTranslations.resumeAboutH2;
    if (spanresumeAboutH2) {
        spanresumeAboutH2.textContent = selectedTranslations.resumeAboutH2Span;
    }

    // Egyéb elemek frissítése
    const resumeAboutItems = [
        { id: "resumeAboutItemP1", text: selectedTranslations.resumeAboutItemP1, span: selectedTranslations.resumeAboutItemP1Span },
        { id: "resumeAboutItemP2", text: selectedTranslations.resumeAboutItemP2, span: selectedTranslations.resumeAboutItemP2Span },
        { id: "resumeAboutItemP3", text: selectedTranslations.resumeAboutItemP3, span: selectedTranslations.resumeAboutItemP3Span },
        { id: "resumeAboutItemP4", text: selectedTranslations.resumeAboutItemP4, span: selectedTranslations.resumeAboutItemP4Span },
        { id: "resumeAboutItemP5", text: selectedTranslations.resumeAboutItemP5, span: selectedTranslations.resumeAboutItemP5Span },
        { id: "resumeAboutItemP6", text: selectedTranslations.resumeAboutItemP6, span: selectedTranslations.resumeAboutItemP6Span },
        { id: "resumeAboutItemP7", text: selectedTranslations.resumeAboutItemP7, span: selectedTranslations.resumeAboutItemP7Span },
        { id: "resumeAboutItemP8", text: selectedTranslations.resumeAboutItemP8, span: selectedTranslations.resumeAboutItemP8Span },
        { id: "resumeAboutItemP9", text: selectedTranslations.resumeAboutItemP9, span: selectedTranslations.resumeAboutItemP9Span },
        { id: "resumeAboutItemP10", text: selectedTranslations.resumeAboutItemP10, span: selectedTranslations.resumeAboutItemP10Span },
    ];

    resumeAboutItems.forEach(item => {
        const resumeItem = document.getElementById(item.id);
        if (resumeItem) {

            const span = resumeItem.querySelector('span');
            if (span) {
                span.textContent = item.span;
            }

            const baseText = item.text;
            resumeItem.firstChild.textContent = baseText + " ";
        }
    })

    const portfolioH2 = document.getElementById("portfolioH2");
    const spanportfolioH2 = portfolioH2.querySelector('span');
    portfolioH2.firstChild.textContent = selectedTranslations.portfolioH2;
    if (spanportfolioH2) {
        spanportfolioH2.textContent = selectedTranslations.portfolioH2Span;
    }

    portfolio1.innerText = selectedTranslations.portfolio1;
    portfolio2.innerText = selectedTranslations.portfolio2;
    portfolio3.innerText = selectedTranslations.portfolio3;
    portfolio4.innerText = selectedTranslations.portfolio4;
    portfolio5.innerText = selectedTranslations.portfolio5;
    portfolio6.innerText = selectedTranslations.portfolio6;
    portfolio7.innerText = selectedTranslations.portfolio7;
    portfolio8.innerText = selectedTranslations.portfolio8;
    portfolio9.innerText = selectedTranslations.portfolio9;

    portfolioP1.innerText = selectedTranslations.portfolioP1;
    portfolioP2.innerText = selectedTranslations.portfolioP2;
    portfolioP3.innerText = selectedTranslations.portfolioP3;
    portfolioP4.innerText = selectedTranslations.portfolioP4;
    portfolioP5.innerText = selectedTranslations.portfolioP5;
    portfolioP6.innerText = selectedTranslations.portfolioP6;
    portfolioP7.innerText = selectedTranslations.portfolioP7;
    portfolioP8.innerText = selectedTranslations.portfolioP8;
    portfolioP9.innerText = selectedTranslations.portfolioP9;

    goToWebsiteTooltips.forEach(tooltip => {
        tooltip.innerText = selectedTranslations.goToWebsite;
    });

    goToGithubTooltips.forEach(tooltip => {
        tooltip.innerText = selectedTranslations.goToGithub;
    });

    contactH2.innerText = selectedTranslations.contactH2;
    contactP.innerText = selectedTranslations.contactP;
    contactPhone.innerText = selectedTranslations.contactPhone;
    contactAdress.innerText = selectedTranslations.contactAdress;
    contactAdress2.innerText = selectedTranslations.contactAdress2;
    inputButton.innerText = selectedTranslations.inputButton;

    const contactMe = document.getElementById("contactMe");
    const spancontactMe = contactMe.querySelector('span');
    contactMe.firstChild.textContent = selectedTranslations.contactMe;
    if (spancontactMe) {
        spancontactMe.textContent = selectedTranslations.contactMeSpan;
    }

    document.querySelector(".input1Placeholder").placeholder = selectedTranslations.input1Placeholder;
    document.querySelector(".input2Placeholder").placeholder = selectedTranslations.input2Placeholder;
    document.querySelector(".input3Placeholder").placeholder = selectedTranslations.input3Placeholder;
    document.querySelector(".input4Placeholder").placeholder = selectedTranslations.input4Placeholder;
    document.querySelector(".input5Placeholder").placeholder = selectedTranslations.input5Placeholder;

    homeCV.href = language === "hu" ? "assets/Németh_Gábor_Webfejlesztő_CV.pdf" : "assets/Gabor_Nemeth_Web_developer_CV.pdf";
};

const setAnimatedText = (selectedTranslations) => {
    const spanElements = homeH2.querySelectorAll('span');
    let animationDelay = 0;  // Kezdeti animáció késleltetés

    selectedTranslations.spans.forEach((spanData, idx) => {
        if (spanElements[idx]) {
            const spanElement = spanElements[idx];

            // Kezdjük el az animációt, miután az előző befejeződött
            setTimeout(() => {
                spanElement.setAttribute('data-text', spanData.text);
                spanElement.innerText = spanData.text;
                spanElement.style.setProperty('--i', spanData.styleIndex);

                // Elindítjuk az animációt a következő szöveggel
                spanElement.classList.remove('animated');
                spanElement.offsetHeight;  // Triggerelni a reflow-t, hogy az animáció újrainduljon
                spanElement.classList.add('animated');
            }, animationDelay);

            // Módosítsuk a késleltetést, hogy a következő animációk is megfelelően szinkronizálódjanak
            animationDelay += 500;
        }
    });
};

function Sendmail(event) {
    event.preventDefault();

    let params = {
        form_name: document.getElementById("form_name").value,
        "input-email": document.getElementById("input-email").value,
        "input-phone": document.getElementById("input-phone").value,
        "input-subject": document.getElementById("input-subject").value,
        "input-text": document.getElementById("input-text").value
    };

    // Nyelv választás (pl. magyar vagy angol)
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'hu'; // alapértelmezett nyelv 'hu'

    // A nyelvi szövegek beállítása
    const selectedTranslations = translations[selectedLanguage];

    const submitButton = document.getElementById("inputButton");
    submitButton.disabled = true;
    submitButton.innerHTML = selectedTranslations.sendingEmail || "Küldés...",
        submitButton.style.background = "transparent";
    submitButton.style.color = "var(--main-color)";
    submitButton.style.boxShadow = "none";

    // Most a `send-email.php` API-t hívjuk meg!
    fetch("send-email.php", {
        method: "POST",  // A helyes HTTP kérés típus
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)  // Az adatokat JSON formátumban küldjük
    })
        .then(response => {
            console.log("API válasz:", response); // A válasz logolása
            return response.json();  // Válasz JSON-ra konvertálása
        })
        .then(data => {
            console.log("API válasz JSON:", data);  // A teljes JSON válasz logolása
            if (data.success) {
                Swal.fire({
                    title: selectedTranslations.successTitle || "Sikeres üzenetküldés!",
                    text: selectedTranslations.successText || "Köszönöm levelét, hamarosan felveszem a kapcsolatot Önnel!",
                    icon: "success",
                    confirmButtonText: selectedTranslations.confirmButtonText || "OK"
                }).then(() => {
                    location.reload();
                });
            } else {
                Swal.fire({
                    title: selectedTranslations.errorTitle || "Hiba történt!",
                    text: selectedTranslations.errorText || "Nem sikerült elküldeni az üzenetet.",
                    icon: "error",
                    confirmButtonText: selectedTranslations.confirmButtonText || "OK"
                });
            }
        })
        .catch(error => {
            console.error("Hálózati hiba részletei:", error); // A hiba részletes logolása
            Swal.fire({
                title: "Hálózati hiba!",
                text: "Nem sikerült kapcsolatot létesíteni a szerverrel.",
                icon: "error",
                confirmButtonText: "OK"
            });
        });

    console.log(params);
}

// Az űrlap eseménykezelőjének hozzáadása
document.getElementById("contact-form").addEventListener("submit", Sendmail);

