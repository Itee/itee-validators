import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isKelvinNamespace from '../../../../sources/physics/temperatures/isKelvin.js'

const isKelvinSuite = Benchmark.Suite( 'isKelvinNamespace.isKelvin', Testing.createSuiteOptions() )
                                     .add( 'isKelvin()', Testing.iterateOverDataMap( isKelvinNamespace.isKelvin ), Testing.createBenchmarkOptions() )

const isNotKelvinSuite = Benchmark.Suite( 'isKelvinNamespace.isNotKelvin', Testing.createSuiteOptions() )
                                     .add( 'isNotKelvin()', Testing.iterateOverDataMap( isKelvinNamespace.isNotKelvin ), Testing.createBenchmarkOptions() )

export { isKelvinSuite,isNotKelvinSuite }

