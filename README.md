# eslint-config-avc
Almog Vagman Ciprut's eslint rules.


## Installation

### Install this package

```cmd
npm i -D eslint-config-avc
```

### Install Peer Dependencies
```cmd
npm i -D eslint prettier typescript
```

## Usage
### Update package json
Add the following section to your package.json:

```JSON
"eslintConfig": {
    "extends": "avc"
  },
```

There is no need to include prettier config file (`.prettierrc.js`) or eslint config file (`.eslintrc.js`) files in your project.


## Rule Packages
1. [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) - for file naming, consistency, optimization and bug detection.
2. [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs) - for bug and code smell detection
3. [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) -  this plugin disables rules that conflict with prettier
4. [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) - prevents issues with import statements
5. [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) - runs prettier as eslint rules - if we have issues we might need to use [prettier-eslint](https://www.npmjs.com/package/prettier-eslint).
6. [@typescript-eslint/eslint-plugin](@typescript-eslint/eslint-plugin) - typescript rules.

## Reasoning
The rules added in this config are meant do achieve the following:
1. Enforce and define code-standard.
2. Prevent bugs
3. Prevent code-smells (make our code cleaner)
4. Optimize our code -unless it conflicts with cleaner code.

## Contribution
If you wise the add\modify\remove rules, please open a PR and state the following:
1. Rule\Package you are going to add\modify\remove.
2. Reasoning.

If you wish to deploy new version of this package run `publish` github action

## How to use with existing repositories
This config include many rules, that means that if you add it to an existing repository there is a big chance your lint check will fail, if it happens do the following:
1. If there are many failures - change those rules locally to warns and add a task to fix each rules individually. After fixing each rule remove your "override" of that rule (don't add it to your rules array with warn).
2. If there are only some failures, fix all of the together, don't set those rules as warns.
## Notice
Please avoid modifying rules in your repository, unless they are specific to it or you are working on "How to use with existing repositories".

Any rules that you wish to change and is relevant to every project, change in this config.