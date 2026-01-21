import * as ischaracterdevicepathNamespace from '../../../../sources/file-system/character-devices/isCharacterDevicePath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isCharacterDevicePathSuite = Benchmark.Suite( 'ischaracterdevicepathNamespace.isCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isCharacterDevicePath()', Testing.iterateOverDataMap( ischaracterdevicepathNamespace.isCharacterDevicePath ), Testing.createBenchmarkOptions() )

const isNotCharacterDevicePathSuite = Benchmark.Suite( 'ischaracterdevicepathNamespace.isNotCharacterDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isNotCharacterDevicePath()', Testing.iterateOverDataMap( ischaracterdevicepathNamespace.isNotCharacterDevicePath ), Testing.createBenchmarkOptions() )

export { isCharacterDevicePathSuite,isNotCharacterDevicePathSuite }

