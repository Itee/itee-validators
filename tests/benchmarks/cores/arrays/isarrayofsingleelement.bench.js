import * as isarrayofsingleelementNamespace from '../../../../sources/cores/arrays/isArrayOfSingleElement.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isArrayOfSingleElementSuite = Benchmark.Suite( 'isarrayofsingleelementNamespace.isArrayOfSingleElement', Testing.createSuiteOptions() )
                                     .add( 'isArrayOfSingleElement()', Testing.iterateOverDataMap( isarrayofsingleelementNamespace.isArrayOfSingleElement ), Testing.createBenchmarkOptions() )

export { isArrayOfSingleElementSuite }

