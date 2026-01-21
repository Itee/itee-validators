import * as isarrayNamespace from '../../../../sources/cores/arrays/isArray.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArraySuite = Benchmark.Suite( 'isarrayNamespace.isArray', Testing.createSuiteOptions() )
                                     .add( 'isArray()', Testing.iterateOverDataMap( isarrayNamespace.isArray ), Testing.createBenchmarkOptions() )
                                     .add( 'isArray_0()', Testing.iterateOverDataMap( isarrayNamespace.isArray_0 ), Testing.createBenchmarkOptions() )

const isNotArraySuite = Benchmark.Suite( 'isarrayNamespace.isNotArray', Testing.createSuiteOptions() )
                                     .add( 'isNotArray()', Testing.iterateOverDataMap( isarrayNamespace.isNotArray ), Testing.createBenchmarkOptions() )
                                     .add( 'isNotArray_0()', Testing.iterateOverDataMap( isarrayNamespace.isNotArray_0 ), Testing.createBenchmarkOptions() )

export { isArraySuite,isNotArraySuite }

