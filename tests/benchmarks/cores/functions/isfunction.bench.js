import * as isfunctionNamespace from '../../../../sources/cores/functions/isFunction.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFunctionSuite = Benchmark.Suite( 'isfunctionNamespace.isFunction', Testing.createSuiteOptions() )
                                     .add( 'isFunction()', Testing.iterateOverDataMap( isfunctionNamespace.isFunction ), Testing.createBenchmarkOptions() )

const isNotFunctionSuite = Benchmark.Suite( 'isfunctionNamespace.isNotFunction', Testing.createSuiteOptions() )
                                     .add( 'isNotFunction()', Testing.iterateOverDataMap( isfunctionNamespace.isNotFunction ), Testing.createBenchmarkOptions() )

export { isFunctionSuite,isNotFunctionSuite }

