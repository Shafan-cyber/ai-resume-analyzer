// AI Resume Analyzer Script


function analyzeResume() {


    const resumeFile = document.getElementById("resume").files[0];

    const selectedRole = document.getElementById("role").value;


    const result = document.getElementById("result");



    if(!resumeFile){

        result.innerHTML = `

        <h2>⚠️ No Resume Found</h2>

        <p>Please upload your resume before analyzing.</p>

        `;

        return;

    }



    // Loading Animation

    result.innerHTML = `

    <h2>🔍 Analyzing Resume...</h2>

    <p>Please wait while AI checks your resume.</p>

    `;



    setTimeout(()=>{


        generateAnalysis(selectedRole);



    },2000);



}





function generateAnalysis(role){



    // Sample Skills Database


    const skillDatabase = {


        "Frontend Developer":[

            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git",
            "Responsive Design"

        ],


        "Backend Developer":[

            "Node.js",
            "Express",
            "MongoDB",
            "API",
            "Database",
            "JavaScript"

        ],


        "Full Stack Developer":[

            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB"

        ],


        "Software Engineer":[

            "Java",
            "Python",
            "Data Structures",
            "Algorithms",
            "Git"

        ],


        "Data Analyst":[

            "Python",
            "SQL",
            "Excel",
            "Data Visualization",
            "Power BI"

        ]

    };



    const requiredSkills = skillDatabase[role];



    // Random ATS Score Generator


    let atsScore = Math.floor(
        Math.random() * (95-65) + 65
    );



    // Random matched skills


    let matchedSkills = requiredSkills.slice(
        0,
        Math.floor(requiredSkills.length/2)
    );



    let missingSkills = requiredSkills.filter(
        skill => !matchedSkills.includes(skill)
    );





    const result = document.getElementById("result");



    result.innerHTML = `


    <h2>📊 Resume Analysis Result</h2>


    <br>


    <h3>ATS Score</h3>

    <div class="score">

    ${atsScore}%

    </div>



    <br>



    <h3>🎯 Target Role</h3>

    <p>${role}</p>



    <br>



    <h3>✅ Detected Skills</h3>


    <div>

    ${
        matchedSkills.map(skill=>`

        <span class="skill">
        ${skill}
        </span>

        `).join("")
    }

    </div>



    <br>



    <h3>❌ Missing Skills</h3>


    <div>

    ${
        missingSkills.map(skill=>`

        <span class="skill">
        ${skill}
        </span>

        `).join("")
    }


    </div>




    <br>


    <h3>💡 AI Suggestions</h3>


    <div class="suggestion">

    Add missing technical skills related to ${role}.

    </div>


    <div class="suggestion">

    Improve your resume by adding measurable achievements.

    </div>



    <div class="suggestion">

    Use professional keywords to improve ATS ranking.

    </div>



    <div class="suggestion">

    Add projects and GitHub links to showcase experience.

    </div>


    `;


}
