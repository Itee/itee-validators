import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isEmptyStringNamespace from '../../../../sources/cores/strings/isEmptyString.js'

const isEmptyStringSuite = Benchmark.Suite( 'isEmptyStringNamespace.isEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isEmptyString()', Testing.iterateOverDataMap( isEmptyStringNamespace.isEmptyString ), Testing.createBenchmarkOptions() )

const isNotEmptyStringSuite = Benchmark.Suite( 'isEmptyStringNamespace.isNotEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyString()', Testing.iterateOverDataMap( isEmptyStringNamespace.isNotEmptyString ), Testing.createBenchmarkOptions() )

export { isEmptyStringSuite,isNotEmptyStringSuite }

