
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isCelsiusNamespace from '../../../../sources/physics/temperatures/isCelsius.js'

const isCelsiusSuite = Benchmark.Suite( 'isCelsiusNamespace.isCelsius', Testing.createSuiteOptions() )
                                     .add( 'isCelsius()', Testing.iterateOverDataMap( isCelsiusNamespace.isCelsius ), Testing.createBenchmarkOptions() )
const isNotCelsiusSuite = Benchmark.Suite( 'isCelsiusNamespace.isNotCelsius', Testing.createSuiteOptions() )
                                     .add( 'isNotCelsius()', Testing.iterateOverDataMap( isCelsiusNamespace.isNotCelsius ), Testing.createBenchmarkOptions() )

export { isCelsiusSuite,isNotCelsiusSuite }

