# Dynamic Mapping

Dynamic mapping and integration is a form of couples counseling in which couples create a map of their relationship dynamic as a tool to identify, heal and improve problem areas of the relationship. The map includes elements from each person’s family of origin, communication styles, conflict areas and reactions, strength, vulnerabilities and goals. Couples collaboratively and compassionately integrate new awarenesses, tools and healthy new pathways to create a happier and peaceful relationship.

## Getting the code and running locally

Install [Git](https://git-scm.com/)

Install [Node (and concurrently NPM)](https://nodejs.org/en/)

Open terminal (on Mac) or command prompt (on Windows) and navigate to the location where you want to download the project.  Terminal tutorial [here](https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855). Some basic navigation commands will be different on Mac and Windows.

Copy the link for this GitHub repo --image

Go back to the terminal and clone the GitHub repo

```bash
$ git clone https://github.com/eecs394-s17/blue-dynamic-mapping.git
```

Install Ionic 2

```bash
$ npm install -g cordova ionic
```

Navigate into the project folder

```bash
$ cd blue-dynamic-mapping
```

Install project dependencies
```bash
$ npm Install
```

Acquire the APP_SECRETS.js file and copy it to the main folder of the project ".../blue-dynamic-mapping/APP_SECRETS.js"

Run the project
```bash
$ ionic serve
```

After this, the app should open for demo in your default web browser

## Accessing the database

Create an account at [Firebase](https://firebase.google.com/)

Get an invite to the project from the database administrator

## Changing prompts and answers

--------------

# For the next dev team

## Known bugs

When you navigate into the "Track Argument" feature, then hit the back button, it takes you to a blank "Home Page"

## Structure of the project