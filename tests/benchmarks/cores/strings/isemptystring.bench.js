import * as isemptystringNamespace from '../../../../sources/cores/strings/isEmptyString.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyStringSuite = Benchmark.Suite( 'isemptystringNamespace.isEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isEmptyString()', Testing.iterateOverDataMap( isemptystringNamespace.isEmptyString ), Testing.createBenchmarkOptions() )

const isNotEmptyStringSuite = Benchmark.Suite( 'isemptystringNamespace.isNotEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyString()', Testing.iterateOverDataMap( isemptystringNamespace.isNotEmptyString ), Testing.createBenchmarkOptions() )

export { isEmptyStringSuite,isNotEmptyStringSuite }

