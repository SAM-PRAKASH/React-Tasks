class Person {
    constructor(name, dateOfBirth, gender, nationality, languagesKnown, maritalStatus) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.nationality = nationality;
        this.languagesKnown = languagesKnown;
        this.maritalStatus = maritalStatus;
    }

    addEducation(degree, year, institution) {
        if (!this.education) {
            this.education = [];
        }
        this.education.push({ degree, year, institution });
    }

    addProgrammingLanguages(languages) {
        this.programmingLanguages = languages;
    }

    addTools(tools) {
        this.tools = tools;
    }

    addHobbies(hobbies) {
        this.hobbies = hobbies;
    }
}

const person1 = new Person(
    "John Doe",
    "31.08.1996",
    "Male",
    "Indian",
    ["Tamil", "English"],
    "Unmarried"
);

person1.addEducation("Bachelor of Engineering", "2014-2018", "KSR Institute For Engineering and Technology, Thrichengode, Namakkal-215.");
person1.addEducation("Higher Secondary", "2014", "Vetri Vikaas boys hr.Sec.School, Mallur, Namakkal-3.");
person1.addEducation("SSLC", "2012", "John Paul hr.Sec.School, Dindigul-1.");

person1.addProgrammingLanguages(["Java (Spring Boot)", "HTML", "JavaScript", "CSS"]);

person1.addTools(["Intelij", "SSMS", "Dbeaver", "PuTTy", "Azure devOps"]);

person1.addHobbies(["Knowledge gathering from Internet", "Football", "Listening Songs", "Editing"]);

console.log(person1);
