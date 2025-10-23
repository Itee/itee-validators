const lintConf = [
    'configs/**/*.js',
    'sources/**/*.js',
    '!sources/cores/tests/isTestUnitGenerator.js',
    'tests/**/*.js',
    '!tests/**/builds/*.js',
    '!tests/bundles/**/*.js'
]

export { lintConf }