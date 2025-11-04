import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isArrayOfMultiElementNamespace from '../../../../sources/cores/arrays/isArrayOfMultiElement.js'

const isArrayOfMultiElementSuite = Benchmark.Suite( 'isArrayOfMultiElementNamespace.isArrayOfMultiElement', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfMultiElement()', Testing.iterateOverDataMap( isArrayOfMultiElementNamespace.isArrayOfMultiElement ), Testing.createBenchmarkOptions() )

export { isArrayOfMultiElementSuite }

