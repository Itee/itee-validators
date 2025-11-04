import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isValidSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isValidSymbolicLinkPath.js'

const isValidSymbolicLinkPathSuite = Benchmark.Suite( 'isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isValidSymbolicLinkPath()', Testing.iterateOverDataMap( isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath ), Testing.createBenchmarkOptions() )

const isInvalidSymbolicLinkPathSuite = Benchmark.Suite( 'isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidSymbolicLinkPath()', Testing.iterateOverDataMap( isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath ), Testing.createBenchmarkOptions() )

export { isValidSymbolicLinkPathSuite,isInvalidSymbolicLinkPathSuite }

