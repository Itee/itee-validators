import * as isobjectNamespace from '../../../../sources/cores/objects/isObject.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isObjectSuite = Benchmark.Suite( 'isobjectNamespace.isObject', Testing.createSuiteOptions() )
                                     .add( 'isObject()', Testing.iterateOverDataMap( isobjectNamespace.isObject ), Testing.createBenchmarkOptions() )

const isNotObjectSuite = Benchmark.Suite( 'isobjectNamespace.isNotObject', Testing.createSuiteOptions() )
                                     .add( 'isNotObject()', Testing.iterateOverDataMap( isobjectNamespace.isNotObject ), Testing.createBenchmarkOptions() )

export { isObjectSuite,isNotObjectSuite }

