
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isCharacterDevicePathNamespace from '../../../../sources/file-system/character-devices/isCharacterDevicePath.js'

const isCharacterDevicePathSuite = Benchmark.Suite( 'isCharacterDevicePathNamespace.isCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isCharacterDevicePath()', Testing.iterateOverDataMap( isCharacterDevicePathNamespace.isCharacterDevicePath ), Testing.createBenchmarkOptions() )
const isNotCharacterDevicePathSuite = Benchmark.Suite( 'isCharacterDevicePathNamespace.isNotCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isNotCharacterDevicePath()', Testing.iterateOverDataMap( isCharacterDevicePathNamespace.isNotCharacterDevicePath ), Testing.createBenchmarkOptions() )

export { isCharacterDevicePathSuite,isNotCharacterDevicePathSuite }

