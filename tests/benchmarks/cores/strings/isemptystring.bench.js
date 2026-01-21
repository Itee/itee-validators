import * as isemptystringNamespace from '../../../../sources/cores/strings/isEmptyString.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyStringSuite = Benchmark.Suite( 'isemptystringNamespace.isEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isEmptyString()', Testing.iterateOverDataMap( isemptystringNamespace.isEmptyString ), Testing.createBenchmarkOptions() )

const isNotEmptyStringSuite = Benchmark.Suite( 'isemptystringNamespace.isNotEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyString()', Testing.iterateOverDataMap( isemptystringNamespace.isNotEmptyString ), Testing.createBenchmarkOptions() )

export { isEmptyStringSuite,isNotEmptyStringSuite }

