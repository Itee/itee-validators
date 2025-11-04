import { playwrightLauncher } from '@web/test-runner-playwright'
import { iteeReporter }       from '../itee-reporter.mjs'

export default {
    files:       [
        // 'tests/units/builds/itee-validators.units.esm.js',
        // OR
        // 'tests/units/cores/arrays/*.unit.mjs',
        // OR very slow
        'tests/units/**/*.unit.mjs',
        '!tests/units/builds/**',
        '!tests/units/file-system/**',
    ],
    debug:       false,
    nodeResolve: true,
    browsers:    [
        playwrightLauncher( { product: 'chromium' } ),
        playwrightLauncher( { product: 'webkit' } ),
        playwrightLauncher( { product: 'firefox' } ),
    ],
    // reporters:   [
    //     iteeReporter( {
    //         reportResults:  false,
    //         reportProgress: false
    //     } )
    // ]
}