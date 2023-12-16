
# Setup
Install the packages


    npm install --save-dev typescript ts-node nodemon
    

Create a tsconfig file

    npx tsc --init --rootDir src --outDir build \
        --esModuleInterop --resolveJsonModule \
        --module commonjs --allowJs true
        
Make sure to disabled strict type checking or you may run into the following errors:

    error TS7016: Could not find a declaration file for module 'izy-proxy/index'. implicitly has an 'any' type.

# CLI
You can not directly launch typescript from the CLI interface. Therefore, all the CLI actions should be referenced from dist folder.

# Web payloads using Webpack
Install the dependencies

    npm install webpack webpack-cli ts-loader html-webpack-plugin --save-dev
    

Make sure to set the Module Variables for __dirname so that it resolves to the correct path. 
    
    
# Handling async JSONIO Interfaces
The package runner will detect async function implementations in the native Javascript runtime using `.constructor.name` property. In order to emit async/await without transpilation, you need to set the target to ES2017 or later and ES3, ES5, ES2015 and ES2016 will not work.

# Links
* [github]
* location: `apps/typescript`

# ChangeLog
## V7.2
* 7200001: migrate from legacy


[github]: https://github.com/izyware/typescript
