
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isValidCharacterDevicePathNamespace from '../../../../sources/file-system/character-devices/isValidCharacterDevicePath.js'

const isInvalidCharacterDevicePathSuite = Benchmark.Suite( 'isValidCharacterDevicePathNamespace.isInvalidCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidCharacterDevicePath()', Testing.iterateOverDataMap( isValidCharacterDevicePathNamespace.isInvalidCharacterDevicePath ), Testing.createBenchmarkOptions() )
const isValidCharacterDevicePathSuite = Benchmark.Suite( 'isValidCharacterDevicePathNamespace.isValidCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isValidCharacterDevicePath()', Testing.iterateOverDataMap( isValidCharacterDevicePathNamespace.isValidCharacterDevicePath ), Testing.createBenchmarkOptions() )

export { isInvalidCharacterDevicePathSuite,isValidCharacterDevicePathSuite }

