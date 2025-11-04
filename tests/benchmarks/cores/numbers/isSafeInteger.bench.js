import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isSafeIntegerNamespace from '../../../../sources/cores/numbers/isSafeInteger.js'

const isMaxSafeIntegerSuite = Benchmark.Suite( 'isSafeIntegerNamespace.isMaxSafeInteger', Testing.createSuiteOptions() )
                                     .add( 'isMaxSafeInteger()', Testing.iterateOverDataMap( isSafeIntegerNamespace.isMaxSafeInteger ), Testing.createBenchmarkOptions() )

const isMinSafeIntegerSuite = Benchmark.Suite( 'isSafeIntegerNamespace.isMinSafeInteger', Testing.createSuiteOptions() )
                                     .add( 'isMinSafeInteger()', Testing.iterateOverDataMap( isSafeIntegerNamespace.isMinSafeInteger ), Testing.createBenchmarkOptions() )

export { isMaxSafeIntegerSuite,isMinSafeIntegerSuite }

