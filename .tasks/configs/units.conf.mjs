import { playwrightLauncher } from '@web/test-runner-playwright'

export default {
    files:       [
        'tests/units/builds/itee-validators.units.esm.js',
        // 'tests/units/**/*.unit.js',
        // '!tests/units/file-system/**',
    ],
    nodeResolve: true,
    browsers:    [
        playwrightLauncher( { product: 'chromium' } ),
        playwrightLauncher( { product: 'webkit' } ),
        playwrightLauncher( { product: 'firefox' } ),
    ]
}