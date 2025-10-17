
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isBigUint64ArrayNamespace from '../../../../sources/cores/typed-arrays/isBigUint64Array.js'

const isBigUint64ArraySuite = Benchmark.Suite( 'isBigUint64ArrayNamespace.isBigUint64Array', Testing.createSuiteOptions() )
                                     .add( 'isBigUint64Array()', Testing.iterateOverDataMap( isBigUint64ArrayNamespace.isBigUint64Array ), Testing.createBenchmarkOptions() )

const isNotBigUint64ArraySuite = Benchmark.Suite( 'isBigUint64ArrayNamespace.isNotBigUint64Array', Testing.createSuiteOptions() )
                                     .add( 'isNotBigUint64Array()', Testing.iterateOverDataMap( isBigUint64ArrayNamespace.isNotBigUint64Array ), Testing.createBenchmarkOptions() )

export { isBigUint64ArraySuite,isNotBigUint64ArraySuite }

