import * as isfahrenheitNamespace from '../../../../sources/physics/temperatures/isFahrenheit.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFahrenheitSuite = Benchmark.Suite( 'isfahrenheitNamespace.isFahrenheit', Testing.createSuiteOptions() )
                                     .add( 'isFahrenheit()', Testing.iterateOverDataMap( isfahrenheitNamespace.isFahrenheit ), Testing.createBenchmarkOptions() )

const isNotFahrenheitSuite = Benchmark.Suite( 'isfahrenheitNamespace.isNotFahrenheit', Testing.createSuiteOptions() )
                                     .add( 'isNotFahrenheit()', Testing.iterateOverDataMap( isfahrenheitNamespace.isNotFahrenheit ), Testing.createBenchmarkOptions() )

export { isFahrenheitSuite,isNotFahrenheitSuite }

