/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataSet } from '../../../TestsUtils'
import { isBooleanUnits } from './isBoolean.units'
import { isNotBooleanUnits } from './isNotBoolean.units'

function BooleansUnits () {

    describe( 'Booleans', () => {

        beforeEach( () => {

            this._dataSet = createDataSet()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isBooleanUnits.call( this )
        isNotBooleanUnits.call( this )

    } )

}

export { BooleansUnits }
