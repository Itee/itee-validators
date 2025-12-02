import * as isFahrenheitNamespace from '../../../../sources/physics/temperatures/isFahrenheit.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFahrenheitSuite = Benchmark.Suite( 'isFahrenheitNamespace.isFahrenheit', Testing.createSuiteOptions() )
                                     .add( 'isFahrenheit()', Testing.iterateOverDataMap( isFahrenheitNamespace.isFahrenheit ), Testing.createBenchmarkOptions() )

const isNotFahrenheitSuite = Benchmark.Suite( 'isFahrenheitNamespace.isNotFahrenheit', Testing.createSuiteOptions() )
                                     .add( 'isNotFahrenheit()', Testing.iterateOverDataMap( isFahrenheitNamespace.isNotFahrenheit ), Testing.createBenchmarkOptions() )

export { isFahrenheitSuite,isNotFahrenheitSuite }

