import * as isfloat64arrayNamespace from '../../../../sources/cores/typed-arrays/isFloat64Array.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFloat64ArraySuite = Benchmark.Suite( 'isfloat64arrayNamespace.isFloat64Array', Testing.createSuiteOptions() )
                                     .add( 'isFloat64Array()', Testing.iterateOverDataMap( isfloat64arrayNamespace.isFloat64Array ), Testing.createBenchmarkOptions() )

const isNotFloat64ArraySuite = Benchmark.Suite( 'isfloat64arrayNamespace.isNotFloat64Array', Testing.createSuiteOptions() )
                                     .add( 'isNotFloat64Array()', Testing.iterateOverDataMap( isfloat64arrayNamespace.isNotFloat64Array ), Testing.createBenchmarkOptions() )

export { isFloat64ArraySuite,isNotFloat64ArraySuite }

