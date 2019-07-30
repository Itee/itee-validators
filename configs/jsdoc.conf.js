/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module config
 * @description The configuration file of the jsdoc plugin
 *
 */

/* eslint-env node */

/**
 * Will create an appropriate configuration object for jsdoc
 *
 * @generator
 * @returns {object} The jsdoc configuration
 */
function CreateJsdocConfiguration () {

    return {
        'tags': {
            'allowUnknownTags': false,
            'dictionaries':     [ 'jsdoc', 'closure' ]
        },
        'source': {
            'include':        [ 'README.md' ],
            'includePattern': '.+\\.js(doc|x)?$',
            'excludePattern': '(node_modules|documentation|builds|tests)'
        },
        'sourceType':   'module',
        'plugins':      [],
        'recurseDepth': 2,
        'opts':         {
            'template':    'node_modules/docdash/',
            'encoding':    'utf8',
            'destination': './documentation/API/',
            'recurse':     true,
            'verbose':     true,
            'private':     true
        },
        'templates': {
            'cleverLinks':    false,
            'monospaceLinks': false,
            'default':        {
                'includeDate': false
            }
        }
    }

}

module.exports = CreateJsdocConfiguration()
