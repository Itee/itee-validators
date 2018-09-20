/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }            from '../../../itee-validators.tests-utils.js'
import { isStringUnits }         from './isString.units'
import { isNotStringUnits }      from './isNotString.units'
import { isEmptyStringUnits }    from './isEmptyString.units'
import { isNotEmptyStringUnits } from './isNotEmptyString.units'
import { isBlankStringUnits }    from './isBlankString.units'
import { isNotBlankStringUnits } from './isNotBlankString.units'

function _stringsUnits () {

    describe( 'Strings', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isStringUnits.call( this )
        isNotStringUnits.call( this )
        isEmptyStringUnits.call( this )
        isNotEmptyStringUnits.call( this )
        isBlankStringUnits.call( this )
        isNotBlankStringUnits.call( this )

    } )

}

export { _stringsUnits }
