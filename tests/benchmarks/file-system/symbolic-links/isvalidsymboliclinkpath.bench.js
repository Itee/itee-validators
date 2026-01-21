import * as isvalidsymboliclinkpathNamespace from '../../../../sources/file-system/symbolic-links/isValidSymbolicLinkPath.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isValidSymbolicLinkPathSuite = Benchmark.Suite( 'isvalidsymboliclinkpathNamespace.isValidSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isValidSymbolicLinkPath()', Testing.iterateOverDataMap( isvalidsymboliclinkpathNamespace.isValidSymbolicLinkPath ), Testing.createBenchmarkOptions() )

const isInvalidSymbolicLinkPathSuite = Benchmark.Suite( 'isvalidsymboliclinkpathNamespace.isInvalidSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isInvalidSymbolicLinkPath()', Testing.iterateOverDataMap( isvalidsymboliclinkpathNamespace.isInvalidSymbolicLinkPath ), Testing.createBenchmarkOptions() )

export { isValidSymbolicLinkPathSuite,isInvalidSymbolicLinkPathSuite }

