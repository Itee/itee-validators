
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isValidSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isValidSymbolicLinkPath.js'

const isInvalidSymbolicLinkPathSuite = Benchmark.Suite( 'isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidSymbolicLinkPath()', Testing.iterateOverDataMap( isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath ), Testing.createBenchmarkOptions() )
const isValidSymbolicLinkPathSuite = Benchmark.Suite( 'isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isValidSymbolicLinkPath()', Testing.iterateOverDataMap( isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath ), Testing.createBenchmarkOptions() )

export { isInvalidSymbolicLinkPathSuite,isValidSymbolicLinkPathSuite }

