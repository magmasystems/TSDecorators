const config = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',
        // Allows for the use of imports
        allowImportExportEverywhere: true,
        "project": "tsconfig.json",
    },
    plugins: ['@typescript-eslint', 'import', 'node'],
    rules: {
        'import/no-unresolved': 'error',
        'import/named': 'error',

        'comma-dangle': ['warn', 'always-multiline'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/await-thenable': 'warn',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        'class-methods-use-this': 0,
        'guard-for-in': 0,
        'lines-between-class-members': 0,
        'next-line brace-style': 0,
        'no-continue': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-proto': 0,
        'no-restricted-syntax': 0,

        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "import/prefer-default-export": 'off'
    },
    settings: {
        'import/ignore': ['node_modules'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.mjs', '.d.ts'],
                paths: ['node_modules/', 'node_modules/@types/'],
            },
        },
        'html/html-extensions': ['.html'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
    },
    "overrides": [
        {
            "files": ["*.test.js", "*.spec.js"],
            "rules": {
                "no-unused-expressions": "off"
            }
        }
    ]
};

module.exports = config;
