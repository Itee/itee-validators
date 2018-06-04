/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

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
