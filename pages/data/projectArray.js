class Project {
  constructor(
    name,
    languages,
    frameworks,
    skills,
    type,
    place,
    completion
  ) {
    this.id = name.replace(/\s+/g, "-").toLowerCase();
    this.name = name;
    this.languages = languages.sort();
    this.frameworks = frameworks.sort();
    this.skills = skills.sort();
    this.type = type.sort();
    this.place = place;
    this.completion = completion;

    this.languages;
  }
}

let futoshiki = new Project(
  "Large Futoshiki Generation",
  ["Java"],
  ["JUnit"],
  ["Algorithms"],
  ["Software"],
  "University",
  true
);
let paperSearch = new Project(
  "Academic Paper Search Website",
  ["ReactJS", "Javascript", "PHP", "SQLite", "CSS"],
  ["Firebase"],
  ["API Development", "UX Development", "Fullstack Development"],
  ["Software"],
  "University",
  true
);
let wildfire = new Project(
  "Wildfire Detection",
  ["PHP", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
  [],
  ["Cloud Databases", "Internet of Things", "Git", "Raspberry Pi", "AWS"],
  ["Software", "Hardware"],
  "University",
  true
);
let digitrecog = new Project(
  "Handwritten Digit Recognition",
  ["MATLAB"],
  [],
  ["Machine Learning"],
  ["Software"],
  "University",
  true
);
let vikings = new Project(
  "Vikings Esports Website",
  ["ReactJS", "JavaScript", "PHP", "SQLite"],
  ["MaterialUI"],
  ["API Developent", "UX Development", "Agile Scrum", "Git"],
  ["Software"],
  "University",
  true
);
let game = new Project(
  "Game Design",
  ["Ruby"],
  [],
  [],
  ["Software"],
  "Personal",
  false
);
let gameboy = new Project(
  "GameBoy Zero",
  ["Python"],
  [],
  [],
  ["Hardware", "Software"],
  "Personal",
  true
);
let portfolio = new Project(
  "My Portfolio",
  ["ReactJS, Javascript"],
  ["MaterialUI", "BootStrap"],
  [],
  ["Software"],
  "Personal",
  false
);

let projectArray = [
    futoshiki,
    paperSearch,
    wildfire,
    digitrecog,
    vikings,
    game,
    gameboy,
    portfolio,
  ]
export default projectArray;
