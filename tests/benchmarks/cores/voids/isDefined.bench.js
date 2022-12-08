
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isDefinedNamespace from '../../../../sources/cores/voids/isDefined.js'

const isDefinedSuite = Benchmark.Suite( 'isDefinedNamespace.isDefined', Testing.createSuiteOptions() )
                                     .add( 'isDefined()', Testing.iterateOverDataMap( isDefinedNamespace.isDefined ), Testing.createBenchmarkOptions() )
const isNotDefinedSuite = Benchmark.Suite( 'isDefinedNamespace.isNotDefined', Testing.createSuiteOptions() )
                                     .add( 'isNotDefined()', Testing.iterateOverDataMap( isDefinedNamespace.isNotDefined ), Testing.createBenchmarkOptions() )

export { isDefinedSuite,isNotDefinedSuite }

