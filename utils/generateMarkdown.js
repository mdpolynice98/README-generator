function renderLicenseBadge(license) {
  let licenseType = license.license; // i think this is problem #1
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  # Table of Content
-[description](#description)
-[email](#email)
-[licenses](#licenses)
-[contributors](#contributors)
-[test](#test)
-[username](#username)
-[GitHub](#GitHub)

  # ${response.userName}

  # ${response.GitHub}

  # ${response.email}

  # ${response.license}

  # ${response.description}

  # ${response.test}

  # ${response.contributors} 
`;
}

module.exports = generateMarkdown;
