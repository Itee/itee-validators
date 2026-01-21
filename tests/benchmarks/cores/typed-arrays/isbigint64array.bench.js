import * as isbigint64arrayNamespace from '../../../../sources/cores/typed-arrays/isBigInt64Array.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isBigInt64ArraySuite = Benchmark.Suite( 'isbigint64arrayNamespace.isBigInt64Array', Testing.createSuiteOptions() )
                                     .add( 'isBigInt64Array()', Testing.iterateOverDataMap( isbigint64arrayNamespace.isBigInt64Array ), Testing.createBenchmarkOptions() )

const isNotBigInt64ArraySuite = Benchmark.Suite( 'isbigint64arrayNamespace.isNotBigInt64Array', Testing.createSuiteOptions() )
                                     .add( 'isNotBigInt64Array()', Testing.iterateOverDataMap( isbigint64arrayNamespace.isNotBigInt64Array ), Testing.createBenchmarkOptions() )

export { isBigInt64ArraySuite,isNotBigInt64ArraySuite }

