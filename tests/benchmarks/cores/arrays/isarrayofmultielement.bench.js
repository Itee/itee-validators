import * as isarrayofmultielementNamespace from '../../../../sources/cores/arrays/isArrayOfMultiElement.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfMultiElementSuite = Benchmark.Suite( 'isarrayofmultielementNamespace.isArrayOfMultiElement', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfMultiElement()', Testing.iterateOverDataMap( isarrayofmultielementNamespace.isArrayOfMultiElement ), Testing.createBenchmarkOptions() )

export { isArrayOfMultiElementSuite }

