import * as isSymbolNamespace from '../../../../sources/cores/symbols/isSymbol.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isSymbolSuite = Benchmark.Suite( 'isSymbolNamespace.isSymbol', Testing.createSuiteOptions() )
                                     .add( 'isSymbol()', Testing.iterateOverDataMap( isSymbolNamespace.isSymbol ), Testing.createBenchmarkOptions() )

const isNotSymbolSuite = Benchmark.Suite( 'isSymbolNamespace.isNotSymbol', Testing.createSuiteOptions() )
                                     .add( 'isNotSymbol()', Testing.iterateOverDataMap( isSymbolNamespace.isNotSymbol ), Testing.createBenchmarkOptions() )

export { isSymbolSuite,isNotSymbolSuite }

