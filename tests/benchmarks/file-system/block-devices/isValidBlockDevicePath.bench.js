import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isValidBlockDevicePathNamespace from '../../../../sources/file-system/block-devices/isValidBlockDevicePath.js'

const isValidBlockDevicePathSuite = Benchmark.Suite( 'isValidBlockDevicePathNamespace.isValidBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isValidBlockDevicePath()', Testing.iterateOverDataMap( isValidBlockDevicePathNamespace.isValidBlockDevicePath ), Testing.createBenchmarkOptions() )

const isInvalidBlockDevicePathSuite = Benchmark.Suite( 'isValidBlockDevicePathNamespace.isInvalidBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidBlockDevicePath()', Testing.iterateOverDataMap( isValidBlockDevicePathNamespace.isInvalidBlockDevicePath ), Testing.createBenchmarkOptions() )

export { isValidBlockDevicePathSuite,isInvalidBlockDevicePathSuite }

