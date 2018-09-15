/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataMap } from '../../../tests.utils'
import { isBooleanUnits } from './isBoolean.units'
import { isNotBooleanUnits } from './isNotBoolean.units'

function BooleansUnits () {

    describe( 'Booleans', () => {

        beforeEach( () => {

            this._dataSet = createDataMap()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isBooleanUnits.call( this )
        isNotBooleanUnits.call( this )

    } )

}

export { BooleansUnits }
