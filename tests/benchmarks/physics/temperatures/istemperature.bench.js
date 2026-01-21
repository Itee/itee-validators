import * as istemperatureNamespace from '../../../../sources/physics/temperatures/isTemperature.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isTemperatureSuite = Benchmark.Suite( 'istemperatureNamespace.isTemperature', Testing.createSuiteOptions() )
                                     .add( 'isTemperature()', Testing.iterateOverDataMap( istemperatureNamespace.isTemperature ), Testing.createBenchmarkOptions() )

const isNotTemperatureSuite = Benchmark.Suite( 'istemperatureNamespace.isNotTemperature', Testing.createSuiteOptions() )
                                     .add( 'isNotTemperature()', Testing.iterateOverDataMap( istemperatureNamespace.isNotTemperature ), Testing.createBenchmarkOptions() )

export { isTemperatureSuite,isNotTemperatureSuite }

