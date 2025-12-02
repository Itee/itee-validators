import * as isCelsiusNamespace from '../../../../sources/physics/temperatures/isCelsius.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isCelsiusSuite = Benchmark.Suite( 'isCelsiusNamespace.isCelsius', Testing.createSuiteOptions() )
                                     .add( 'isCelsius()', Testing.iterateOverDataMap( isCelsiusNamespace.isCelsius ), Testing.createBenchmarkOptions() )

const isNotCelsiusSuite = Benchmark.Suite( 'isCelsiusNamespace.isNotCelsius', Testing.createSuiteOptions() )
                                     .add( 'isNotCelsius()', Testing.iterateOverDataMap( isCelsiusNamespace.isNotCelsius ), Testing.createBenchmarkOptions() )

export { isCelsiusSuite,isNotCelsiusSuite }

