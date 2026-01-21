import * as isint16arrayNamespace from '../../../../sources/cores/typed-arrays/isInt16Array.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isInt16ArraySuite = Benchmark.Suite( 'isint16arrayNamespace.isInt16Array', Testing.createSuiteOptions() )
                                     .add( 'isInt16Array()', Testing.iterateOverDataMap( isint16arrayNamespace.isInt16Array ), Testing.createBenchmarkOptions() )

const isNotInt16ArraySuite = Benchmark.Suite( 'isint16arrayNamespace.isNotInt16Array', Testing.createSuiteOptions() )
                                     .add( 'isNotInt16Array()', Testing.iterateOverDataMap( isint16arrayNamespace.isNotInt16Array ), Testing.createBenchmarkOptions() )

export { isInt16ArraySuite,isNotInt16ArraySuite }

