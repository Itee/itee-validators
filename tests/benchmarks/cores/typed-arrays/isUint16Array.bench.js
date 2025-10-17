
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isUint16ArrayNamespace from '../../../../sources/cores/typed-arrays/isUint16Array.js'

const isUint16ArraySuite = Benchmark.Suite( 'isUint16ArrayNamespace.isUint16Array', Testing.createSuiteOptions() )
                                     .add( 'isUint16Array()', Testing.iterateOverDataMap( isUint16ArrayNamespace.isUint16Array ), Testing.createBenchmarkOptions() )

const isNotUint16ArraySuite = Benchmark.Suite( 'isUint16ArrayNamespace.isNotUint16Array', Testing.createSuiteOptions() )
                                     .add( 'isNotUint16Array()', Testing.iterateOverDataMap( isUint16ArrayNamespace.isNotUint16Array ), Testing.createBenchmarkOptions() )

export { isUint16ArraySuite,isNotUint16ArraySuite }

