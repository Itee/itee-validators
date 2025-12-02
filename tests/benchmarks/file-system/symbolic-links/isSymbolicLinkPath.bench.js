import * as isSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isSymbolicLinkPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isSymbolicLinkPathSuite = Benchmark.Suite( 'isSymbolicLinkPathNamespace.isSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isSymbolicLinkPath()', Testing.iterateOverDataMap( isSymbolicLinkPathNamespace.isSymbolicLinkPath ), Testing.createBenchmarkOptions() )

const isNotSymbolicLinkPathSuite = Benchmark.Suite( 'isSymbolicLinkPathNamespace.isNotSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isNotSymbolicLinkPath()', Testing.iterateOverDataMap( isSymbolicLinkPathNamespace.isNotSymbolicLinkPath ), Testing.createBenchmarkOptions() )

export { isSymbolicLinkPathSuite,isNotSymbolicLinkPathSuite }

