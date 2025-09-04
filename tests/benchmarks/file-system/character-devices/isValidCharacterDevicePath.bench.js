
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as isValidCharacterDevicePathNamespace from '../../../../sources/file-system/character-devices/isValidCharacterDevicePath.js'

const isValidCharacterDevicePathSuite = Benchmark.Suite( 'isValidCharacterDevicePathNamespace.isValidCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isValidCharacterDevicePath()', Testing.iterateOverDataMap( isValidCharacterDevicePathNamespace.isValidCharacterDevicePath ), Testing.createBenchmarkOptions() )

const isInvalidCharacterDevicePathSuite = Benchmark.Suite( 'isValidCharacterDevicePathNamespace.isInvalidCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidCharacterDevicePath()', Testing.iterateOverDataMap( isValidCharacterDevicePathNamespace.isInvalidCharacterDevicePath ), Testing.createBenchmarkOptions() )

export { isValidCharacterDevicePathSuite,isInvalidCharacterDevicePathSuite }

