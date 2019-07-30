/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module config
 * @description The configuration file of the eslint plugin
 *
 */

/**
 * Will create an appropriate configuration object for eslint
 *
 * @generator
 * @returns {object} The eslint configuration
 */
function CreateEslintConfiguration () {

    return {
        env: {
            'browser': true,
            'node':    true,
            'es6':     true
        },
        globals: {
            'BigInt64Array':  "readonly",
            'BigUint64Array': "readonly"
        },
        parserOptions: {
            ecmaVersion: 6,
            sourceType:  'module'
        },
        extends: [
            'eslint:recommended'
        ],
        plugins: [
            'mocha'
        ],
        rules: {
            'no-multiple-empty-lines':  [ 1, { 'max': 2 } ],
            'no-mixed-spaces-and-tabs': 'off',
            'mocha/no-exclusive-tests': 'error',
            'no-console':               'off',
            'no-multi-spaces':          [
                'error', {
                    exceptions: {
                        'ImportDeclaration':  true,
                        'VariableDeclarator': true
                    }
                }
            ],
            'key-spacing': [
                'error', {
                    'align': {
                        'beforeColon': false,
                        'afterColon':  true,
                        'on':          'value'
                    }
                }
            ]

        }
    }

}

module.exports = CreateEslintConfiguration()
