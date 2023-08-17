import inquirer from 'inquirer';
import fs from 'fs/promises';
import dayjs from 'dayjs';

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
        name: 'Unilicense',
        link: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    },
    {
        name: 'MIT',
        link: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    },
]

let { title, description, tableOfContents, want_installation, installation, want_credit, credit, usage, license, want_tests, tests, username, email, license_owner} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project",
        },
        {
            type: 'confirm',
            name: 'want_installation',
            message: "Do you want to include installation steps?",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Type in your installation instructions",
            when: (answer) => answer.want_installation===true
        },
        {
            type: 'input',
            name: 'usage',
            message: "Type in the usage of this project"
        },
        {
            type: 'confirm',
            name:'want_credit',
            message: 'Do you have any collaborators or anyone including third-party assets and tutorial links that you want to give credit to?'
        },
        {
            type: 'input',
            name: 'credit',
            message: 'List your collaborators with their Github profiles, list any third-party assets that require attribution, and include tutorial links.',
            when: (answer) => answer.want_credit===true
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using?',
            choices: ['MIT', 'Apache', 'Boost', 'Unilicense'],
            filter(val) {
                return val;
            }
        },
        {
            type:'input',
            name:'license_owner',
            message: "Enter the name of the license owner",
            when: (answer) => answer.license==='MIT' || answer.license==='Apache'
        },
        {
            type: 'confirm',
            name: 'tableOfContents',
            message: "Do you want a table of contents?"
        },
        {
            type: 'confirm',
            name: 'want_tests',
            message: "Do you want to include tests for your application?"
        },
        {
            type: 'input',
            name: 'tests',
            message: "Input your tests for your application",
            when: (answer)=> answer.want_tests===true
        },
        {
            type: 'input',
            name: 'username',
            message: "Enter Your Github username"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your Email Address where anyone can reach you for questions regarding your application"
        }

    ])


let readmeText =

    `# ${titleSplitter(title)}   ${returnBadge()}

## Description

${description}${generateTableOfContents()}${createInstallationSteps()}

##Usage

${usage}
${creditsGenerator()}
## License

${generateLicense(license)}
${generateTests()}
## Questions

If you would like to reach out to me with any questions, you can email me directly at: [${email}](mailto:${email})

Also, you can visit my github profile page [here](https://github.com/${username}).`



console.log(readmeText)


function titleSplitter(title) {
    let titleName = title
    let titleSplit = titleName.split(' ')
    for (let i = 0; i < titleSplit.length; i++) {
        titleSplit[i] = titleSplit[i][0].toUpperCase() + titleSplit[i].substr(1);


    }
    let titleJoin = titleSplit.join('-')
    return titleJoin
}


function generateTableOfContents() {

    let tableText =`
## Table of Contents

    [Installation](#installation)
    [Usage](#usage)
    [Credits](#credits)
    [License](#license)
    [Questions](#questions)`

    if (tableOfContents === true) {
        return `
        ${tableText}`
    }
    else {
        return ''
    }

}

function createInstallationSteps() {
    let installationText =
`

## Installation

${installation}`

    if (want_installation === true) {
        return installationText

    }
    else {
        return ''
    }
}

function creditsGenerator() {
    if (want_credit === true) {
        return `
## Credits 

${credit}
`
    }
    else {
        return ''
    }
}

function generateTests(){
    if(want_tests===true){
        return `
## Tests

${tests}
`
    }
    else{
        return ''
    }
}

function generateLicense(license) {
    if (license == "Apache") {
        return `Copyright [${dayjs().year()}] [${license_owner}]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
    }
    else if (license == 'MIT') {
        return `MIT License

Copyright (c) [${dayjs().year()}] [${license_owner}]
        
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    }
    else if (license == 'Boost') {
        return `Boost Software License - Version 1.0 - August 17th, 2003

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.`
    }
    else if (license == 'Unilicense') {
        return `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`
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