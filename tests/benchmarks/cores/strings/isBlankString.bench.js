import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isBlankStringNamespace from '../../../../sources/cores/strings/isBlankString.js'

const isBlankStringSuite = Benchmark.Suite( 'isBlankStringNamespace.isBlankString', Testing.createSuiteOptions() )
                                     .add( 'isBlankString()', Testing.iterateOverDataMap( isBlankStringNamespace.isBlankString ), Testing.createBenchmarkOptions() )

const isNotBlankStringSuite = Benchmark.Suite( 'isBlankStringNamespace.isNotBlankString', Testing.createSuiteOptions() )
                                     .add( 'isNotBlankString()', Testing.iterateOverDataMap( isBlankStringNamespace.isNotBlankString ), Testing.createBenchmarkOptions() )

export { isBlankStringSuite,isNotBlankStringSuite }

