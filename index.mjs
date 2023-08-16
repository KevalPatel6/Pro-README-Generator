import inquirer from 'inquirer';
import fs from 'fs/promises'

let badgeLinks = [

    {
        name: 'Apache',
        link: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    },
    {
        name: 'Boost',
        link: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    },
    {
        name: 'Eclipse',
        link: `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    },
    {
        name: 'IBM',
        link: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    },
    {
        name: 'ISC',
        link: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    },
    {
        name: 'MIT',
        link: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    },
    {
        name: 'Mozilla',
        link: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    },
    {
        name: 'Perl',
        link: `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    }
]

let { title, description, tableOfContents, installation, credit, usage, license } = await inquirer
    .prompt([
        // {
        //     type: 'input',
        //     name: 'title',
        //     message: 'What is the title of your project?'
        // },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: "Write a description of your project",
        // },
        // {
        //     type: 'confirm',
        //     name: 'installation',
        //     message: "Do you want to include installation steps?"
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: "Type in the usage of this project"
        // },
        // {
        //     type: 'input',
        //     name: 'credit',
        //     message: 'List your collaborators with their Github profiles, list any third-party assets that require attribution, and include tutorial links.',
        // },
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: 'What license are you using?',
        //     choices: ['Apache', 'Eclipse', 'Boost', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl'],
        //     filter(val) {
        //         return val;
        //     }
        // },
        {
            type: 'confirm',
            name: 'tableOfContents',
            message: "Do you want a table of contents?"
        },


    ])
console.log(license)

let readmeText =

`# ${titleSplitter()}   ${returnBadge()}

## ${description}

${generateTableOfContents()}

${createInstallationSteps()}

## Usage

${usage}

${creditsGenerator()}

## License

${generateLicense(license)}`




function titleSplitter(title){
    let titleSplit = title.split(' ')
    for (let i = 0; i < titleSplit.length; i++) {
        let titleCapitalize = titleSplit[i];
        titleCapitalize[0].toUpperCase();
    }
    let titleJoin = titleSplit.join('-')
    return titleJoin
    console.log(titleJoin)
}


function generateTableOfContents() {

    let tableText =
`## Table of Contents

    -[Installation](#installation)
    -[Usage](#usage)
    -[Credits](#credits)
    -[License](#license)`

    if (tableOfContents === true) {
        return tableText
    }
    else {
        return
    }

}

function createInstallationSteps() {
    if (installation == 'y') {

    }
    else {
        return
    }
}

function creditsGenerator() {
    if (credit === true) {

    }
}


function generateLicense() {
    if (license === "Apache") {
        return 
    }
}


function returnBadge() {
    for (let i = 0; i < badgeLinks.length; i++) {
            if (license === badgeLinks[i].name) {
                return badgeLinks[i].link
                console.log(badgeLinks[i].link)
            }
        
    }
}

fs.writeFile("README.md", readmeText)



// `# <Your-Project-Title>

// ## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?

// ## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     [alt text](assets/images/screenshot.png)
//     ```

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// [badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.