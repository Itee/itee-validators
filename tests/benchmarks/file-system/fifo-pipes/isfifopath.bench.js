import * as isfifopathNamespace from '../../../../sources/file-system/fifo-pipes/isFIFOPath.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isFIFOPathSuite = Benchmark.Suite( 'isfifopathNamespace.isFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isFIFOPath()', Testing.iterateOverDataMap( isfifopathNamespace.isFIFOPath ), Testing.createBenchmarkOptions() )

const isNotFIFOPathSuite = Benchmark.Suite( 'isfifopathNamespace.isNotFIFOPath', Testing.createSuiteOptions() )
                                     .add( 'isNotFIFOPath()', Testing.iterateOverDataMap( isfifopathNamespace.isNotFIFOPath ), Testing.createBenchmarkOptions() )

export { isFIFOPathSuite,isNotFIFOPathSuite }

