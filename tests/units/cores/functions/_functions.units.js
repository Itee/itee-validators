/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }      from '../../../utils/itee-validators.tests-utils.js'
import { isFunctionUnits } from './isFunction.units'

function _functionsUnits () {

    describe( 'Functions', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isFunctionUnits.call( this )

    } )

}

export { _functionsUnits }
