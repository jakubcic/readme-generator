# Professional README Generator Command Line tool
[![MIT License badge](https://img.shields.io/badge/license-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)


## Table of Contents

- [Description](#description)
- [Installation](#installation)
    + [Prerequisites](#prerequisites)
    + [How to install](#how-to-install)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Description
Writing a nice README can be time consuming, but it certainly doesn't have to be. This application can help get you started! It is a command line tool written in JavaScript using the **node.js** runtime. It will prompt you with serveral questions and then generate a `README.md` file inside the `/data` directory. This README can serve as a good base and you can expand on it further or use it as-is.

## Installation
### Prerequisites
You must have **node.js** installed to run this application. I highly recommend using [**nvm**](https://github.com/nvm-sh/nvm) (node version manager) to manage your node.js installation.
<br>
This application is based on **node v16.18.0**.

### How to install
After you ensure that you have **node.js** installed you can simply clone this repositry:
```
git clone git@github.com:jakubcic/readme-generator.git
```

Then navigate over to the root of the `readme-generator` directory and run `npm install` in your terminal.

## Usage
Once you have everything installed, including the dependencies, you can run `node index.js` and the application will launch and begin prompting you. Once you answer all the questions you will find a new `README.md` file inside the `/data` directory in your local repository.
<br>

Here's a video demo

https://user-images.githubusercontent.com/39972418/202079649-004face9-e180-4de9-bd15-ab33975b8d10.mp4


## Credits
This application uses v8.2.4 of the [inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) package.

## License
This application is covered under the [MIT License](https://choosealicense.com/licenses/mit/).


