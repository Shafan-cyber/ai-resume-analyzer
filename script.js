const resumeFile = document.getElementById("resumeFile");
const jobRole = document.getElementById("jobRole");
const result = document.getElementById("result");



const skillsDatabase = {


    frontend: [

        "html",
        "css",
        "javascript",
        "react",
        "git",
        "github",
        "responsive",
        "bootstrap"

    ],



    backend: [

        "node",
        "express",
        "mongodb",
        "sql",
        "api",
        "database",
        "git"

    ],



    fullstack: [

        "html",
        "css",
        "javascript",
        "react",
        "node",
        "mongodb",
        "api",
        "git"

    ],



    python: [

        "python",
        "django",
        "flask",
        "sql",
        "machine learning",
        "api",
        "git"

    ],



    java: [

        "java",
        "spring",
        "spring boot",
        "sql",
        "hibernate",
        "git"

    ],



    data: [

        "python",
        "excel",
        "sql",
        "power bi",
        "statistics",
        "machine learning"

    ]

};






function analyzeResume(){


    const file = resumeFile.files[0];



    if(!file){

        alert("Please upload your resume first!");

        return;

    }



    result.innerHTML = `

        <h2>Analyzing Resume...</h2>

        <div class="loader"></div>

    `;



    const reader = new FileReader();



    reader.onload = function(e){


        let resumeText = e.target.result.toLowerCase();



        analyzeSkills(resumeText);


    };



    reader.readAsText(file);


}







function analyzeSkills(resumeText){



    let selectedRole = jobRole.value;



    let requiredSkills = skillsDatabase[selectedRole];



    let matchedSkills = [];

    let missingSkills = [];




    requiredSkills.forEach(skill => {


        if(resumeText.includes(skill)){

            matchedSkills.push(skill);

        }

        else{

            missingSkills.push(skill);

        }


    });





    let score = Math.round(

        (matchedSkills.length / requiredSkills.length) * 100

    );





    displayResult(

        score,

        matchedSkills,

        missingSkills

    );



}








function displayResult(score, matchedSkills, missingSkills){



    result.innerHTML = `



    <h2>📊 Resume Analysis Result</h2>




    <div class="score-box">


        <h1>${score}%</h1>

        <p>ATS Compatibility Score</p>


    </div>





    <h3 style="margin-top:25px">

    ✅ Matched Skills

    </h3>



    <div class="skills">


    ${
        matchedSkills.length

        ?

        matchedSkills.map(skill =>

        `<span class="skill">${skill}</span>`

        ).join("")

        :

        "<p>No matching skills found</p>"

    }


    </div>






    <h3 style="margin-top:25px">

    ❌ Missing Skills

    </h3>




    <div class="skills">


    ${
        missingSkills.length

        ?

        missingSkills.map(skill =>

        `<span class="skill">

        ${skill}

        </span>`

        ).join("")

        :

        "<p>Great! Your resume covers all skills.</p>"

    }



    </div>






    <h3 style="margin-top:25px">

    💡 Improvement Tips

    </h3>



    <p>

    Add missing skills, improve project descriptions,

    include measurable achievements and use job-specific keywords.

    </p>



    `;


}
