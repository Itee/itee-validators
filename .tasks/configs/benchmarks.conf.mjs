import { playwrightLauncher }   from '@web/test-runner-playwright'
import { packageRootDirectory } from '../_utils.mjs'
import { iteeReporter }         from '../itee-reporter.mjs'

export default {
    files:          [
        // 'tests/benchmarks/cores/arrays/isArray.bench.js',

        // 'tests/benchmarks/cores/arrays/*.bench.js',
        // 'tests/benchmarks/cores/booleans/*.bench.js',
        // 'tests/benchmarks/cores/functions/*.bench.js',
        // 'tests/benchmarks/cores/numbers/*.bench.js',
        // 'tests/benchmarks/cores/objects/*.bench.js',
        // 'tests/benchmarks/cores/strings/*.bench.js',
        // 'tests/benchmarks/cores/symbols/*.bench.js',
        // 'tests/benchmarks/cores/typed-arrays/*.bench.js',
        // 'tests/benchmarks/cores/voids/*.bench.js',
        // 'tests/benchmarks/cores/**',
        // 'tests/benchmarks/dom/**',
        // 'tests/benchmarks/physics/**',
        // OR
        // 'tests/benchmarks/builds/itee-validators.benchmarks.iife.js',
        // OR
        'tests/benchmarks/**/*.bench.js',
        '!tests/benchmarks/builds/**',
        '!tests/benchmarks/file-system/**',
    ],
    debug:          false,
    nodeResolve:    true,
    browsers:       [
        playwrightLauncher( { product: 'chromium' } ),
        playwrightLauncher( { product: 'webkit' } ),
        playwrightLauncher( { product: 'firefox' } ),
    ],
    testFramework:  {
        path:   packageRootDirectory + '/.tasks/itee-benchmarks-framework.js',
        config: {
            foo: 'bar'
        }
    },
    testRunnerHtml: testFramework => `
        <!DOCTYPE html>
        <html>
          <body>
            <script type="module" src="node_modules/lodash/lodash.js"></script>
            <script type="module" src="node_modules/platform/platform.js"></script>
            <script type="module" src="node_modules/benchmark/benchmark.js"></script>
            <script type="module" src="${ testFramework }"></script>
          </body>
        </html>
    `,
    reporters:      [
        iteeReporter( {
            reportProgress: true
        } )
    ]
}