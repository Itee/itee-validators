
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isTemperatureNamespace from '../../../../sources/physics/temperatures/isTemperature.js'

const isTemperatureSuite = Benchmark.Suite( 'isTemperatureNamespace.isTemperature', Testing.createSuiteOptions() )
                                     .add( 'isTemperature()', Testing.iterateOverDataMap( isTemperatureNamespace.isTemperature ), Testing.createBenchmarkOptions() )

const isNotTemperatureSuite = Benchmark.Suite( 'isTemperatureNamespace.isNotTemperature', Testing.createSuiteOptions() )
                                     .add( 'isNotTemperature()', Testing.iterateOverDataMap( isTemperatureNamespace.isNotTemperature ), Testing.createBenchmarkOptions() )

export { isTemperatureSuite,isNotTemperatureSuite }

