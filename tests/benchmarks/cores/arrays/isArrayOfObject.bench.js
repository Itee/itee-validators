import * as isArrayOfObjectNamespace from '../../../../sources/cores/arrays/isArrayOfObject.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfObjectSuite = Benchmark.Suite( 'isArrayOfObjectNamespace.isArrayOfObject', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfObject()', Testing.iterateOverDataMap( isArrayOfObjectNamespace.isArrayOfObject ), Testing.createBenchmarkOptions() )

const isNotArrayOfObjectSuite = Benchmark.Suite( 'isArrayOfObjectNamespace.isNotArrayOfObject', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfObject()', Testing.iterateOverDataMap( isArrayOfObjectNamespace.isNotArrayOfObject ), Testing.createBenchmarkOptions() )

export { isArrayOfObjectSuite,isNotArrayOfObjectSuite }

