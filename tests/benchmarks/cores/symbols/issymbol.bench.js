import * as issymbolNamespace from '../../../../sources/cores/symbols/isSymbol.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isSymbolSuite = Benchmark.Suite( 'issymbolNamespace.isSymbol', Testing.createSuiteOptions() )
                                     .add( 'isSymbol()', Testing.iterateOverDataMap( issymbolNamespace.isSymbol ), Testing.createBenchmarkOptions() )

const isNotSymbolSuite = Benchmark.Suite( 'issymbolNamespace.isNotSymbol', Testing.createSuiteOptions() )
                                     .add( 'isNotSymbol()', Testing.iterateOverDataMap( issymbolNamespace.isNotSymbol ), Testing.createBenchmarkOptions() )

export { isSymbolSuite,isNotSymbolSuite }

