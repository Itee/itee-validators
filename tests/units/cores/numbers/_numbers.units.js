/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }            from '../../../utils/itee-validators.tests-utils.js'
import { isInfiniteUnits }       from './isInfinite.units'
import { isMaxPositiveUnits }    from './isMax.units'
import { isMinPositiveUnits }    from './isMin.units'
import { isNumberUnits }         from './isNumber.units'
import { isMaxSafeIntegerUnits } from './isSafeInteger.units'
import { isZeroUnits }           from './isZero.units'

function _numbersUnits () {

    describe( 'Numbers', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isInfiniteUnits.call( this )
        isMaxPositiveUnits.call( this )
        isMaxSafeIntegerUnits.call( this )
        isMinPositiveUnits.call( this )
        isNumberUnits.call( this )
        isZeroUnits.call( this )

    } )

}

export { _numbersUnits }
