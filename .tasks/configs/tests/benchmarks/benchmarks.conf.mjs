import { jsonReporter }         from '@itee/json-reporter'
import { playwrightLauncher }   from '@web/test-runner-playwright'
import { join }                 from 'node:path'
import { nodeModulesDirectory } from '../../../_utils.mjs'


export default {
    files:          [
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
        path:   join( nodeModulesDirectory, '@itee/benchmarks-framework/benchmarks-framework.js' ),
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
        jsonReporter( {
            reportProgress: true
        } )
    ]
}