import * as isblockdevicepathNamespace from '../../../../sources/file-system/block-devices/isBlockDevicePath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isBlockDevicePathSuite = Benchmark.Suite( 'isblockdevicepathNamespace.isBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isBlockDevicePath()', Testing.iterateOverDataMap( isblockdevicepathNamespace.isBlockDevicePath ), Testing.createBenchmarkOptions() )

const isNotBlockDevicePathSuite = Benchmark.Suite( 'isblockdevicepathNamespace.isNotBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isNotBlockDevicePath()', Testing.iterateOverDataMap( isblockdevicepathNamespace.isNotBlockDevicePath ), Testing.createBenchmarkOptions() )

export { isBlockDevicePathSuite,isNotBlockDevicePathSuite }

