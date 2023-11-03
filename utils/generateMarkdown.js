// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Below: the code below was reference from stackoverflow.com and the license badge was reference from github.com
function renderLicenseBadge(data) {
  let licenseType = data.License; 
  let yourLicense = "";
  if (licenseType === "MIT License") {
   yourLicense = `![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
   } else if (licenseType === "Apache License 2.0") {
   yourLicense = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  //  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
   } else if (licenseType === "GNU General Public License v3.0") {
   yourLicense =`![License:GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
   } else if (licenseType === `BSD 2-Clause "Simplified" License`) {
   yourLicense = `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`
   } else {
   yourLicense = "";
   }
  return yourLicense;
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Below: the code below was reference from stackoverflow.com and the license badge was reference from github.com
function renderLicenseLink(data) {
  let licenseType = data.License; 
  let yourLicense = "";
  if (licenseType === "MIT License") {
   yourLicense = `https://opensource.org/licenses/MIT`
   } else if (licenseType === "Apache License 2.0") {
   yourLicense = `https://opensource.org/licenses/Apache-2.0`
   } else if (licenseType === "GNU General Public License v3.0") {
   yourLicense =`https://www.gnu.org/licenses/gpl-3.0`
   } else if (licenseType === `BSD 2-Clause "Simplified" License`) {
   yourLicense = `https://opensource.org/licenses/BSD-2-Clause`
   } else {
   yourLicense = "";
   }
  return yourLicense;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(response) {
  return `## License 
  ${response.License}   
  ${renderLicenseLink(response)}`;

}

// TODO: Create a function to generate markdown for README
// Below: the code below was reference from stackoverflow.com
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
  
  ## Table of Content
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${data.Description}
 
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}
  
  ${renderLicenseSection(data)}
  
  ## Contributions
  ${data.Contributions}
  
  ## Tests
  ${data.Tests}

  ## Questions
  https://github.com/${data.username}

  How to reach me:
  ${data.email}
  
  `; 

}

module.exports = generateMarkdown;

// function generateMarkdown(data) {
//   ## license
//   return `# ${data.title}
//   renderLicenseBadge(license)`
// }

// ## username
// ${data.username}

// ## email
// ${data.email}