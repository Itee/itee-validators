import * as isEmptyStringNamespace from '../../../../sources/cores/strings/isEmptyString.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyStringSuite = Benchmark.Suite( 'isEmptyStringNamespace.isEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isEmptyString()', Testing.iterateOverDataMap( isEmptyStringNamespace.isEmptyString ), Testing.createBenchmarkOptions() )

const isNotEmptyStringSuite = Benchmark.Suite( 'isEmptyStringNamespace.isNotEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyString()', Testing.iterateOverDataMap( isEmptyStringNamespace.isNotEmptyString ), Testing.createBenchmarkOptions() )

export { isEmptyStringSuite,isNotEmptyStringSuite }

