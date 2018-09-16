/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataMap } from '../../../tests.utils'
import { isFunctionUnits } from './isFunction.units'
import { isNotFunctionUnits } from './isNotFunction.units'

function _functionsUnits () {

    describe( 'Functions', () => {

        beforeEach( () => {

            this._dataSet = createDataMap()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isFunctionUnits.call( this )
        isNotFunctionUnits.call( this )

    } )

}

export { _functionsUnits }
