
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isEmptyStringNamespace from '../../../../sources/cores/strings/isEmptyString.js'

const isEmptyStringSuite = Benchmark.Suite( 'isEmptyStringNamespace.isEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isEmptyString()', Testing.iterateOverDataMap( isEmptyStringNamespace.isEmptyString ), Testing.createBenchmarkOptions() )
const isNotEmptyStringSuite = Benchmark.Suite( 'isEmptyStringNamespace.isNotEmptyString', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyString()', Testing.iterateOverDataMap( isEmptyStringNamespace.isNotEmptyString ), Testing.createBenchmarkOptions() )

export { isEmptyStringSuite,isNotEmptyStringSuite }

