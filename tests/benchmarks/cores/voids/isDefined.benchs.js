/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global Itee, suite, benchmark */

import { isDefined, isNotDefined } from '../../../../sources/cores/voids/isDefined'

const isDefinedSuite = suite( 'isDefined', () => {

    benchmark( 'isDefined()', Itee.TestsUtils.iterateOverDataMap( isDefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )

const isNotDefinedSuite = suite( 'isNotDefined', () => {

    benchmark( 'isNotDefined()', Itee.TestsUtils.iterateOverDataMap( isNotDefined ), Itee.TestsUtils.createDataMapBenchmarkOptions() )

} )


export { isDefinedSuite, isNotDefinedSuite }

