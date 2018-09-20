/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }            from '../../../itee-validators.tests-utils.js'
import { isStringUnits }         from './isString.units'
import { isEmptyStringUnits }    from './isEmptyString.units'
import { isBlankStringUnits }    from './isBlankString.units'

function _stringsUnits () {

    describe( 'Strings', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isStringUnits.call( this )
        isEmptyStringUnits.call( this )
        isBlankStringUnits.call( this )

    } )

}

export { _stringsUnits }
