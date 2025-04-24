# Preact Company Manager

## About

**_Preact Company Manager_** is a web application developed for managing a company's current employees, new hires, and finances.

## Getting Started

Here are the steps and tools required to get this project running locally.

### Prerequisites

- Ruby (>= 3.0) – use a version manager like rbenv
- Rails - can run `gem install rails`
- Node.js (>= 22) – use a version manager like nvm
- Yarn - can run `npm install -g yarn`
- PostgreSQL
- Git

### Install Dependencies

- Run `bundle install` to install the necessary Ruby Gems.
- Run `yarn install` to install the Node front-end dependencies.

### How to Run Application

- Run `bin/rails db:migrate` to initialize database
- Run `bin/dev` to start server
- Navigate to `http://localhost:3000/dashboard`

### How to Run Storybook

- Run `yarn storybook`
- Navigate to `http://localhost:6006/`
