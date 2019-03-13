/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }         from '../../../itee-validators.tests-utils.js'
import { isEmptyObjectUnits } from './isEmptyObject.units'
import { isObjectUnits }      from './isObject.units'

function _objectsUnits () {

    describe( 'Objects', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isObjectUnits.call( this )
        isEmptyObjectUnits.call( this )

    } )

}

export { _objectsUnits }
