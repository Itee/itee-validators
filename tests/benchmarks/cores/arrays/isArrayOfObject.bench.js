import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isArrayOfObjectNamespace from '../../../../sources/cores/arrays/isArrayOfObject.js'

const isArrayOfObjectSuite = Benchmark.Suite( 'isArrayOfObjectNamespace.isArrayOfObject', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfObject()', Testing.iterateOverDataMap( isArrayOfObjectNamespace.isArrayOfObject ), Testing.createBenchmarkOptions() )

const isNotArrayOfObjectSuite = Benchmark.Suite( 'isArrayOfObjectNamespace.isNotArrayOfObject', Testing.createSuiteOptions() )
                                     .add( 'isNotArrayOfObject()', Testing.iterateOverDataMap( isArrayOfObjectNamespace.isNotArrayOfObject ), Testing.createBenchmarkOptions() )

export { isArrayOfObjectSuite,isNotArrayOfObjectSuite }

