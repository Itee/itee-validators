
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isBooleanNamespace from '../../../../sources/cores/booleans/isBoolean.js'

const isBooleanSuite = Benchmark.Suite( 'isBooleanNamespace.isBoolean', Testing.createSuiteOptions() )
                                     .add( 'isBoolean()', Testing.iterateOverDataMap( isBooleanNamespace.isBoolean ), Testing.createBenchmarkOptions() )
                                     .add( 'isBoolean_alt()', Testing.iterateOverDataMap( isBooleanNamespace.isBoolean_alt ), Testing.createBenchmarkOptions() )

const isNotBooleanSuite = Benchmark.Suite( 'isBooleanNamespace.isNotBoolean', Testing.createSuiteOptions() )
                                     .add( 'isNotBoolean()', Testing.iterateOverDataMap( isBooleanNamespace.isNotBoolean ), Testing.createBenchmarkOptions() )
                                     .add( 'isNotBoolean_negbase()', Testing.iterateOverDataMap( isBooleanNamespace.isNotBoolean_negbase ), Testing.createBenchmarkOptions() )

export { isBooleanSuite,isNotBooleanSuite }

