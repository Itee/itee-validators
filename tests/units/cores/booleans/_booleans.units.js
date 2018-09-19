/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils } from '../../../itee-validators.tests-utils.js'
import { isBooleanUnits } from './isBoolean.units'
import { isNotBooleanUnits } from './isNotBoolean.units'

function _booleansUnits () {

    describe( 'Booleans', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isBooleanUnits.call( this )
        isNotBooleanUnits.call( this )

    } )

}

export { _booleansUnits }
