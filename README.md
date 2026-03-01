React Component Library (CRA)

A reusable React + TypeScript component library built with Create React App, Storybook, and Docker.
This project demonstrates a complete UI component workflow from development to containerized deployment.

Project Overview:

This project includes reusable UI components such as:

Button
Label
Text
Dropdown
RadioButton
Img
HeroImage
Card
Table (with Row, Header, Cell, Footer)
Each component follows a consistent 5-file structure for scalability and maintainability.

Component Structure (Important):

Every component contains five files:

ComponentName/
├── ComponentName.tsx        # Component implementation
├── ComponentName.types.ts   # TypeScript interfaces
├── ComponentName.module.css # Styling
├── ComponentName.stories.tsx # Storybook stories
└── ComponentName.test.tsx   # Unit tests

Getting Started
1.  Create React App (TypeScript)
npx create-react-app react-component-library-cra --template typescript
cd react-component-library-cra

2.Install Core Dependencies
npm install

3.Install Storybook
npx storybook@latest init

Run Storybook:

npm run storybook

Storybook runs at:

http://localhost:6006

4.Install Testing Libraries (if needed)
npm install --save-dev @testing-library/react @testing-library/jest-dom

5.Webpack (Already Included in CRA)

Create React App already includes Webpack.
No manual configuration is required unless customizing.

Available Scripts
Start Development Server
npm start

Runs the app at:

http://localhost:3000

Run Storybook:
npm run storybook

Run Tests:
npm test

Create Production Build:
npm run build

Output folder:

/build

Dockerization:

This project is then containerized for production deployment.

Dockerfile (Sample)

Create a file named Dockerfile in the project root.

FROM node:18-alpine

WORKDIR /lastname_firstname_ui_garden

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8083

CMD ["serve", "-s", "build", "-l", "8083"]

Build Docker Image:
docker build -t simran_simran_coding_assignment12 .

Run Docker Container
docker run -p 8083:8083 --name simran_simran_coding_assignment12 simran_simran_coding_assignment12

Git hub link: https://github.com/RunDevelop344/react-component-library-cra.git

Author: Simran Simran

License:This project is for academic and demonstration purposes.

