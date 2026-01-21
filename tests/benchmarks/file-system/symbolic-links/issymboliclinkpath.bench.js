import * as issymboliclinkpathNamespace from '../../../../sources/file-system/symbolic-links/isSymbolicLinkPath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isSymbolicLinkPathSuite = Benchmark.Suite( 'issymboliclinkpathNamespace.isSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isSymbolicLinkPath()', Testing.iterateOverDataMap( issymboliclinkpathNamespace.isSymbolicLinkPath ), Testing.createBenchmarkOptions() )

const isNotSymbolicLinkPathSuite = Benchmark.Suite( 'issymboliclinkpathNamespace.isNotSymbolicLinkPath', Testing.createSuiteOptions() )
                                     .add( 'isNotSymbolicLinkPath()', Testing.iterateOverDataMap( issymboliclinkpathNamespace.isNotSymbolicLinkPath ), Testing.createBenchmarkOptions() )

export { isSymbolicLinkPathSuite,isNotSymbolicLinkPathSuite }

