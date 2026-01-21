import * as isarrayofobjectNamespace from '../../../../sources/cores/arrays/isArrayOfObject.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfObjectSuite = Benchmark.Suite( 'isarrayofobjectNamespace.isArrayOfObject', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfObject()', Testing.iterateOverDataMap( isarrayofobjectNamespace.isArrayOfObject ), Testing.createBenchmarkOptions() )

const isNotArrayOfObjectSuite = Benchmark.Suite( 'isarrayofobjectNamespace.isNotArrayOfObject', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfObject()', Testing.iterateOverDataMap( isarrayofobjectNamespace.isNotArrayOfObject ), Testing.createBenchmarkOptions() )

export { isArrayOfObjectSuite,isNotArrayOfObjectSuite }

