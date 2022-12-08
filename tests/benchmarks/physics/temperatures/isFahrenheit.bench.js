
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isFahrenheitNamespace from '../../../../sources/physics/temperatures/isFahrenheit.js'

const isFahrenheitSuite = Benchmark.Suite( 'isFahrenheitNamespace.isFahrenheit', Testing.createSuiteOptions() )
                                     .add( 'isFahrenheit()', Testing.iterateOverDataMap( isFahrenheitNamespace.isFahrenheit ), Testing.createBenchmarkOptions() )
const isNotFahrenheitSuite = Benchmark.Suite( 'isFahrenheitNamespace.isNotFahrenheit', Testing.createSuiteOptions() )
                                     .add( 'isNotFahrenheit()', Testing.iterateOverDataMap( isFahrenheitNamespace.isNotFahrenheit ), Testing.createBenchmarkOptions() )

export { isFahrenheitSuite,isNotFahrenheitSuite }

