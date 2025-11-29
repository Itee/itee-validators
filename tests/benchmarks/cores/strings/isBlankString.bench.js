import * as isBlankStringNamespace from '../../../../sources/cores/strings/isBlankString.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isBlankStringSuite = Benchmark.Suite( 'isBlankStringNamespace.isBlankString', Testing.createSuiteOptions() )
                                     .add( 'isBlankString()', Testing.iterateOverDataMap( isBlankStringNamespace.isBlankString ), Testing.createBenchmarkOptions() )

const isNotBlankStringSuite = Benchmark.Suite( 'isBlankStringNamespace.isNotBlankString', Testing.createSuiteOptions() )
                                     .add( 'isNotBlankString()', Testing.iterateOverDataMap( isBlankStringNamespace.isNotBlankString ), Testing.createBenchmarkOptions() )

export { isBlankStringSuite,isNotBlankStringSuite }

