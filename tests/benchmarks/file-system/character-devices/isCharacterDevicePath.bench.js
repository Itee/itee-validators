import * as isCharacterDevicePathNamespace from '../../../../sources/file-system/character-devices/isCharacterDevicePath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isCharacterDevicePathSuite = Benchmark.Suite( 'isCharacterDevicePathNamespace.isCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isCharacterDevicePath()', Testing.iterateOverDataMap( isCharacterDevicePathNamespace.isCharacterDevicePath ), Testing.createBenchmarkOptions() )

const isNotCharacterDevicePathSuite = Benchmark.Suite( 'isCharacterDevicePathNamespace.isNotCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isNotCharacterDevicePath()', Testing.iterateOverDataMap( isCharacterDevicePathNamespace.isNotCharacterDevicePath ), Testing.createBenchmarkOptions() )

export { isCharacterDevicePathSuite,isNotCharacterDevicePathSuite }

