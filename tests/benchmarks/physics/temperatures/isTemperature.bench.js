import * as isTemperatureNamespace from '../../../../sources/physics/temperatures/isTemperature.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isTemperatureSuite = Benchmark.Suite( 'isTemperatureNamespace.isTemperature', Testing.createSuiteOptions() )
                                     .add( 'isTemperature()', Testing.iterateOverDataMap( isTemperatureNamespace.isTemperature ), Testing.createBenchmarkOptions() )

const isNotTemperatureSuite = Benchmark.Suite( 'isTemperatureNamespace.isNotTemperature', Testing.createSuiteOptions() )
                                     .add( 'isNotTemperature()', Testing.iterateOverDataMap( isTemperatureNamespace.isNotTemperature ), Testing.createBenchmarkOptions() )

export { isTemperatureSuite,isNotTemperatureSuite }

