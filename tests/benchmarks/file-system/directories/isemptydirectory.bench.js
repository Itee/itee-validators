import * as isemptydirectoryNamespace from '../../../../sources/file-system/directories/isEmptyDirectory.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyDirectorySuite = Benchmark.Suite( 'isemptydirectoryNamespace.isEmptyDirectory', Testing.createSuiteOptions() )
                                     .add( 'isEmptyDirectory()', Testing.iterateOverDataMap( isemptydirectoryNamespace.isEmptyDirectory ), Testing.createBenchmarkOptions() )

const isNotEmptyDirectorySuite = Benchmark.Suite( 'isemptydirectoryNamespace.isNotEmptyDirectory', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyDirectory()', Testing.iterateOverDataMap( isemptydirectoryNamespace.isNotEmptyDirectory ), Testing.createBenchmarkOptions() )

export { isEmptyDirectorySuite,isNotEmptyDirectorySuite }

