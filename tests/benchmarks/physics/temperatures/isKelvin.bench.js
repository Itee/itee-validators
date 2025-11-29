import * as isKelvinNamespace from '../../../../sources/physics/temperatures/isKelvin.js'
import { getBenchmarkPackage } from '../../../import.benchmarks.js'
import { getTestingPackage } from '../../../import.testing.js'

const Benchmark = await getBenchmarkPackage()
const Testing   = await getTestingPackage()

const isKelvinSuite = Benchmark.Suite( 'isKelvinNamespace.isKelvin', Testing.createSuiteOptions() )
                                     .add( 'isKelvin()', Testing.iterateOverDataMap( isKelvinNamespace.isKelvin ), Testing.createBenchmarkOptions() )

const isNotKelvinSuite = Benchmark.Suite( 'isKelvinNamespace.isNotKelvin', Testing.createSuiteOptions() )
                                     .add( 'isNotKelvin()', Testing.iterateOverDataMap( isKelvinNamespace.isNotKelvin ), Testing.createBenchmarkOptions() )

export { isKelvinSuite,isNotKelvinSuite }

