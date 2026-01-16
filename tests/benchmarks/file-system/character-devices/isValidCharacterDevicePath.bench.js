import * as isValidCharacterDevicePathNamespace from '../../../../sources/file-system/character-devices/isValidCharacterDevicePath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidCharacterDevicePathSuite = Benchmark.Suite( 'isValidCharacterDevicePathNamespace.isValidCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isValidCharacterDevicePath()', Testing.iterateOverDataMap( isValidCharacterDevicePathNamespace.isValidCharacterDevicePath ), Testing.createBenchmarkOptions() )

const isInvalidCharacterDevicePathSuite = Benchmark.Suite( 'isValidCharacterDevicePathNamespace.isInvalidCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidCharacterDevicePath()', Testing.iterateOverDataMap( isValidCharacterDevicePathNamespace.isInvalidCharacterDevicePath ), Testing.createBenchmarkOptions() )

export { isValidCharacterDevicePathSuite,isInvalidCharacterDevicePathSuite }

