import * as isArrayOfMultiElementNamespace from '../../../../sources/cores/arrays/isArrayOfMultiElement.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfMultiElementSuite = Benchmark.Suite( 'isArrayOfMultiElementNamespace.isArrayOfMultiElement', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfMultiElement()', Testing.iterateOverDataMap( isArrayOfMultiElementNamespace.isArrayOfMultiElement ), Testing.createBenchmarkOptions() )

export { isArrayOfMultiElementSuite }

