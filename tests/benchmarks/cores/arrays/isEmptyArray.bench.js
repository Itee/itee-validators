import * as isEmptyArrayNamespace from '../../../../sources/cores/arrays/isEmptyArray.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyArraySuite = Benchmark.Suite( 'isEmptyArrayNamespace.isEmptyArray', Testing.createSuiteOptions() )
                                     .add( 'isEmptyArray()', Testing.iterateOverDataMap( isEmptyArrayNamespace.isEmptyArray ), Testing.createBenchmarkOptions() )

const isNotEmptyArraySuite = Benchmark.Suite( 'isEmptyArrayNamespace.isNotEmptyArray', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyArray()', Testing.iterateOverDataMap( isEmptyArrayNamespace.isNotEmptyArray ), Testing.createBenchmarkOptions() )

export { isEmptyArraySuite,isNotEmptyArraySuite }

