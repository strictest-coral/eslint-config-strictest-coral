# eslint-config-strictest-coral
strictest-coral's eslint rules.


## Installation

### Install this package

```cmd
npm i -D eslint-config-strictest-coral
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
    "extends": "strictest-coral"
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
3. Prevent code-smells
4. Optimize our code - unless it conflicts with cleaner code.