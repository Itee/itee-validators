
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isEmptyNamespace from '../../../../sources/cores/voids/isEmpty.js'

const isEmptySuite = Benchmark.Suite( 'isEmptyNamespace.isEmpty', Testing.createSuiteOptions() )
                                     .add( 'isEmpty()', Testing.iterateOverDataMap( isEmptyNamespace.isEmpty ), Testing.createBenchmarkOptions() )
const isNotEmptySuite = Benchmark.Suite( 'isEmptyNamespace.isNotEmpty', Testing.createSuiteOptions() )
                                     .add( 'isNotEmpty()', Testing.iterateOverDataMap( isEmptyNamespace.isNotEmpty ), Testing.createBenchmarkOptions() )

export { isEmptySuite,isNotEmptySuite }

