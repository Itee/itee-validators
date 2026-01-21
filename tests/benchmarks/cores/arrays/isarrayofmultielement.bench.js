import * as isarrayofmultielementNamespace from '../../../../sources/cores/arrays/isArrayOfMultiElement.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfMultiElementSuite = Benchmark.Suite( 'isarrayofmultielementNamespace.isArrayOfMultiElement', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfMultiElement()', Testing.iterateOverDataMap( isarrayofmultielementNamespace.isArrayOfMultiElement ), Testing.createBenchmarkOptions() )

export { isArrayOfMultiElementSuite }

