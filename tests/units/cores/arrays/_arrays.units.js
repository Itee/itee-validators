/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }                  from '../../../itee-validators.tests-utils.js'
import { isArrayUnits }                from './isArray.units'
import { isArrayOfArrayUnits }         from './isArrayOfArray.units'
import { isArrayOfMultiElementUnits }  from './isArrayOfMultiElement.units'
import { isArrayOfNullUnits }          from './isArrayOfNull.units'
import { isArrayOfObjectUnits }        from './isArrayOfObject.units'
import { isArrayOfSingleElementUnits } from './isArrayOfSingleElement.units'
import { isArrayOfStringUnits }        from './isArrayOfString.units'
import { isArrayOfUndefinedUnits }     from './isArrayOfUndefined.units'
import { isEmptyArrayUnits }           from './isEmptyArray.units'

function _arraysUnits () {

    describe( 'Arrays', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isArrayUnits.call( this )
        isArrayOfArrayUnits.call( this )
        isArrayOfMultiElementUnits.call( this )
        isArrayOfNullUnits.call( this )
        isArrayOfObjectUnits.call( this )
        isArrayOfArrayUnits.call( this )
        isArrayOfSingleElementUnits.call( this )
        isArrayOfStringUnits.call( this )
        isArrayOfUndefinedUnits.call( this )
        isEmptyArrayUnits.call( this )

    } )

}

export { _arraysUnits }


