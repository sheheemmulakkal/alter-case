<div align="center">
    <h1><span style="color:#C1282D">Alter</span> Case</h1>
    <h4 style="color:#333333">Transforming Text, Transforming Possibilities: Your all-in-one npm package for hassle-free text casing conversions.</h4>
    <br>
    <br>
    
</div>
   <div align="center">

![NPM License](https://img.shields.io/npm/l/alter-case)
![npm bundle size](https://img.shields.io/bundlephobia/min/alter-case)
![NPM Version](https://img.shields.io/npm/v/alter-case)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/sheheemmulakkal/alter-case)
![NPM Downloads](https://img.shields.io/npm/dw/alter-case)

<br>

![GitHub followers](https://img.shields.io/github/followers/sheheemmulakkal?link=https%3A%2F%2Fgithub.com%2Fsheheemmulakkal)

<h6 style="color:#333333">Easily convert text to lowercase, UPPERCASE, Title Case, and Sentence case with a single npm package.</h6> 
<br>
<p>Welcome to Alter Case, the comprehensive npm package designed to simplify text casing transformations. Whether you need to convert words to lowercase, UPPERCASE, Title Case, or sentence case, our versatile module offers an intuitive and efficient solution. With a user-friendly interface, seamless integration, and robust performance, Alter Case is the go-to choice for developers looking to enhance their text formatting capabilities.</p>

</div>

## Installing

Using npm:

```bash
$ npm install alter-case
```

Once the package is installed, you can use this by `import` or `require`

```js
const { toTitleCase, toSentenceCase } = require("alter-case");
```

or


```js
import { toTitleCase, toSentenceCase } from "alter-case";
```

## Example

> **Note**: Only string inputs are allowed  
> The function only compete with the string inputs. Other data types will throw an error with entered data types

```js
// import or require the package
import { toTileCase, toSentenseCase } from "alter-case";

const title = toTitleCase("this is the sample title");
console.log(title);
// This Is The Sample Title
```

## Available functions

| function       | Description                                                                                                          | SampleResponse                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| toUpperCase    | Coverts every letters to uppercase                                                                                   | `SAMPLE RESULT`                                 |
| toLowerCase    | Coverts every letters to lowercase                                                                                   | `sample result`                                 |
| toTitleCase    | Coverts first letter of every words into uppercase                                                                   | `Sample Result`                                 |
| toSentenceCase | Coverts first letter of every sentence to uppercase and add a space after the dot, before starting the next sentence | `This is sample result. This is sentence case.` |

> Note: The sentence is calculated by `dot` or `period` or `.`  
> A sentense is measured by the occurance of `dot` or `period` or `.`. So the next word after the dot will be the uppercase and the sentence starts with a space

# Contribution Alert

We welcome and encourage contributions from the community! If you're interested in improving Alter Case, fixing bugs, or adding new features, please check out our Contribution Guidelines. We appreciate your support and look forward to collaborating with you!

## Guidelines

- ### Branching Strategy

  - **Develop Branch:** The `develop` branch is the main integration branch. Please base your work on this branch. Create feature branches off `develop` and submit pull requests back to `develop` when your work is ready

- ### Development Workflow

  1. Fork the repository.
  2. Clone your forked repository locally.
  3. Checkout the `develop` branch: `git checkout develop`.
  4. Create a feature branch: `git checkout -b feature/your-feature-name`.
  5. Make your changes, commit, and push to your feature branch.
  6. Open a pull request against the `develop` branch.

- ### Typescript

  - Alter Case is written in TypeScript. Make sure to adhere to TypeScript best practices and use the appropriate TypeScript features in your contributions.

- ### Code Style and Linting
  - Use a 2-space indentation throughout the codebase.
  - Regularly clean up and remove unused variables from your code to maintain clarity and reduce clutter.
  - Use double quotes for string literals consistently.
