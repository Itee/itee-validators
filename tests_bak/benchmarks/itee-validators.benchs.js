/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

// #if IS_FRONTEND_SPECIFIC
import './cores/_cores.benchs'
//import './maths/_maths.benchs'
//import './physics/_physics.benchs'
// #endif

// #if IS_BACKEND_SPECIFIC
import * as benchmarks from './_benchmarks.benchs'

for (const benchmark of Object.values(benchmarks)) {
    benchmark.run()
}
// #endif
