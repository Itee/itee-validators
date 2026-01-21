import * as isvalidblockdevicepathNamespace from '../../../../sources/file-system/block-devices/isValidBlockDevicePath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidBlockDevicePathSuite = Benchmark.Suite( 'isvalidblockdevicepathNamespace.isValidBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isValidBlockDevicePath()', Testing.iterateOverDataMap( isvalidblockdevicepathNamespace.isValidBlockDevicePath ), Testing.createBenchmarkOptions() )

const isInvalidBlockDevicePathSuite = Benchmark.Suite( 'isvalidblockdevicepathNamespace.isInvalidBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidBlockDevicePath()', Testing.iterateOverDataMap( isvalidblockdevicepathNamespace.isInvalidBlockDevicePath ), Testing.createBenchmarkOptions() )

export { isValidBlockDevicePathSuite,isInvalidBlockDevicePathSuite }

