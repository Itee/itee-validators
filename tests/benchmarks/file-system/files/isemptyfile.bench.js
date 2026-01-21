import * as isemptyfileNamespace from '../../../../sources/file-system/files/isEmptyFile.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isEmptyFileSuite = Benchmark.Suite( 'isemptyfileNamespace.isEmptyFile', Testing.createSuiteOptions() )
                                     .add( 'isEmptyFile()', Testing.iterateOverDataMap( isemptyfileNamespace.isEmptyFile ), Testing.createBenchmarkOptions() )

const isNotEmptyFileSuite = Benchmark.Suite( 'isemptyfileNamespace.isNotEmptyFile', Testing.createSuiteOptions() )
                                     .add( 'isNotEmptyFile()', Testing.iterateOverDataMap( isemptyfileNamespace.isNotEmptyFile ), Testing.createBenchmarkOptions() )

export { isEmptyFileSuite,isNotEmptyFileSuite }

