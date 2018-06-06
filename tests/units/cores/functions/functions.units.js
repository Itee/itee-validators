/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataSet } from '../../../TestsUtils'
import { isFunctionUnits } from './isFunction.units'
import { isNotFunctionUnits } from './isNotFunction.units'

function FunctionsUnits () {

    describe( 'Functions', () => {

        beforeEach( () => {

            this._dataSet = createDataSet()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isFunctionUnits.call( this )
        isNotFunctionUnits.call( this )

    } )

}

export { FunctionsUnits }
