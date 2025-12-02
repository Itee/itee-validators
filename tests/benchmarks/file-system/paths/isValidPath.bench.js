import * as isValidPathNamespace from '../../../../sources/file-system/paths/isValidPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidPathSuite = Benchmark.Suite( 'isValidPathNamespace.isValidPath', Testing.createSuiteOptions() )
                                     .add( 'isValidPath()', Testing.iterateOverDataMap( isValidPathNamespace.isValidPath ), Testing.createBenchmarkOptions() )

const isInvalidPathSuite = Benchmark.Suite( 'isValidPathNamespace.isInvalidPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidPath()', Testing.iterateOverDataMap( isValidPathNamespace.isInvalidPath ), Testing.createBenchmarkOptions() )

export { isValidPathSuite,isInvalidPathSuite }

