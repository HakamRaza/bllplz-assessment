## Introduction

This project is based on [Laravel](https://laravel.com/) framework, an opionated PHP web development framework. 
This repository represent the web app for assessment answers for Billplz Pre-Interview Assessment which consist of 6 Questions.

## Setup
There are 2 ways to set up the web app locally, follow the steps below:

### 1. Local

1. Clone this repository to your local machine.
2. Ensure you have [PHP (v.8.1)](https://www.php.net/manual/en/install.php), [Node](https://nodejs.org/en) and [Composer](https://getcomposer.org/doc/00-intro.md) installed on your system.
3. Install the required dependencies by running `composer install` in the project root directory.
5. Create a `.env` file in the project root by copying template `.env.example`
6. Generate a new application key by running `php artisan key:generate`.
7. Install frontend package by running `npm install`
8. Build front end by running `npm run build`
9. Once the installation is complete, you can start using the web app by running `php artisan serve`

### 2. Container

To set up containerize env, follow the steps below:

1. Clone this repository to your local machine.
2. Do install Docker Desktop or any Docker client [here](https://www.docker.com/products/docker-desktop/)
3. Open terminal point to folder of this project where Dockerfile is located.
4. Start containerize app by running `docker compose up -d`

## Usage

And open your browser at the following address : [http://127.0.0.1:8000](http://127.0.0.1:8000/)
