interface EventGalleryItem {
  type: 'image' | 'video';
  url: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  completed: boolean;
  venue: string;
  dateAndTime: string;
  registerUrl: string;
  gallery: EventGalleryItem[];
  isGallery: boolean;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: "IEEE Extreme 17.0 INFOSESSION",
    description: "the clock is ticking Get ready to join our info session for IEEEXTREME 17.0 presented by our event ambassador Oumayma Fazzeni who would let you know more about the annual global competition programming. mark your calendars and stay tuned!",
    imageUrl: "https://i.ibb.co/7t8fQZmg/475842928-1301607120944886-1602167805526417638-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "9TH OCT 2023",
    registerUrl: "",
    gallery: [
      
    ],
    isGallery: false
  },
  {
    id: 2,
    title: "Introduction To Problem Solving Workshop",
    description: "we're thrilled to invite you to a learning workshop session presented by our trainer Mr. Raouf Ghrissi . He will take us on a journey to learn more about competitive programming to expand our coding skills and gain valuable insights.",
    imageUrl: "https://i.ibb.co/s9vWQDnh/475870427-1302001717572093-8871392555162234622-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "17TH OCT 2023",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 3,
    title: "IEEE Extreme 17.0 ",
    description: "The amazing energy, creativity, entertaining games, team building , and technical proficiency on exhibit at our hackathon are captured in the pictures below. ",
    imageUrl: "https://i.ibb.co/Cs2z4wqb/469755615-122205676166033978-8088185581714844160-n.jpg",
    completed: true,
    venue: "ISSATM",
    dateAndTime: "1ST NOV 2023",
    registerUrl: "",
    gallery: [
     
    ],
    isGallery: true
  },
   {
    id: 4,
    title: "Happy New Year 2024",
    description: "Dear community , IEEE CS ISSATM SBC wishes you a Happy New Year! 🚀 Here's to a year of epic growth and lasting memories…",
    imageUrl: "https://i.ibb.co/C576QfPj/471308087-122207778236033978-419388823192420368-n.jpg",
    completed: true,
    venue: "Online",
    dateAndTime: "1ST JAN 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 5,
    title: "UI/UX Design Training",
    description: "Dive into the world of 𝐔𝐈/𝐔𝐗 𝐝𝐞𝐬𝐢𝐠𝐧 with our trainer, 𝐉𝐚𝐬𝐬𝐞𝐦 𝐒𝐠𝐡𝐚𝐢𝐞𝐫. Gain invaluable insights",
    imageUrl: "https://i.ibb.co/zTNKrr2L/473317566-122210694728033978-1456769166138533440-n.jpg",
    completed: true,
    venue: "ISSATM",
    dateAndTime: "3RD FEB 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 6,
    title: "Web Developement Workshop",
    description: "Dive into the world of web development 💻 with our previous workshop",
    imageUrl: "https://i.ibb.co/Mk7QYYxS/473414061-122210704034033978-4559278612158010307-n.jpg",
    completed: true,
    venue: "SunSet Coffee,Mateur",
    dateAndTime: "8TH FEB 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: true
  },
  {
    id: 7,
    title: "Introduction To AI Training",
    description: "IEEE CS ISSATM SBC presents an online training session about an introduction to AI presented by our Trainer Hamza Magdy, an AI student.",
    imageUrl: "https://i.ibb.co/vxdRLM6G/473333285-122210880350033978-6235100057285451991-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "1ST MAR 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 8,
    title: "TRC INFOSESSION",
    description: "We are glad to invite you this Friday (8th March) at 9:00PM to our online info session for the TRC event.",
    imageUrl: "https://i.ibb.co/s9RQcmPQ/473638107-122210888588033978-4043483439782034179-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "8TH MAR 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 9,
    title: "Choufli Code 1.0",
    description: "Organized by the IEEE CS ISSATM SBC.... Dive headfirst into a universe of limitless potential at the Choufli Code Hackathon – with a theme taken from the most famous comedy show EVER – a breathtaking showcase of individual brilliance and collective ingenuity.",
    imageUrl: "https://i.ibb.co/zTpbthXz/473169943-122210727434033978-4337667465525626989-n.jpg",
    completed: true,
    venue: "ISSATM Amphi",
    dateAndTime: "28TH FEB 2024",
    registerUrl: "",
    gallery: [
    ],
    isGallery: true
  },
  {
    id: 10,
    title: "Bizerte Tcodi 1.0",
    description: "BIZERTE TCODI is a problem-solving hackathon organized by three IEEE branches: IEEE ISET Bizerte, IEEE ENIB, and IEEE ISSATM.",
    imageUrl: "https://i.ibb.co/dskFkkfM/434396316-1769285730240893-6600856576318328781-n.jpg",
    completed: true,
    venue: "ENIB",
    dateAndTime: "25TH MAY 2024",
    registerUrl: "",
    gallery: [
     
    ],
    isGallery: true
  },
  {
    id: 11,
    title: "TechX INFOSESSION",
    description: "Wondering what TechX is all about? Join us for an enlightening info session and dive into the world of IEEE CS TechX ENICarthage.",
    imageUrl: "https://i.ibb.co/fR9Lky3/475067483-122212654340033978-2995279688605041785-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "11TH AUG 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 12,
    title: "Problem Solving Workshop",
    description: "Ready to embark on an Interstellar journey through the coding cosmos? Join us for a Problem Solving Workshop led by Aziz Jaouani, Former IEEE Esprit CS SBC Chairman and CS TAM Chairman.",
    imageUrl: "https://i.ibb.co/7Jq82Y1q/475269584-122213355170033978-8706298794441621293-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "9TH OCT 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 13,
    title: "IEEE Extreme 18.0 INFOSESSION",
    description: "📣ATTENTION EVERYONE 📣 We are glad to invite you TOMORROW at 9:00PM to our online info session for IEEEXtreme 18.0",
    imageUrl: "https://i.ibb.co/bgGjQbQm/475776466-122213370764033978-7099438561260635613-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "11TH OCT 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 14,
    title: "CSTAM INFOSESSION",
    description: "Ready to take the next step in your journey? Join us for an exclusive info session where you’ll get all the details on our upcoming event CSTAM! ",
    imageUrl: "https://i.ibb.co/gMqqQJnN/475739404-122213505644033978-1725205624467821048-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "28TH OCT 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 15,
    title: "CyberSecurity Introduction",
    description: "IEEE CS ISSATM SBC presents an online training session about CyberSecurity Basics Basics presented by our trainer Khalil Jaouani, Cybersecuity Analyst.",
    imageUrl: "https://i.ibb.co/7x2H87Gt/475507849-122213990396033978-1881599285530229459-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "30TH NOV 2024",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 16,
    title: "Code Her Ways INFOSESSION",
    description: "Ready to embark on an exciting journey with code her ways 3.0 ? Join us for an exclusive info-session on February 8th at 8 PM, where all your questions will be answered.",
    imageUrl: "https://i.ibb.co/23YHn8G2/482254952-122219684714033978-8593798961115508606-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "8TH FEB 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 17,
    title: "Choufli Code 2.0 INFOSESSION",
    description: "Ready to unlock the secrets of coding with Choufli Code? 🔥 Join us for an exclusive info session on February 16, 2025, at 8 PM.",
    imageUrl: "https://i.ibb.co/PZtvVqYy/479549876-122215932656033978-6755629932712438818-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "16TH FEB 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 18,
    title: "Introduction to JAVA Workshop",
    description: "Master Java . The IEEE CS ISSATM SBC is hosting an exclusive Java workshop to help you build a strong foundation in programming and software development.",
    imageUrl: "https://i.ibb.co/231vJVsf/480511278-122216533220033978-8009999261634862178-n.jpg",
    completed: true,
    venue: "ISSATM Amphi",
    dateAndTime: "20TH FEB 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: true
  },
  {
    id: 19,
    title: "Choufli Code 2.0",
    description: "Organized by the IEEE CS ISSATM SBC.... Dive headfirst into a universe of limitless potential at the Choufli Code Hackathon – with a theme taken from the most famous comedy show EVER – a breathtaking showcase of individual brilliance and collective ingenuity.",
    imageUrl: "https://i.ibb.co/zTpbthXz/473169943-122210727434033978-4337667465525626989-n.jpg",
    completed: true,
    venue: "Centre Culturel Ben Arous",
    dateAndTime: "28TH FEB 2025",
    registerUrl: "",
    gallery: [
    
    ],
    isGallery: true
  },
  {
    id: 20,
    title: "Master JavaScript & MERN Stack Web Development",
    description: "Join our MERN Stack Workshop Part 2 and learn to build full-stack apps with MongoDB, Express.js, React, and Node.js.",
    imageUrl: "https://i.ibb.co/bjrPZN5D/483506881-122219420852033978-4607272215023735587-n.jpg",
    completed: true,
    venue: "ISSATM Amphi",
    dateAndTime: "8TH MAR 2025",
    registerUrl: "",
    gallery: [
  
    ],
    isGallery: true
  },
  {
    id: 21,
    title: "Hack to the Future INFOSESSION",
    description: "Curious about Hack to the Future? 🔥 Join us for an exclusive Info Session where our ambassadors will guide you through everything you need to know!",
    imageUrl: "https://i.ibb.co/39NMn1wS/486776448-122223141638033978-8049846906619317931-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "29TH MAR 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 22,
    title: "EID MUBARAK",
    description: "IEEE CS ISSATM SBC extends its warmest wishes for a joyous and blessed Eid Mubarak! May this occasion bring peace, happiness, and prosperity to you and your loved ones.🌙✨",
    imageUrl: "https://i.ibb.co/bgcK9v08/486201131-122223671600033978-3729077508586812758-n.jpg",
    completed: true,
    venue: "Online",
    dateAndTime: "31TH MAR 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 23,
    title: "Hello World Gamse 5.0 INFOSESSION",
    description: "Join us for the Hello World 5.0 Info Session! 🌐 Hosted by Ranim Hmaidi from IEEE CS ISSATM SBC and Mohamed Charfi from IEEE ISGIS SB",
    imageUrl: "https://i.ibb.co/TMW4sLdj/489752899-122225945180033978-6948469370823252103-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "14TH APR 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 24,
    title: "Building a ChatBot Using Rag : From Retrieval To Generation",
    description: "Build Your First Chatbot! 💬 Join us this Wednesday, April 16th at 2PM in ISSATM for a hands-on workshop that brings AI to life!",
    imageUrl: "https://i.ibb.co/rKPzH8Mt/486766179-122226139412033978-9213129784976940705-n.jpg",
    completed: true,
    venue: "ISSATM Amphi",
    dateAndTime: "16TH APR 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 25,
    title: "Code It Up 5.0 INFOSESSION",
    description: " Info Session: Code It Up 5.0",
    imageUrl: "https://i.ibb.co/kgnqb8VX/490405706-122226958322033978-2287263890291022004-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "20TH APR 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 26,
    title: "Artificial Intelligence National Summit INFOSESSION",
    description: " We’ve got all the answers! Join us this Sunday, April 20th at 8 PM ⏰ for a chill and informative Info Session 💬 with our awesome summit ",
    imageUrl: "https://i.ibb.co/cXQS3P0T/490516913-122227066100033978-401228470262129830-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "20TH APR 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 27,
    title: "FST Hackathon INFOSESSION",
    description: "Ready to explore, create, and push your limits? 💡 Join us for the official info session of the FST Hackathon and get all the key insights about this exciting event coming your way! ",
    imageUrl: "https://i.ibb.co/23t7kGXj/493948877-122231556152033978-6815688737353480644-n.jpg",
    completed: true,
    venue: "Google Meet",
    dateAndTime: "17TH MAY 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 28,
    title: "FST Hackathon Participation",
    description: "IEEE CS ISSATM SBC had a great time taking part in this dynamic and inspiring event! From idea to execution, it was a journey of innovation, collaboration, and learning  ",
    imageUrl: "https://i.ibb.co/chP8PP2d/509608659-122236923428033978-3299784089773836780-n.jpg",
    completed: true,
    venue: "FST",
    dateAndTime: "22TH JUIN 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 29,
    title: "IEEE Extreme 19.0 Ambassador",
    description: "We're proud to spotlight Yemen Meddeb , our amazing ambassador for IEEEXtreme 19.0! 🌟 He’s all set to represent the IEEE ISSATM Student Branch in one of the most thrilling global 24-hour programming competitions ",
    imageUrl: "https://i.ibb.co/JwDQQSkF/495135231-1405660653872865-3726243019900651725-n.jpg",
    completed: true,
    venue: "Online",
    dateAndTime: "23TH JUIN 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
  {
    id: 30,
    title: "Choufli Code 2.0 IEEE CS R8 Recognition",
    description: "Kudos to IEEE CS ISSATM SBC for successfully organizing Choufli Code on February 22, 2025! ",
    imageUrl: "https://i.ibb.co/Q3w0ZSw2/511018580-122196942014263378-7524307976986593936-n.jpg",
    completed: true,
    venue: "Online",
    dateAndTime: "22TH JUIN 2025",
    registerUrl: "",
    gallery: [

    ],
    isGallery: false
  },
    {
    id: 31,
    title: "Gaming Night 3.0",
    description: "On August 22 & 23, 2025 at 9PM ✨, the virtual arena opens once again for Gaming Night 3.0, hosted by the IEEE CS chapters of ENICarthage, Esprit, ENET’com, ENSIT, ISIMM, ISSAT Mateur, and ISET Bizerte!🧡 Whether you're a Valorant sharpshooter, a FIFA strategist, or a League of Legends mastermind, this is your night to compete, connect, and conquer 🧡wherever you are, and whatever level you re at..",
    imageUrl: "https://i.ibb.co/20gtvp5L/528703115-1402292654986964-4369091269106721455-n.jpg",
    completed: true,
    venue: "Discord",
    dateAndTime: "22TH AUG 2025",
    registerUrl: "",
    gallery: [
      
    ],
    isGallery: false
  },
  {
    id: 32,
    title: "Bizerte Tcodi 2.0",
    description: "BIZERTE TCODI 2.0 is a problem-solving hackathon organized by three IEEE branches: IEEE ISET Bizerte, IEEE ENIB, and IEEE ISSATM.",
    imageUrl: "https://i.ibb.co/dskFkkfM/434396316-1769285730240893-6600856576318328781-n.jpg",
    completed: true,
    venue: "ENIB",
    dateAndTime: "",
    registerUrl: "",
    gallery: [
      
    ],
    isGallery: false
  },
    {
    id: 33,
    title: "CsTam 2.0 Infosession",
    description: "📣INFOSESSION ALERT - CSTAM 2.0 📣 Ready to dive into the world of computing, innovation, and impactful collaboration? 🚀💻 This is your gateway to the Computer Society Tunisian Annual Meeting 2.0 experience! ✨",
    imageUrl: "https://i.ibb.co/5h7bXWF0/556836326-122252581784033978-7787216726531868236-n.jpg",
    completed: true,
    venue: "The Void",
    dateAndTime: "30TH SEPT 2025",
    registerUrl: "",
    gallery: [
      
    ],
    isGallery: false
  },
    {
    id: 34,
    title: "CodeX: Tunisian Pre-Xtreme Community",
    description: "CodeX: Tunisian Pre-Xtreme Community Is an online event organized by IEEE CS ENET'Com SBC, IEEE CS ESPRIT SBC, IEEE CS ISIMM SBC and IEEE CS ISSATM SBC. Focusing on online workshops in preparation for IEEEXtreme 19.0",
    imageUrl: "https://i.ibb.co/whTGQWC4/525446409-1323952613069673-5865487620583952343-n.jpg",
    completed: true,
    venue: "The Void",
    dateAndTime: "1ST OCT 2025",
    registerUrl: "",
    gallery: [
      
    ],
    isGallery: false
  },
  {
    id: 35,
    title: " IEEE Xtreme 19.0",
    description: "🕸️ IEEE Xtreme 19.0 🕸️ Welcome to the dark side of code. 💻 This year, we channel the cold, emotionless brilliance of Wednesday Addams — where logic reigns supreme and bugs meet their doom. Prepare for 24 hours of relentless problem-solving, deadpan focus, and delightfully grim determination. No smiles, just syntax. No mercy, just mastery.",
    imageUrl: "https://i.ibb.co/2704chCv/559518889-122254031042033978-3683891486391743882-n.jpg",
    completed: false,
    venue: "ISSATM",
    dateAndTime: "25TH , 26TH OCT 2025",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfPERkvUJ24wwo3I9dq4PcM5JyrgB0ZwI11awOeivaCKqxhQQ/viewform?usp=send_form",
    gallery: [
      
    ],
    isGallery: false
  },
 
];
export default eventsData;
