
import Benchmark   from 'benchmark'
import { Testing } from 'itee-utils/sources/testings/benchmarks'
import * as coresNamespace from '../../../sources/cores/cores.js'

const addSuite = Benchmark.Suite( 'coresNamespace.add', Testing.createSuiteOptions() )
                                     .add( 'add()', Testing.iterateOverDataMap( coresNamespace.add ), Testing.createBenchmarkOptions() )

const removeSuite = Benchmark.Suite( 'coresNamespace.remove', Testing.createSuiteOptions() )
                                     .add( 'remove()', Testing.iterateOverDataMap( coresNamespace.remove ), Testing.createBenchmarkOptions() )

const getAvalaibleTypesSuite = Benchmark.Suite( 'coresNamespace.getAvalaibleTypes', Testing.createSuiteOptions() )
                                     .add( 'getAvalaibleTypes()', Testing.iterateOverDataMap( coresNamespace.getAvalaibleTypes ), Testing.createBenchmarkOptions() )

const checkSuite = Benchmark.Suite( 'coresNamespace.check', Testing.createSuiteOptions() )
                                     .add( 'check()', Testing.iterateOverDataMap( coresNamespace.check ), Testing.createBenchmarkOptions() )

export { addSuite,removeSuite,getAvalaibleTypesSuite,checkSuite }

