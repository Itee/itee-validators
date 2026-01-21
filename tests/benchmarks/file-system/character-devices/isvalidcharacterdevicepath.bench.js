import * as isvalidcharacterdevicepathNamespace from '../../../../sources/file-system/character-devices/isValidCharacterDevicePath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidCharacterDevicePathSuite = Benchmark.Suite( 'isvalidcharacterdevicepathNamespace.isValidCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isValidCharacterDevicePath()', Testing.iterateOverDataMap( isvalidcharacterdevicepathNamespace.isValidCharacterDevicePath ), Testing.createBenchmarkOptions() )

const isInvalidCharacterDevicePathSuite = Benchmark.Suite( 'isvalidcharacterdevicepathNamespace.isInvalidCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidCharacterDevicePath()', Testing.iterateOverDataMap( isvalidcharacterdevicepathNamespace.isInvalidCharacterDevicePath ), Testing.createBenchmarkOptions() )

export { isValidCharacterDevicePathSuite,isInvalidCharacterDevicePathSuite }

