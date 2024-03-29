
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isValidBlockDevicePathNamespace from '../../../../sources/file-system/block-devices/isValidBlockDevicePath.js'

const isInvalidBlockDevicePathSuite = Benchmark.Suite( 'isValidBlockDevicePathNamespace.isInvalidBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidBlockDevicePath()', Testing.iterateOverDataMap( isValidBlockDevicePathNamespace.isInvalidBlockDevicePath ), Testing.createBenchmarkOptions() )
const isValidBlockDevicePathSuite = Benchmark.Suite( 'isValidBlockDevicePathNamespace.isValidBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isValidBlockDevicePath()', Testing.iterateOverDataMap( isValidBlockDevicePathNamespace.isValidBlockDevicePath ), Testing.createBenchmarkOptions() )

export { isInvalidBlockDevicePathSuite,isValidBlockDevicePathSuite }

