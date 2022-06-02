# User Documentation

## Introduction

Ideally this application whould be behind authenticated layout, which means you will have to first login in order to view the data.
However this feature is not implemented so anyone can access it. This would be required if we were saving the data into database, 
because you would not want anyone to access your sensitive data, modify it or even erase.
All data you will see is automaticaly generated with initial load of the page.\
Any similarities are purely coincidental.\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Views

This application offers you multiple views to preview all the data provided:
- Contracts/Clieant/Advisors View
- Details View

### Contracts/Client/Advisors

At the bottom of the application is a navigation which enables you to switch between different views:
- In `Contracts` view you can see all contracts.
- In `Clients` view you can see all clients.
- In `Advisors` view you can see all advisors.

In the table is shown just the critial information, the rest is in the given `Detail View` which is accesible through `DETAIL` button at the end of the given row.

### Details

The Detail view has two sections:
- Contract (left side)
- Person (right side)

Contract View has all the information a contract has so:
- Institution (bank in czechia (Česká spořitelna))
- Owner of the contract - you can access detail of the person by clicking on it
- Admin (main advisor) - you can access detail of the person by clicking on it
- Advisors (the rest of the advisors if any) - you can access detail of a person by clicking on it
- Date Created (when was the contract signed (for example))
- Valid from (when the contract is valid, can be later date than the day it was signed)
- Valid to (when the contract's validity expires)

Person View has most of the information Person has:
- Full name (coumpound of first name and last name)
- Email
- Phone
- Age
- Contract (asociated contract, currently every person can have just one asociated contract)  - you can access detail of the contract by clicking on it
- (PID is not show for security reasons)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

