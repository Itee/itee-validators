
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils'
import * as isSymbolNamespace from '../../../../sources/cores/symbols/isSymbol.js'

const isNotSymbolSuite = Benchmark.Suite( 'isSymbolNamespace.isNotSymbol', Testing.createSuiteOptions() )
                                     .add( 'isNotSymbol()', Testing.iterateOverDataMap( isSymbolNamespace.isNotSymbol ), Testing.createBenchmarkOptions() )
const isSymbolSuite = Benchmark.Suite( 'isSymbolNamespace.isSymbol', Testing.createSuiteOptions() )
                                     .add( 'isSymbol()', Testing.iterateOverDataMap( isSymbolNamespace.isSymbol ), Testing.createBenchmarkOptions() )

export { isNotSymbolSuite,isSymbolSuite }

