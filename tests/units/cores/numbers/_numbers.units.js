/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }              from '../../../itee-validators.tests-utils.js'
import { isFiniteUnits }           from './isFinite.units'
import { isFloatUnits }            from './isFloat.units'
import { isInfiniteUnits }         from './isInfinite.units'
import { isInfiniteNegativeUnits } from './isInfiniteNegative.units'
import { isInfinitePositiveUnits } from './isInfinitePositive.units'
import { isIntegerUnits }          from './isInteger.units'
import { isMaxNegativeUnits }      from './isMaxNegative.units'
import { isMaxPositiveUnits }      from './isMaxPositive.units'
import { isMaxSafeIntegerUnits }   from './isMaxSafeInteger.units'
import { isMinNegativeUnits }      from './isMinNegative.units'
import { isMinPositiveUnits }      from './isMinPositive.units'
import { isMinSafeIntegerUnits }   from './isMinSafeInteger.units'
import { isNotNumberUnits }        from './isNotNumber.units'
import { isNumberUnits }           from './isNumber.units'
import { isNumberNegativeUnits }   from './isNumberNegative.units'
import { isNumberPositiveUnits }   from './isNumberPositive.units'
import { isZeroUnits }             from './isZero.units'
import { isZeroNegativeUnits }     from './isZeroNegative.units'
import { isZeroPositiveUnits }     from './isZeroPositive.units'

function _numbersUnits () {

    describe( 'Numbers', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isFiniteUnits.call( this )
        isFloatUnits.call( this )
        isInfiniteUnits.call( this )
        isInfiniteNegativeUnits.call( this )
        isInfinitePositiveUnits.call( this )
        isIntegerUnits.call( this )
        isMaxNegativeUnits.call( this )
        isMaxPositiveUnits.call( this )
        isMaxSafeIntegerUnits.call( this )
        isMinNegativeUnits.call( this )
        isMinPositiveUnits.call( this )
        isMinSafeIntegerUnits.call( this )
        isNotNumberUnits.call( this )
        isNumberUnits.call( this )
        isNumberNegativeUnits.call( this )
        isNumberPositiveUnits.call( this )
        isZeroUnits.call( this )
        isZeroNegativeUnits.call( this )
        isZeroPositiveUnits.call( this )

    } )

}

export { _numbersUnits }
