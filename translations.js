/**
 * Translation dictionary for the site.
 * Each key corresponds to a data-i18n attribute in index.html.
 * Loaded as a plain script before i18n.js, exposes window.translations.
 */
const translations = {
  hu: {
    navHome: "Főoldal",
    navService: "Szolgáltatások",
    navResume: "Magamról",
    navPortfolio: "Portfolió",
    navContact: "Kapcsolat",

    homeH1: "Németh Gábor",
    homeH2: "Junior",
    spans: [
      { text: "Webfejlesztő", styleIndex: 4 },
      { text: "Front-end fejlesztő", styleIndex: 3 },
      { text: "Backend fejlesztő", styleIndex: 2 },
      { text: "Fullstack fejlesztő", styleIndex: 1 },
    ],
    homeP1: "Webfejlesztői munkát keresek.",
    homeP2:
      "Közel 1 év vállalati és másfél év szabadúszai tapasztalattal rendelkezem.",
    homeP3:
      "Olyan pozíciót keresek, ahol technikai tudásomat kamatoztathatom és tovább fejlődhetek.",
    homeCV: "Magyar nyelvű CV letöltése",

    serviceH2: "",
    serviceH2Span: "Szolgáltatások",
    service1H3: "Front-end fejlesztés",
    service1p1:
      "A front-end fejlesztés során modern, reszponzív és esztétikusan megtervezett felületeket hozok létre, amelyek nemcsak jól mutatnak, hanem kiváló felhasználói élményt is biztosítanak. Fontosnak tartom, hogy az általam fejlesztett alkalmazások minden eszközön - legyen az telefon, tablet vagy asztali számítógép - gördülékenyen és gyorsan működjenek.",
    service1p2:
      "Az alábbi technológiákat használom: HTML5, CSS, JavaScript, TypeScript, React",
    service2H3: "Backend fejlesztés",
    service2p1:
      "A hatékony webes alkalmazások szívét a stabil és megbízható szerveroldali rendszer alkotja. A back-end fejlesztés során az adatkezelési és szerveroldali logikára fókuszálok, így az alkalmazások zökkenőmentesen kommunikálnak a front-end réteggel.",
    service2p2:
      "A következő technológiákkal dolgozom: PHP és MySQL adatbáziskezelő",
    service3H3: "Fullstack fejlesztés",
    service3p1:
      "A front-end és back-end fejlesztés kombinációjával teljes körű webes megoldásokat kínálok. A Fullstack fejlesztés során nemcsak a felhasználói felület megtervezésére és fejlesztésére fókuszálok, hanem a háttérrendszer kidolgozására is, hogy az alkalmazás minden szempontból tökéletesen működjön.",
    service3p2:
      "A két terület összefonódásának köszönhetően olyan rendszereket hozok létre, amelyek zökkenőmentesen működnek mind a felhasználói, mind az adminisztrációs oldalon. Könnyen bővíthetők és testreszabhatók az ügyféligények szerint. Biztosítják az adatok biztonságos kezelését és tárolását.",

    resumeH2: "Miért engem válassz?",
    resumeP:
      "Több mint egy évtizedes irodai munkatapasztalattal, közel 1 év vállalati és másfél éves webfejlesztői gyakorlattal rendelkezem. Szenvedéllyel és elkötelezettséggel dolgozom, mindig a minőséget és a hatékony csapatmunkát tartom szem előtt.",
    resumeButton1: "Munkahelyeim",
    resumeButton2: "Képzések",
    resumeButton3: "Technológiák",
    resumeButton4: "Rólam",

    resumeExperienceH2: "",
    resumeExperienceH2Span: "Munkahelyeim",
    resumeExperienceP:
      "Az elmúlt 10 évben irodai környezetben dolgoztam, ahol precizitás, hatékony időgazdálkodás és analitikus gondolkodás vált alapvető készségeimmé. Közel 1 év vállalati tapasztalatot szereztem két projektben: a Bosch-nál és az Avorado Kft.-nél (Packli.hu). Most olyan lehetőséget keresek, ahol hosszú távon csapatban dolgozhatok és kamatoztathatom tudásomat.",

    resumeExperienceItem0P1: "2025. november - Jelenleg",
    resumeExperienceItem0H3: "Fullstack fejlesztő",
    resumeExperienceItem0P2: "Avorado Kft. - Packli.hu",
    resumeExperienceItem0P3:
      "Futárlogisztikai SaaS platform fejlesztése (Laravel + React). Futárszolgáltató API-integrációk, webshop platformok csatlakoztatása.",

    resumeExperienceItem1P1: "2025. augusztus - október",
    resumeExperienceItem1H3: "Fullstack fejlesztő",
    resumeExperienceItem1P2: "Robert Bosch Elektronika Kft.",
    resumeExperienceItem1P3:
      "3D gyártási monitoring rendszer fejlesztése 100+ gép valós idejű vizualizációjával (React Three Fiber + Laravel + MySQL) REST API",

    resumeExperienceItem2P1: "2024. február - 2025. október",
    resumeExperienceItem2H3: "Webfejlesztő",
    resumeExperienceItem2P2: "Szabadúszó",
    resumeExperienceItem2P3: "Egyedi reszponzív webalkalmazások fejlesztése.",

    resumeExperienceItem3P1: "2018 augusztus - 2025 július",
    resumeExperienceItem3H3: "Iratkezelő",
    resumeExperienceItem3P2: "Közbeszerzés és Ellátási Főigazgatóság",
    resumeExperienceItem3P3: "Iratkezelés, irattárolás, adminisztráció",

    resumeExperienceItem4P1: "2014 május - 2018 július",
    resumeExperienceItem4H3: "Irattáros",
    resumeExperienceItem4P2: "Iron Mountain Magyarország Kft.",
    resumeExperienceItem4P3: "Irattárolás, adminisztráció",

    resumeExperienceItem5P1: "2011 július - 2014 április",
    resumeExperienceItem5H3: "Webshop adminisztrátor",
    resumeExperienceItem5P2: "Hangszerker Kft.",
    resumeExperienceItem5P3: "Webshop kezelés",

    resumeEducationH2: "",
    resumeEducationH2Span: "Képzéseim",
    resumeEducationP:
      "A Ruander Oktatási Központban kezdtem meg webfejlesztői tanulmányaimat, ahol Frontend Fejlesztést tanultam és sikeres vizsgát tettem. Ennek eredményeként államilag elismert Junior Frontend OKJ bizonyítványt szereztem. Ezt követően mélyebb ismereteket szereztem a PHP és SQL területén, és elvégeztem a Fullstack Webfejlesztő képzést. A megszerzett tudást két vállalati projektben is kamatoztattam: a Bosch-nál és az Avorado Kft.-nél (Packli.hu), miközben folyamatosan bővítem ismereteimet Udemy képzések és önálló projektek segítségével.",
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
    resumeSkillsP:
      "Az alábbi technológiákban rendelkezem tapasztalattal, de nagyon szívesen tanulok új technológiákat.",

    resumeAboutH2: "",
    resumeAboutH2Span: "Magamról",
    resumeAboutP:
      "Budapesten élek, ahol a kreativitás és a fejlődés iránti vágy vezérel a mindennapokban. Gyorsan és lelkesen tanulok, célom, hogy teljes értékű tagja legyek egy profi fejlesztőcsapatnak. Rugalmasságom és analitikus gondolkodásom segít, hogy komplex problémákra is hatékony megoldásokat találjak. Emellett nyitott vagyok új technológiák megismerésére, hiszen hiszek abban, hogy az IT-világ folyamatosan fejlődik, és lépést kell tartani vele.",

    resumeAboutItemP1: "Név: ",
    resumeAboutItemP1Span: "Németh Gábor",
    resumeAboutItemP2: "Nem: ",
    resumeAboutItemP2Span: "Férfi",
    resumeAboutItemP3: "Kor: ",
    resumeAboutItemP3Span: new Date().getFullYear() - 1990 + "",
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
    portfolio1: "ShopList - Bevásárlólista alkalmazás",
    portfolio2: "PHP Szivarpontozó oldal",
    portfolio3: "Lash Szempilla stylist oldal",
    portfolio4: "React-Tailwind CSS Business Website",
    portfolio7: "Angular Hangszerbolt Oldal",
    portfolio8: "Az Outlaw zenekar honlapja",
    portfolio9: "Rick & Morty API",
    portfolio10: "TypeScript Szivarpontozó oldal",
    portfolio11: "A szoba 50 árnyalata",
    portfolioP1:
      "Ez egy Laravel + React + MySQL alapú bevásárlólista alkalmazás, regisztrációval, bejelentkezéssel, email-megerősítéssel és drag-and-drop listakezeléssel.",
    portfolioP2:
      "Ez egy Szivar pontozó vélemény oldal, ami PHP-ban lett megírva, CSV adatbázist használ.",
    portfolioP3: "Szempilla stylist oldal Bootstrap keretrendszerrel",
    portfolioP4: "Egy React Vite project business oldal Tailwind CSS-el",
    portfolioP7:
      "Ez egy Angular projekt ami bemutat egy hangszerbolt minta oldalt Netlify App-ra feltöltve.",
    portfolioP8: "Ez az Outlaw blues-rock zenekarom honlapja.",
    portfolioP9: "Ez a Rick & Morty API oldalról történő XML API hívás.",
    portfolioP10:
      "Ez egy szivar pontozó oldal, ahol feltöltheted szivarjaid értékeléseit, Netlify App-ra feltöltve.",
    portfolioP11:
      "Lakásfelújítással foglalkozó oldal magyar és spanyol nyelven.",
    goToWebsite: "Irány a honlapra",
    goToGithub: "Irány a kódhoz",

    contactH2: "Dolgozzunk együtt",
    contactP:
      "Köszönöm, hogy időt szántál portfólióm megtekintésére. Szenvedélyem a webfejlesztés, és célom, hogy egy professzionális csapat tagjaként kamatoztathassam tudásom, miközben folyamatosan fejlődhetek. Ha nyitott vagy arra, hogy együtt dolgozzunk, örömmel venném, ha felvennéd velem a kapcsolatot!",
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
    sendingEmail: "Küldés...",
  },
  en: {
    navHome: "Home",
    navService: "Service",
    navResume: "Resume",
    navPortfolio: "Portfolio",
    navContact: "Contact",

    homeH1: "Gabor Nemeth",
    homeH2: "Junior",
    spans: [
      { text: "Web Developer", styleIndex: 4 },
      { text: "Front-end Developer", styleIndex: 3 },
      { text: "Back-end Developer", styleIndex: 2 },
      { text: "Fullstack Developer", styleIndex: 1 },
    ],
    homeP1: "I am looking for a job as a web developer.",
    homeP2:
      "I have nearly 1 year of corporate experience and one and a half years of freelance experience.",
    homeP3:
      "Looking for an opportunity to leverage my technical skills and continue developing professionally.",
    homeCV: "Download English CV",

    serviceH2: "My ",
    serviceH2Span: "Services",
    service1H3: "Front-end Development",
    service1p1:
      "In front-end development, I create modern, responsive, and aesthetically pleasing interfaces that not only look great but also provide an excellent user experience. I ensure that the applications I develop run smoothly and quickly on all devices—whether it is a phone, tablet, or desktop computer.",
    service1p2:
      "The technologies I use include: HTML5, CSS, JavaScript, TypeScript, React.",
    service2H3: "Backend Development",
    service2p1:
      "The heart of effective web applications is a stable and reliable server-side system. In back-end development, I focus on data management and server-side logic, ensuring that applications communicate seamlessly with the front-end layer.",
    service2p2:
      "The technologies I work with include: PHP and MySQL database management.",
    service3H3: "Fullstack Development",
    service3p1:
      "By combining front-end and back-end development, I offer comprehensive web solutions. Fullstack development allows me to focus not only on designing and developing user interfaces but also on building robust backend systems, ensuring the application works perfectly in all aspects.",
    service3p2:
      "The integration of these two areas enables me to create systems that run seamlessly on both the user and administrative sides. They are easy to expand and customize according to client requirements, ensuring secure data handling and storage.",

    resumeH2: "Why Choose Me?",
    resumeP:
      "With over a decade of office work experience, nearly 1 year of corporate project experience, and one and a half years of web development practice, I bring dedication and a commitment to quality and effective teamwork.",
    resumeButton1: "Experience",
    resumeButton2: "Education",
    resumeButton3: "Skills",
    resumeButton4: "About",

    resumeExperienceH2: "My ",
    resumeExperienceH2Span: "Experience",
    resumeExperienceP:
      "During my 10 years in office environments, I developed precision, efficient time management, and analytical thinking as core skills. I have gained nearly 1 year of corporate experience across two projects: at Bosch and at Avorado Kft. (Packli.hu). I'm now seeking an opportunity where I can work with a team long-term and leverage my skills.",

    resumeExperienceItem0P1: "November 2025 - Present",
    resumeExperienceItem0H3: "Fullstack Developer",
    resumeExperienceItem0P2: "Avorado Kft. - Packli.hu",
    resumeExperienceItem0P3:
      "Development of a parcel logistics SaaS platform (Laravel + React). Courier API integrations, connecting e-commerce platforms.",

    resumeExperienceItem1P1: "August - October 2025",
    resumeExperienceItem1H3: "Fullstack Developer",
    resumeExperienceItem1P2: "Robert Bosch Elektronika Kft.",
    resumeExperienceItem1P3:
      "3D production monitoring system with real-time visualization of 100+ machines (React Three Fiber, Laravel, MySQL) REST API",

    resumeExperienceItem2P1: "February 2024 - October 2025",
    resumeExperienceItem2H3: "Web Developer",
    resumeExperienceItem2P2: "Freelancer",
    resumeExperienceItem2P3:
      "Development of custom responsive web applications.",

    resumeExperienceItem3P1: "August 2018 - July 2025",
    resumeExperienceItem3H3: "Document Manager",
    resumeExperienceItem3P2: "Közbeszerzési és Ellátási Főigazgatóság",
    resumeExperienceItem3P3: "Document management, archiving, administration",

    resumeExperienceItem4P1: "May 2014 - July 2018",
    resumeExperienceItem4H3: "Archivist",
    resumeExperienceItem4P2: "Iron Mountain Hungary Ltd.",
    resumeExperienceItem4P3: "Document storage, administration",

    resumeExperienceItem5P1: "July 2011 - April 2014",
    resumeExperienceItem5H3: "Webshop Administrator",
    resumeExperienceItem5P2: "Hangszerker Ltd.",
    resumeExperienceItem5P3: "Webshop management",

    resumeEducationH2: "My ",
    resumeEducationH2Span: "Education",
    resumeEducationP:
      "I began my web development studies at Ruander Education Center, where I learned Frontend Development and earned a state-recognized Junior Frontend certificate. I then deepened my knowledge in PHP and SQL, completing Fullstack Web Developer training. I have applied my skills in two corporate projects: at Bosch and at Avorado Kft. (Packli.hu), while continuously expanding my knowledge through Udemy courses and personal projects.",
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
    resumeSkillsP:
      "I have experience with the following technologies and am always eager to learn new ones.",

    resumeAboutH2: "About ",
    resumeAboutH2Span: "Me",
    resumeAboutP:
      "I live in Budapest, driven by creativity and a desire for growth in my daily life. I learn quickly and enthusiastically, aiming to become a full-fledged member of a professional development team. My flexibility and analytical thinking help me find effective solutions to complex problems. Additionally, I am open to exploring new technologies because I believe that staying up-to-date is key in the ever-evolving IT world.",

    resumeAboutItemP1: "Name: ",
    resumeAboutItemP1Span: "Gabor Németh",
    resumeAboutItemP2: "Gender: ",
    resumeAboutItemP2Span: "Male",
    resumeAboutItemP3: "Age: ",
    resumeAboutItemP3Span: new Date().getFullYear() - 1990 + "",
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
    portfolio1: "ShopList - Smart Shopping List App",
    portfolio2: "PHP Cigar Rating Website",
    portfolio3: "Lash - Eyelash Stylist Website",
    portfolio4: "React-Tailwind CSS Business Website",
    portfolio7: "Angular Musical Instrument Store Website",
    portfolio8: "The Outlaw Band's Website",
    portfolio9: "Rick & Morty API",
    portfolio10: "TypeScript Cigar Rating Website",
    portfolio11: "50 Sombras De Habitaciones",
    portfolioP1:
      "A Laravel + React + MySQL shopping list application with registration, login, email verification, and drag-and-drop list management.",
    portfolioP2:
      "This is a cigar rating and review website built in PHP using a CSV database.",
    portfolioP3: "Eye Lash stylist website with Bootstrap framework",
    portfolioP4: "A React Vite business website with Tailwind CSS",
    portfolioP7:
      "This is an Angular project showcasing a sample musical instrument store website, deployed on Netlify App.",
    portfolioP8: "This is the website of my blues-rock band, Outlaw.",
    portfolioP9: "This is an XML API call from the Rick & Morty API.",
    portfolioP10:
      "This is a cigar rating website where you can upload your cigar reviews, deployed on Netlify App.",
    portfolioP11: "A home renovation website in Hungarian and Spanish.",
    goToWebsite: "Go to the Website",
    goToGithub: "Go to Github Code",

    contactH2: "Lets work together",
    contactP:
      "Thank you for taking the time to review my portfolio. I am passionate about web development, and my goal is to contribute my skills as a member of a professional team while continuously growing and improving. If you are open to working together, I would be delighted to hear from you!",
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
    errorTitle: "Something went wrong!",
    errorText: "There was an error sending your message.",
    loadingTitle: "Sending message...",
    loadingText: "Please wait...",
    sendingEmail: "Sending...",
    successText: "Thank you for your message, I will get back to you shortly!",
  },
};