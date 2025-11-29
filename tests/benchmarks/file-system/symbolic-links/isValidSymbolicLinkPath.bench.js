import * as isValidSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isValidSymbolicLinkPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidSymbolicLinkPathSuite = Benchmark.Suite( 'isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isValidSymbolicLinkPath()', Testing.iterateOverDataMap( isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath ), Testing.createBenchmarkOptions() )

const isInvalidSymbolicLinkPathSuite = Benchmark.Suite( 'isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidSymbolicLinkPath()', Testing.iterateOverDataMap( isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath ), Testing.createBenchmarkOptions() )

export { isValidSymbolicLinkPathSuite,isInvalidSymbolicLinkPathSuite }

