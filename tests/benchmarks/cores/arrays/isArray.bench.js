import * as isArrayNamespace from '../../../../sources/cores/arrays/isArray.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArraySuite = Benchmark.Suite( 'isArrayNamespace.isArray', Testing.createSuiteOptions() )
                                     .add( 'isArray()', Testing.iterateOverDataMap( isArrayNamespace.isArray ), Testing.createBenchmarkOptions() )
                                     .add( 'isArray_0()', Testing.iterateOverDataMap( isArrayNamespace.isArray_0 ), Testing.createBenchmarkOptions() )

const isNotArraySuite = Benchmark.Suite( 'isArrayNamespace.isNotArray', Testing.createSuiteOptions() )
                                     .add( 'isNotArray()', Testing.iterateOverDataMap( isArrayNamespace.isNotArray ), Testing.createBenchmarkOptions() )
                                     .add( 'isNotArray_0()', Testing.iterateOverDataMap( isArrayNamespace.isNotArray_0 ), Testing.createBenchmarkOptions() )

export { isArraySuite,isNotArraySuite }

