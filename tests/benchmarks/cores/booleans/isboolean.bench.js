import * as isbooleanNamespace from '../../../../sources/cores/booleans/isBoolean.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isBooleanSuite = Benchmark.Suite( 'isbooleanNamespace.isBoolean', Testing.createSuiteOptions() )
                                     .add( 'isBoolean()', Testing.iterateOverDataMap( isbooleanNamespace.isBoolean ), Testing.createBenchmarkOptions() )
                                     .add( 'isBoolean_alt()', Testing.iterateOverDataMap( isbooleanNamespace.isBoolean_alt ), Testing.createBenchmarkOptions() )

const isNotBooleanSuite = Benchmark.Suite( 'isbooleanNamespace.isNotBoolean', Testing.createSuiteOptions() )
                                     .add( 'isNotBoolean()', Testing.iterateOverDataMap( isbooleanNamespace.isNotBoolean ), Testing.createBenchmarkOptions() )
                                     .add( 'isNotBoolean_negbase()', Testing.iterateOverDataMap( isbooleanNamespace.isNotBoolean_negbase ), Testing.createBenchmarkOptions() )

export { isBooleanSuite,isNotBooleanSuite }

