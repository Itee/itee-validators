
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isSymbolicLinkPath.js'

const isNotSymbolicLinkPathSuite = Benchmark.Suite( 'isSymbolicLinkPathNamespace.isNotSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isNotSymbolicLinkPath()', Testing.iterateOverDataMap( isSymbolicLinkPathNamespace.isNotSymbolicLinkPath ), Testing.createBenchmarkOptions() )
const isSymbolicLinkPathSuite = Benchmark.Suite( 'isSymbolicLinkPathNamespace.isSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isSymbolicLinkPath()', Testing.iterateOverDataMap( isSymbolicLinkPathNamespace.isSymbolicLinkPath ), Testing.createBenchmarkOptions() )

export { isNotSymbolicLinkPathSuite,isSymbolicLinkPathSuite }

