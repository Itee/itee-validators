import Benchmark      from 'benchmark'
import {
    isArray,
    isArray_0,
    isNotArray,
    isNotArray_0
}                     from '../../../../sources/cores/arrays/isArray'
import { TestsUtils } from '../../../utils/itee-validators.utils'

const isArraySuite = Benchmark.Suite( 'isArray', TestsUtils.createSuiteOptions() )
                              .add( 'isArray', TestsUtils.iterateOverDataMap( isArray ), TestsUtils.createBenchmarkOptions() )
                              .add( 'isArray_0', TestsUtils.iterateOverDataMap( isArray_0 ), TestsUtils.createBenchmarkOptions() )

const isNotArraySuite = Benchmark.Suite( 'isNotArray', TestsUtils.createSuiteOptions() )
                                 .add( 'isNotArray', TestsUtils.iterateOverDataMap( isNotArray ), TestsUtils.createBenchmarkOptions() )
                                 .add( 'isNotArray_0', TestsUtils.iterateOverDataMap( isNotArray_0 ), TestsUtils.createBenchmarkOptions() )

export {
    isArraySuite,
    isNotArraySuite
}
