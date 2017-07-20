var projects = {
    "projects": [{
            "title": "Company Data App",
            "dates": "Juni 2017",
            "description": "Fullstack JavaScript App: Zeigt veröffentlichte Unternehmenszahlen (Gewinn, Bilanzsumme bzw. Umsatz) zu deutschen Unternehmen an. (API: https://gewinnzahlen.herokuapp.com/api)",
            "images": ["images/companydata.png", "images/tech.png"],
            "link": "https://gewinnzahlen.herokuapp.com"
        },
        {
            "title": "Unix Timestamp Converter",
            "dates": "Juli 2017",
            "description": "Ein NodeJS Microservice, der UNIX Timestamps in ein natürliches Datumsformat oder ein Datum in ein UNIX Timestamp umwandelt.",
            "images": ["images/timestamp.png"],
            "link": "https://unixtimestampconvert.herokuapp.com"
        },
        {
            "title": "HTML Canvas Arcade Game",
            "dates": "April 2017",
            "description": "Ein kleiner Frogger Klon. HTML Canvas + JavaScript.",
            "images": ["images/game.png"],
            "link": "http://froschgame.herokuapp.com/"
        }

    ],
    "display": function() {

        projects.projects.forEach(function(element) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", element.title).replace("#", element.link);
            var formattedDates = HTMLprojectDates.replace("%data%", element.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", element.description);
            var formattedImages = "";
            element.images.forEach(function(element) {
                formattedImages += HTMLprojectImage.replace("%data%", element);
            });
            var formattedProjects = formattedTitle + formattedDates + formattedDescription + formattedImages;
            $(".project-entry:last").append(formattedProjects);
        });

    }
};

var bio = {
    "name": "Oliver Statt",
    "role": "aspiring full-stack web developer",
    "welcomeMessage": "",
    "biopic": "images/me.jpg",
    "contacts": {
        "mobile": "	0176 / 47199830",
        "email": "oliverstatt@gmail.com",
        "github": "OliverStatt",
        "location": "München"
    },
    "skills": ["HTML", "CSS", "JavaScript", "NodeJS", "NoSQL"],
    "display": function() {
        //prepend name and role
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedBio = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedBio);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedContacts = formattedMobile + formattedEmail + formattedGitHub + formattedLocation;
        $("#topContacts, #footerContacts").append(formattedContacts);


        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);


        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);

        if (bio.skills.length > 0) {
            bio.skills.forEach(function(element) {
                var formattedSkill = HTMLskills.replace("%data%", element);
                $("#skills").append(formattedSkill);
            });
        }


    }
};

var education = {
    "schools": [{
            "name": "Universität Regensburg",
            "location": "Regensburg",
            "degree": "Bachelor of Science",
            "dates": "2006 - 2010",
            "url": "http://www.ur.de/",
            "majors": ["Wirtschaftsinformatik"]
        },
        {
            "name": "Gymnasium Bad Aibling",
            "location": "Bad Aibling",
            "degree": "Abitur",
            "dates": "1996 - 2005",
            "url": "http://www.gymnasium-bad-aibling.de/",
            "majors": ["LK: Englisch, Geschichte"]
        }

    ],
    "onlineCourses": [{
            "title": "Frontend Developer Nano Degree",
            "school": "Udacity",
            "dates": "März 2017 - Mai 2017",
            "url": "http://www.udacity.com"
        },
        {
            "title": "Full Stack JavaScript Track",
            "school": "Team Treehouse",
            "dates": "Mai 2017",
            "url": "http://www.teamtreehouse.com"
        }
    ],
    "display": function() {
        education.schools.forEach(function(element) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", element.name);
            formattedName = formattedName.replace("#", element.url);
            var formattedLocation = HTMLschoolLocation.replace("%data%", element.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", element.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", element.dates);
            var formattedMajors = "";
            element.majors.forEach(function(element) {
                formattedMajors += HTMLschoolMajor.replace("%data%", element);
            });

            var formattedSchool = formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajors;

            $(".education-entry:last").append(formattedSchool);
        });
        if (education.onlineCourses.length > 0) $(".education-entry:last").after(HTMLonlineClasses);
        education.onlineCourses.forEach(function(element) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", element.title);
            formattedTitle = formattedTitle.replace("#", element.url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", element.school);
            var formattedDates = HTMLonlineDates.replace("%data%", element.dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", element.url);
            formattedUrl = formattedUrl.replace("#", element.url);
            $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
        });
    }
};

var work = {
    "jobs": [{
            "employer": "Bundesamt für Migration und Flüchtlinge",
            "title": "Entscheider im Asylverfahren",
            "location": "München",
            "dates": "2016 - 2017",
            "description": "Durchführung von Anhörungen im Rahmen des Asylbearbeitungsprozesses und Bearbeitung von Asylanträgen, einschließlich Protokollierung, rechtlicher Bewertung und Erstellung von Empfehlungen für Asylentscheidungen"
        },
        {
            "employer": "elunic GmbH",
            "title": "IT - Manager",
            "location": "München",
            "dates": "2010 - 2016",
            "description": "Online Marketing (SEO, SEM), Anforderungsanalyse"
        },
    ],
    "display": function() {
        work.jobs.forEach(function(element) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", element.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", element.title);
            var formattedDates = HTMLworkDates.replace("%data%", element.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", element.description);
            var formattedLocation = HTMLworkLocation.replace("%data%", element.location);

            var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

            $(".work-entry:last").append(formattedEmployerTitle);
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);