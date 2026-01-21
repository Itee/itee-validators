import * as isstringNamespace from '../../../../sources/cores/strings/isString.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isStringSuite = Benchmark.Suite( 'isstringNamespace.isString', Testing.createSuiteOptions() )
                                     .add( 'isString()', Testing.iterateOverDataMap( isstringNamespace.isString ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_0()', Testing.iterateOverDataMap( isstringNamespace.isString_0 ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_1()', Testing.iterateOverDataMap( isstringNamespace.isString_1 ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_2()', Testing.iterateOverDataMap( isstringNamespace.isString_2 ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_3()', Testing.iterateOverDataMap( isstringNamespace.isString_3 ), Testing.createBenchmarkOptions() )
                                     .add( 'isString_4()', Testing.iterateOverDataMap( isstringNamespace.isString_4 ), Testing.createBenchmarkOptions() )

const isNotStringSuite = Benchmark.Suite( 'isstringNamespace.isNotString', Testing.createSuiteOptions() )
                                     .add( 'isNotString()', Testing.iterateOverDataMap( isstringNamespace.isNotString ), Testing.createBenchmarkOptions() )

export { isStringSuite,isNotStringSuite }

