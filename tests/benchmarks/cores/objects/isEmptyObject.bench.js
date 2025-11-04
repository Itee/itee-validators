import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isEmptyObjectNamespace from '../../../../sources/cores/objects/isEmptyObject.js'

const isEmptyObjectSuite = Benchmark.Suite( 'isEmptyObjectNamespace.isEmptyObject', Testing.createSuiteOptions() )
                                     .add( 'isEmptyObject()', Testing.iterateOverDataMap( isEmptyObjectNamespace.isEmptyObject ), Testing.createBenchmarkOptions() )

const isNotEmptyObjectSuite = Benchmark.Suite( 'isEmptyObjectNamespace.isNotEmptyObject', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyObject()', Testing.iterateOverDataMap( isEmptyObjectNamespace.isNotEmptyObject ), Testing.createBenchmarkOptions() )

export { isEmptyObjectSuite,isNotEmptyObjectSuite }

