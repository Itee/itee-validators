
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isArrayOfSingleElementNamespace from '../../../../sources/cores/arrays/isArrayOfSingleElement.js'

const isArrayOfSingleElementSuite = Benchmark.Suite( 'isArrayOfSingleElementNamespace.isArrayOfSingleElement', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfSingleElement()', Testing.iterateOverDataMap( isArrayOfSingleElementNamespace.isArrayOfSingleElement ), Testing.createBenchmarkOptions() )

export { isArrayOfSingleElementSuite }

