
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isBlockDevicePathNamespace from '../../../../sources/file-system/block-devices/isBlockDevicePath.js'

const isBlockDevicePathSuite = Benchmark.Suite( 'isBlockDevicePathNamespace.isBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isBlockDevicePath()', Testing.iterateOverDataMap( isBlockDevicePathNamespace.isBlockDevicePath ), Testing.createBenchmarkOptions() )

const isNotBlockDevicePathSuite = Benchmark.Suite( 'isBlockDevicePathNamespace.isNotBlockDevicePath', Testing.createSuiteOptions() )
                                     .add( 'isNotBlockDevicePath()', Testing.iterateOverDataMap( isBlockDevicePathNamespace.isNotBlockDevicePath ), Testing.createBenchmarkOptions() )

export { isBlockDevicePathSuite,isNotBlockDevicePathSuite }

