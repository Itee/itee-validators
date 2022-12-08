
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isObjectNamespace from '../../../../sources/cores/objects/isObject.js'

const isNotObjectSuite = Benchmark.Suite( 'isObjectNamespace.isNotObject', Testing.createSuiteOptions() )
                                     .add( 'isNotObject()', Testing.iterateOverDataMap( isObjectNamespace.isNotObject ), Testing.createBenchmarkOptions() )
const isObjectSuite = Benchmark.Suite( 'isObjectNamespace.isObject', Testing.createSuiteOptions() )
                                     .add( 'isObject()', Testing.iterateOverDataMap( isObjectNamespace.isObject ), Testing.createBenchmarkOptions() )

export { isNotObjectSuite,isObjectSuite }

