# api-axios-jest-typescript-tests
![Main Image](/images/main.png)

## Description

This project is a TypeScript-based project for testing APIs using Axios and Jest. It provides a structured setup for writing and running tests against API endpoints. Tests were created to the following microservice: https://github.com/dneprokos/node-rest-services 

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (or yarn) installed
- A code editor (e.g., Visual Studio Code)
- Basic knowledge of TypeScript, Axios, and Jest
- The following Microservice should be started: https://github.com/dneprokos/node-rest-services

![Microservice Image](/images/microservice.png)

### Installation

- Clone the repository: git clone https://github.com/your-username/api-axios-jest-typescript-tests.git
- Navigate to the project directory: cd api-axios-jest-typescript-tests
- Install the project dependencies: npm install

### Running tests

- npm test

![Tests Image](/images/tests.png)

### Reporting

- Allure command-line tool should be installed: npm install -g allure-commandline
- Run command to open allure report(after test run): allure serve

![Allure Image](/images/allure.png)

### Run in docker container

- Docker should be installed
- Docker-compose should be installed
- In CMD, run the following command "docker-compose up --build" or alternatively run powershell script "run-tests-in-docker.ps1"
- You can navigate "http://localhost:9000/" and see Allure reports

![Docker Image](/images/docker.png)


