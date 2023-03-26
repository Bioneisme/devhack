## DevHack Terricon Hackathon

Made for the Terricon Valley hackathon "Developer Hackathon 2023" in 2 days.

### Incident manager for AXIS

Our project is a web and ios app that allows users to manage problems in your Residential complex by creating
applications to fix the problem and having access to your home's financial reports.

## Features

* Cross-platform, access from the website and mobile application
* Create an application to fix a problem in your home
* View the status of your application
* View the financial reports of your home
* Convenient application management for managers
* Ability to contact emergency services

## Technical features

* JWT Authentication with refresh tokens
* Payment system with Stripe
* Dockerized application
* Automatic SSL certificate renewal with Certbot
* Design system with Ant Design
* State management with Redux
* Admin panel for managing applications
* Mobile application with the same functionality as the web application

## Technologies

* **Frontend**: JavaScript, React, Redux, Ant Design, SASS
* **Backend**: TypeScript, Node.js, Express, Sequelize, PostgreSQL, Stripe
* **Mobile**: Swift, UIKit, StoryBoard, Alamofire, SnapKit, Keychain
* **Deploy**: Docker, docker-compose, Nginx, Certbot
* **Others**: Git, Jira, Figma, Miro, Postman

## Getting started

### Prerequisites

* Docker, docker-compose

### Installation

1. Clone the repo

```sh
git clone https://github.com/Bioneisme/devhack-hackthon.git
```

2. Configure environment variables
3. Set up SSL certificates (if you don't have them, remove the SSL configuration from the docker-compose.yml and
   nginx/conf files)
4. Build docker compose

```sh
docker-compose build
```
5. Run docker compose

```sh
docker-compose up
```