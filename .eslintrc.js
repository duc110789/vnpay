module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "window": true,
        "document": true,
        "localStorage": true,
        "fetch": true,
        "FormData": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": [
            2,
            "single"
        ],
        "react/jsx-uses-react": 2,
        "linebreak-style": 0,
        "react/forbid-prop-types" : 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "skipBlankLines": false
    }
};