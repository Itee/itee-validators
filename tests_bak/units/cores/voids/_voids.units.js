/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { describe }       from 'mocha'
import { TestsUtils }     from '../../../utils/itee-validators.utils.js'
import { isDefinedUnits } from './isDefined.units'
import { isEmptyUnits }     from './isEmpty.units'
import { isNullUnits }      from './isNull.units'
import { isUndefinedUnits } from './isUndefined.units'

function _voidsUnits () {

    describe( 'Voids', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isEmptyUnits.call( this )
        isDefinedUnits.call( this )
        isNullUnits.call( this )
        isUndefinedUnits.call( this )

    } )

}

export { _voidsUnits }

