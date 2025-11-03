import js      from '@eslint/js'
import mocha   from 'eslint-plugin-mocha'
import {
    defineConfig,
    globalIgnores
}              from 'eslint/config'
import globals from 'globals'


export default defineConfig( [
    globalIgnores( [
        '.github',
        '.idea',
        'builds',
        'docs',
        'sources/cores/tests/*.js'
    ] ),
    {
        linterOptions: {
            noInlineConfig:                false,
            reportUnusedDisableDirectives: 'error',
            reportUnusedInlineConfigs:     'error'
        }
    },
    {
        name:    'sources/common',
        files:   [ 'sources/**/*.js' ],
        ignores: [
            'sources/dom/',
            'sources/file-system/**'
        ],
        plugins: { js },
        extends: [ 'js/recommended' ],
        rules:   {
            'no-multiple-empty-lines':  [
                'error',
                {
                    'max': 2
                }
            ],
            'no-mixed-spaces-and-tabs': 'error',
            'no-console':               'warn',
            'no-unused-vars':           'error',
            'no-multi-spaces':          [
                'error',
                {
                    'exceptions': {
                        'Property':             true,
                        'ImportDeclaration':    true,
                        'VariableDeclarator':   true,
                        'AssignmentExpression': true
                    }
                }
            ],
            'key-spacing':              [
                'error',
                {
                    'align': {
                        'beforeColon': false,
                        'afterColon':  true,
                        'on':          'value'
                    }
                }
            ]
        }
    },
    {
        name:            'sources/frontend',
        files:           [ 'sources/dom/*' ],
        ignores:         [ 'sources/file-system/**' ],
        plugins:         { js },
        extends:         [ 'js/recommended' ],
        languageOptions: { globals: globals.browser }
    },
    {
        name:            'sources/backend',
        files:           [ 'sources/file-system/**' ],
        ignores:         [ 'sources/dom/*' ],
        plugins:         { js },
        extends:         [ 'js/recommended' ],
        languageOptions: { globals: globals.node }
    },
    {
        name:    'tests/benchmarks',
        files:   [ 'tests/benchmarks/**/*.js' ],
        ignores: [ 'tests/benchmarks/builds/*' ],
        plugins: { js },
        extends: [ 'js/recommended' ],
    },
    {
        name:            'tests/units',
        files:           [ 'tests/units/**/*.mjs' ],
        ignores:         [ 'tests/units/builds/*' ],
        plugins:         { js },
        extends:         [ 'js/recommended' ],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
            },
        }
    },
    {
        files:   [ 'tests/units/**/*.mjs' ],
        ignores: [ 'tests/units/builds/*' ],
        ...mocha.configs.recommended,

        // rules: {
        //     // @see https://github.com/lo1tuma/eslint-plugin-mocha/blob/b2d8c9e0933f4200c6030bbacb5896951a0cd85d/docs/rules/no-setup-in-describe.md
        //     'no-setup-in-describe': 'off'
        // }
    },
    // Todo: fix
    {
        name:  'to/fix',
        files: [ 'tests/units/cores/tests/isTestUnitGenerator.unit.js' ],
        rules: {
            'no-unused-vars': 'warn',
        }
    },
] )
