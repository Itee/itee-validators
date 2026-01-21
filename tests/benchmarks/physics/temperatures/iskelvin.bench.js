import * as iskelvinNamespace from '../../../../sources/physics/temperatures/isKelvin.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isKelvinSuite = Benchmark.Suite( 'iskelvinNamespace.isKelvin', Testing.createSuiteOptions() )
                                     .add( 'isKelvin()', Testing.iterateOverDataMap( iskelvinNamespace.isKelvin ), Testing.createBenchmarkOptions() )

const isNotKelvinSuite = Benchmark.Suite( 'iskelvinNamespace.isNotKelvin', Testing.createSuiteOptions() )
                                     .add( 'isNotKelvin()', Testing.iterateOverDataMap( iskelvinNamespace.isNotKelvin ), Testing.createBenchmarkOptions() )

export { isKelvinSuite,isNotKelvinSuite }

