
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isValidPathNamespace from '../../../../sources/file-system/paths/isValidPath.js'

const isValidPathSuite = Benchmark.Suite( 'isValidPathNamespace.isValidPath', Testing.createSuiteOptions() )
                                     .add( 'isValidPath()', Testing.iterateOverDataMap( isValidPathNamespace.isValidPath ), Testing.createBenchmarkOptions() )

const isInvalidPathSuite = Benchmark.Suite( 'isValidPathNamespace.isInvalidPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidPath()', Testing.iterateOverDataMap( isValidPathNamespace.isInvalidPath ), Testing.createBenchmarkOptions() )

export { isValidPathSuite,isInvalidPathSuite }

