import * as isValidBlockDevicePathNamespace from '../../../../sources/file-system/block-devices/isValidBlockDevicePath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidBlockDevicePathSuite = Benchmark.Suite( 'isValidBlockDevicePathNamespace.isValidBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isValidBlockDevicePath()', Testing.iterateOverDataMap( isValidBlockDevicePathNamespace.isValidBlockDevicePath ), Testing.createBenchmarkOptions() )

const isInvalidBlockDevicePathSuite = Benchmark.Suite( 'isValidBlockDevicePathNamespace.isInvalidBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidBlockDevicePath()', Testing.iterateOverDataMap( isValidBlockDevicePathNamespace.isInvalidBlockDevicePath ), Testing.createBenchmarkOptions() )

export { isValidBlockDevicePathSuite,isInvalidBlockDevicePathSuite }

