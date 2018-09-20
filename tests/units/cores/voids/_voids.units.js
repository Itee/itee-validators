/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }             from '../../../itee-validators.tests-utils.js'
import { isEmptyUnits }           from './isEmpty.units'
import { isNullUnits }            from './isNull.units'
import { isNullOrUndefinedUnits } from './isNullOrUndefined.units'
import { isUndefinedUnits }       from './isUndefined.units'

function _voidsUnits () {

    describe( 'Voids', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isEmptyUnits.call( this )
        isNullOrUndefinedUnits.call( this )
        isNullUnits.call( this )
        isUndefinedUnits.call( this )

    } )

}

export { _voidsUnits }

