import * as isArrayOfSingleElementNamespace from '../../../../sources/cores/arrays/isArrayOfSingleElement.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfSingleElementSuite = Benchmark.Suite( 'isArrayOfSingleElementNamespace.isArrayOfSingleElement', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfSingleElement()', Testing.iterateOverDataMap( isArrayOfSingleElementNamespace.isArrayOfSingleElement ), Testing.createBenchmarkOptions() )

export { isArrayOfSingleElementSuite }

