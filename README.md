# Lucía Version 1.0 - Personal Assistant Customizable 🤖

## Version 1.0

- **Stable release**
- **Fully functional features**

Lucía is a personal assistant designed to handle any kind of inquiry and provide information about the users who configure it. Lucía can be customized to assist any person by providing a context file.

## What is Lucía? 🤔

Lucía is a personal assistant that can be used by anyone. It provides responses about the life, work, and projects of the person configuring its context.

## How It Works 🧐

Lucía works from a **context file** that contains all the relevant information about the user who needs assistance. This file needs to be configured before using the assistant.

### Instructions to Configure the Context

1. **File Location**: The file containing Lucía's context is located in the `/src/openai/context.ts` directory. This is where you need to add all the information about yourself or the user for whom you want to configure Lucía.

2. **Create Your Custom Context**:

   - Create the `context.ts` file in the `/src/openai` folder.
   - Inside the file, you should export a constant named `CONTEXT`, which will be an array of objects with messages that describe the person Lucía should assist.

3. **File Structure Example for `context.ts`**:

   - The `context.ts` file can have a structure similar to this:

   ```typescript
   import { ChatCompletionMessageParam } from 'openai/resources';

   export const CONTEXT: ChatCompletionMessageParam[] = [
     {
       role: 'system',
       content: `I am Lucía, the personal assistant. My task is to manage everything related to the user and provide information when needed.`,
     },
     // Add more relevant information about the user here. 👇🏻
   ];
   ```

4. **How to Customize Lucía**:
   - Simply modify the `context.ts` file to include all the relevant information about the person you want Lucía to assist.
   - You can include details about their life, projects, goals, preferences, etc.

### Requirements

1. **Node.js**: The project requires **Node.js v20.15.1**. Please ensure you are using this version or later.

   - You can check your Node.js version by running:

   ```bash
   node -v
   ```

   - If you need to update Node.js, you can download the latest version from [nodejs.org](https://nodejs.org/).

2. **Yarn**: The project requires **Yarn v1.22.19** for dependency management.

   - To check your Yarn version, run:

   ```bash
   yarn -v
   ```

   - If you don't have Yarn installed or need to update it, you can install version 1.22.19 using the following:

   ```bash
   npm install --global yarn@1.22.19
   ```

3. **Install dependencies**: Run `yarn install` to install the necessary dependencies.

### Installation Process

To set up Lucía and start using it, follow these steps:

1. **Clone the repository**:

   If you haven't done so already, clone the repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/luc-ia.git
   cd luc-ia
   ```

2. **Install dependencies**:

   Run the following command to install the required dependencies:

   ```bash
   yarn install
   ```

3. **Configure the context**:

   - Navigate to `/src/openai/context.ts`.
   - Insert the relevant details about the user you want Lucía to assist.

4. **Run the server**:

   After configuring the context, start the application with:

   ```bash
   yarn start
   ```

   This will launch the server, and Lucía will be ready to handle queries.

### Swagger Documentation

Once the server is running, you can access the API opening the browser and going to [http://localhost:3000/api](http://localhost:3000/api).

### Running in Production

To run the application in production mode, you can use the following command:

```bash
yarn start:prod
```

This will optimize the build and start the server in production mode.

### Contributing

If you wish to contribute to the project, please open a **pull request**. Ensure you don't include the `context.ts` file with the user's personal information.

### License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for more details.
