import * as isArrayOfArrayNamespace from '../../../../sources/cores/arrays/isArrayOfArray.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfArraySuite = Benchmark.Suite( 'isArrayOfArrayNamespace.isArrayOfArray', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfArray()', Testing.iterateOverDataMap( isArrayOfArrayNamespace.isArrayOfArray ), Testing.createBenchmarkOptions() )

const isNotArrayOfArraySuite = Benchmark.Suite( 'isArrayOfArrayNamespace.isNotArrayOfArray', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfArray()', Testing.iterateOverDataMap( isArrayOfArrayNamespace.isNotArrayOfArray ), Testing.createBenchmarkOptions() )

export { isArrayOfArraySuite,isNotArrayOfArraySuite }

