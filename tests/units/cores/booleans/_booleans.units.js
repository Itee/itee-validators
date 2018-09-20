/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }        from '../../../itee-validators.tests-utils.js'
import { isBooleanUnits }    from './isBoolean.units'

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
