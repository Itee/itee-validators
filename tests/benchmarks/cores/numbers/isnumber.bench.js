import * as isnumberNamespace from '../../../../sources/cores/numbers/isNumber.js'
import { getBenchmarkPackage } from '../../../../node_modules/@itee/tasks/sources/utils/benchmarks.js'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isNumberSuite = Benchmark.Suite( 'isnumberNamespace.isNumber', Testing.createSuiteOptions() )
                                     .add( 'isNumber()', Testing.iterateOverDataMap( isnumberNamespace.isNumber ), Testing.createBenchmarkOptions() )
                                     .add( 'isNumber_0()', Testing.iterateOverDataMap( isnumberNamespace.isNumber_0 ), Testing.createBenchmarkOptions() )
                                     .add( 'isNumber_1()', Testing.iterateOverDataMap( isnumberNamespace.isNumber_1 ), Testing.createBenchmarkOptions() )

const isNumberPositiveSuite = Benchmark.Suite( 'isnumberNamespace.isNumberPositive', Testing.createSuiteOptions() )
                                     .add( 'isNumberPositive()', Testing.iterateOverDataMap( isnumberNamespace.isNumberPositive ), Testing.createBenchmarkOptions() )

const isNumberNegativeSuite = Benchmark.Suite( 'isnumberNamespace.isNumberNegative', Testing.createSuiteOptions() )
                                     .add( 'isNumberNegative()', Testing.iterateOverDataMap( isnumberNamespace.isNumberNegative ), Testing.createBenchmarkOptions() )

const isNotNumberSuite = Benchmark.Suite( 'isnumberNamespace.isNotNumber', Testing.createSuiteOptions() )
                                     .add( 'isNotNumber()', Testing.iterateOverDataMap( isnumberNamespace.isNotNumber ), Testing.createBenchmarkOptions() )

const isIntegerSuite = Benchmark.Suite( 'isnumberNamespace.isInteger', Testing.createSuiteOptions() )
                                     .add( 'isInteger()', Testing.iterateOverDataMap( isnumberNamespace.isInteger ), Testing.createBenchmarkOptions() )
                                     .add( 'isInteger_0()', Testing.iterateOverDataMap( isnumberNamespace.isInteger_0 ), Testing.createBenchmarkOptions() )
                                     .add( 'isInteger_1()', Testing.iterateOverDataMap( isnumberNamespace.isInteger_1 ), Testing.createBenchmarkOptions() )
                                     .add( 'isInteger_2()', Testing.iterateOverDataMap( isnumberNamespace.isInteger_2 ), Testing.createBenchmarkOptions() )
                                     .add( 'isInteger_3()', Testing.iterateOverDataMap( isnumberNamespace.isInteger_3 ), Testing.createBenchmarkOptions() )

const isFloatSuite = Benchmark.Suite( 'isnumberNamespace.isFloat', Testing.createSuiteOptions() )
                                     .add( 'isFloat()', Testing.iterateOverDataMap( isnumberNamespace.isFloat ), Testing.createBenchmarkOptions() )
                                     .add( 'isFloat_1()', Testing.iterateOverDataMap( isnumberNamespace.isFloat_1 ), Testing.createBenchmarkOptions() )
                                     .add( 'isFloat_2()', Testing.iterateOverDataMap( isnumberNamespace.isFloat_2 ), Testing.createBenchmarkOptions() )

const isNaNSuite = Benchmark.Suite( 'isnumberNamespace.isNaN', Testing.createSuiteOptions() )
                                     .add( 'isNaN()', Testing.iterateOverDataMap( isnumberNamespace.isNaN ), Testing.createBenchmarkOptions() )

export { isNumberSuite,isNumberPositiveSuite,isNumberNegativeSuite,isNotNumberSuite,isIntegerSuite,isFloatSuite,isNaNSuite }

