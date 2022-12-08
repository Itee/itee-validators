/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { describe }           from 'mocha'
import { TestsUtils }         from '../../../utils/itee-validators.utils.js'
import { isBlankStringUnits } from './isBlankString.units'
import { isEmptyStringUnits } from './isEmptyString.units'
import { isStringUnits }      from './isString.units'

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
