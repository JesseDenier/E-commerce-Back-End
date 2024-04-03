[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# E-commerce Back End Starter Code

## Description

This is an example of a backend that could be used to maintain an eCommerce site. It would allow a business to keep track of inventory as well as organize said products into categories and apply searchable tags to each product.

I created this project to prove my knowledge of backend file structure, and how it all flows and connects.

It works by creating SQL tables and then using javascript routes and sequelize to allow the end user to adjust the data using get post put and delete requests rather than needing to use mysql directly within the terminal.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

- Download the project code from Github, as well as Node.js, and SQL.

- Open the code folder, and adjust the .env variables to your mysql username and password.

- Run the following command lines in order:

  - 'npm init -y' (Initializes a new Node.js project)

  - 'npm install' (Installs all dependencies)

  - 'mysql -u root -p' (Starts the MySQL command-line client)

  - 'your password' (Validates access to MySQL)

  - 'SOURCE db/schema.sql;' (Creates the database)

  - 'quit' (Exits the MySQL command-line client)

  - 'npm run seed' (Populates the new database with placeholder data)

  - 'npm start' (Starts the application on your local server)

- When you are done using the application remember to open your terminal and hit 'control + c' at the same time to end the server.

## Usage

Use this project by following the installation steps listed above and viewing your local server at port 3001 either with a web browser or a software like Insomnia. You can view the database in different ways, add to it, change it, and delete things from it using only requests.

Video Demonstrating Installation and Usage: (https://drive.google.com/file/d/1bHTt-DajWvOmgXqYdZm9QBLYGhWY2fji/view?usp=sharing)

Use Case Example: A small business owner may want to keep track of all the products they have and which categories/tags apply to each product. This would allow them to do all of that and more from one place.

## License

This project is licensed under the terms of the MIT license. See the badge at the top of the README for more details.

## Contributing

Additional Contributors: Much of this code was created by UT Coding Bootcamp. Jesse Denier add all the models, routes, solved missing connections pieces, and improved readability.

3rd Party Assets: CHATGPT was used to assist in troubleshooting.

Tutorials: None

## Tests

Download insomnia and attempt to replicate the get, create, update, and delete functions shown in the usage video.

## Questions

Feel free to reach out to me with any additional questions through the following methods:

Github Profile: https://www.github.com/JesseDenier

Email Address: jessecdenier@gmail.com
