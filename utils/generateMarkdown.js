// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![github license](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![github license](https://img.shields.io/badge/license-${data.license}-blue)

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  For any additional questions please contact me here:
  Github: ${data.questions1}
  Email: ${data.questions2}

`;
}

module.exports = generateMarkdown;
