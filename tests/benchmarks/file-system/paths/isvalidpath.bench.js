import * as isvalidpathNamespace from '../../../../sources/file-system/paths/isValidPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidPathSuite = Benchmark.Suite( 'isvalidpathNamespace.isValidPath', Testing.createSuiteOptions() )
                                     .add( 'isValidPath()', Testing.iterateOverDataMap( isvalidpathNamespace.isValidPath ), Testing.createBenchmarkOptions() )

const isInvalidPathSuite = Benchmark.Suite( 'isvalidpathNamespace.isInvalidPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidPath()', Testing.iterateOverDataMap( isvalidpathNamespace.isInvalidPath ), Testing.createBenchmarkOptions() )

export { isValidPathSuite,isInvalidPathSuite }

