
import Benchmark   from 'benchmark'
import { Testing }      from 'itee-utils'
import * as isArrayOfMultiElementNamespace from '../../../../sources/cores/arrays/isArrayOfMultiElement.js'

const isArrayOfMultiElementSuite = Benchmark.Suite( 'isArrayOfMultiElementNamespace.isArrayOfMultiElement', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfMultiElement()', Testing.iterateOverDataMap( isArrayOfMultiElementNamespace.isArrayOfMultiElement ), Testing.createBenchmarkOptions() )

export { isArrayOfMultiElementSuite }

