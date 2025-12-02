import * as isEmptyNamespace from '../../../../sources/cores/voids/isEmpty.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptySuite = Benchmark.Suite( 'isEmptyNamespace.isEmpty', Testing.createSuiteOptions() )
                                     .add( 'isEmpty()', Testing.iterateOverDataMap( isEmptyNamespace.isEmpty ), Testing.createBenchmarkOptions() )

const isNotEmptySuite = Benchmark.Suite( 'isEmptyNamespace.isNotEmpty', Testing.createSuiteOptions() )
                                     .add( 'isNotEmpty()', Testing.iterateOverDataMap( isEmptyNamespace.isNotEmpty ), Testing.createBenchmarkOptions() )

export { isEmptySuite,isNotEmptySuite }

