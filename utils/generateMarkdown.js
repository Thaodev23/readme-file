// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = "";
  if (licenseType === "MIT License") {
   yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
   } else if (licenseType === "Apache License 2.0") {
   yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
   } else if (licenseType === "GNU General Public License v3.0") {
   yourLicense =`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
   } else if (licenseType === `BSD 2-Clause "Simplified" License`) {
   yourLicense = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`
   } else {
   license.license = "";
   }
  return yourLicense;
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
`;
}

module.exports = generateMarkdown;

// function generateMarkdown(data) {
//   ## license
//   return `# ${data.title}
//   renderLicenseBadge(license)`
// }

