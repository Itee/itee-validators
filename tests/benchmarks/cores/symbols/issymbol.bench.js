import * as issymbolNamespace from '../../../../sources/cores/symbols/isSymbol.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isSymbolSuite = Benchmark.Suite( 'issymbolNamespace.isSymbol', Testing.createSuiteOptions() )
                                     .add( 'isSymbol()', Testing.iterateOverDataMap( issymbolNamespace.isSymbol ), Testing.createBenchmarkOptions() )

const isNotSymbolSuite = Benchmark.Suite( 'issymbolNamespace.isNotSymbol', Testing.createSuiteOptions() )
                                     .add( 'isNotSymbol()', Testing.iterateOverDataMap( issymbolNamespace.isNotSymbol ), Testing.createBenchmarkOptions() )

export { isSymbolSuite,isNotSymbolSuite }

