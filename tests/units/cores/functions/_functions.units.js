/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils } from '../../../itee-validators.tests-utils.js'
import { isFunctionUnits } from './isFunction.units'
import { isNotFunctionUnits } from './isNotFunction.units'

function _functionsUnits () {

    describe( 'Functions', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isFunctionUnits.call( this )
        isNotFunctionUnits.call( this )

    } )

}

export { _functionsUnits }
