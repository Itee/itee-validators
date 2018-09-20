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
import { isNotArrayUnits }             from './isNotArray.units'
import { isNotArrayOfArrayUnits }      from './isNotArrayOfArray.units'
import { isNotArrayOfNullUnits }       from './isNotArrayOfNull.units'
import { isNotArrayOfObjectUnits }     from './isNotArrayOfObject.units'
import { isNotArrayOfStringUnits }     from './isNotArrayOfString.units'
import { isNotArrayOfUndefinedUnits }  from './isNotArrayOfUndefined.units'
import { isNotEmptyArrayUnits }        from './isNotEmptyArray.units'

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
        isNotArrayUnits.call( this )
        isNotArrayOfArrayUnits.call( this )
        isNotArrayOfNullUnits.call( this )
        isNotArrayOfObjectUnits.call( this )
        isNotArrayOfStringUnits.call( this )
        isNotArrayOfUndefinedUnits.call( this )
        isNotEmptyArrayUnits.call( this )

    } )

}

export { _arraysUnits }


