/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { describe }       from 'mocha'
import { TestsUtils }     from '../../../utils/itee-validators.utils.js'
import { isBooleanUnits } from './isBoolean.units'

function _booleansUnits () {

    describe( 'Booleans', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isBooleanUnits.call( this )

    } )

}

export { _booleansUnits }
