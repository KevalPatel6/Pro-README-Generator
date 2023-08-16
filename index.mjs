import inquirer from 'inquirer';
import fs from 'fs/promises'

let {description, license} = await inquirer
  .prompt([
    {
        type:'input',
        name: 'description',
        message: "Write a description of your project",
    },
    {
        type:'list',
        name: 'size',
        message: 'What size do you need?',
        chioces: ['Apache','Eclipse','Boost','IBM','ISC','MIT','Mozilla','Perl'],
        filter(val) {
            return val.toLowerCase();
        }
        },
    
   
  ])

let readmeText = `# Project Description 
${description}

## License

${generateLicense(license)}

`

function generateLicense(){
    if(license ==="Jumbo"){
        
    }
}

fs.writeFile("README.md", readmeText)