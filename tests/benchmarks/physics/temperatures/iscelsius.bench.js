import * as iscelsiusNamespace from '../../../../sources/physics/temperatures/isCelsius.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isCelsiusSuite = Benchmark.Suite( 'iscelsiusNamespace.isCelsius', Testing.createSuiteOptions() )
                                     .add( 'isCelsius()', Testing.iterateOverDataMap( iscelsiusNamespace.isCelsius ), Testing.createBenchmarkOptions() )

const isNotCelsiusSuite = Benchmark.Suite( 'iscelsiusNamespace.isNotCelsius', Testing.createSuiteOptions() )
                                     .add( 'isNotCelsius()', Testing.iterateOverDataMap( iscelsiusNamespace.isNotCelsius ), Testing.createBenchmarkOptions() )

export { isCelsiusSuite,isNotCelsiusSuite }

