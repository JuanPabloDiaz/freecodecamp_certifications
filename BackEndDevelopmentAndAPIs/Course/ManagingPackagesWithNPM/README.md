---
layout: page
title: Managing Packages With NPM
permalink: /BackEndDevelopmentAndAPIs/Course/ManagingPackagesWithNPM/
---

<p  align="right"><a href="#" onclick="history.back(); return false;">Previous Page</a></p>

This is the boilerplate code for the Managing Packages With npm Challenges. Instructions for working on these challenges start at https://www.freecodecamp.org/learn/back-end-development-and-apis/managing-packages-with-npm/

1. Add your `name` as the author of the project in the `package.json` file.
2. Add a `description` to the `package.json` file.
3. Add a `keywords` field to the `package.json` file and give it an array value.
4. Add a `license` field to the `package.json` file.
5. Add a `version` field to the `package.json` file.
6. Add version `1.1.0` of the `@freecodecamp/example` package to the `dependencies` field of your `package.json` file.
7. In the dependencies section of your `package.json` file, change the version of `@freecodecamp/example` to match MAJOR version 1, MINOR version 2 and PATCH version 13
8. In the package.json file, your current rule for how npm may upgrade `@freecodecamp/example` is to use a specific version `(1.2.13)`. But now, you want to allow the latest `1.2.x` version.
   > Use the tilde `(~)` character to prefix the version of `@freecodecamp/example` in your dependencies, and allow npm to update it to any new patch release.
9. Use the caret (`^`) to prefix the version of `@freecodecamp/example` in your dependencies and allow npm to update it to any new MINOR release.
   > Note: The version numbers themselves should not be changed.
10. Remove the @freecodecamp/example package from your dependencies.
    > Note: Make sure you have the right amount of commas after removing it.

### Solution

```json
{
  "name": "fcc-learn-npm-package-json",
  "author": "Juan Diaz",
  "description": "A project created by Juan Diaz on feb 19 2025 for the Managing Packages with npm challenges on FreeCodeCamp",
  "keywords": ["freecodecamp", "npm", "challenge", "learn", "juan", "diaz"],
  "license": "MIT",
  "version": "1.0.0",
  "dependencies": {
    "@freecodecamp/example": "^1.2.13"
  }
}
```

<p align="right"><a href="#" onclick="scrollToTop(); return false;">Back to Top</a></p>
