/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils } from '../../../itee-validators.tests-utils.js'
import { isDefinedUnits } from './isDefined.units'
import { isEmptyUnits } from './isEmpty.units'
import { isNotEmptyUnits } from './isNotEmpty.units'
import { isNotNullUnits } from './isNotNull.units'
import { isNotUndefinedUnits } from './isNotUndefined.units'
import { isNullUnits } from './isNull.units'
import { isNullOrUndefinedUnits } from './isNullOrUndefined.units'
import { isUndefinedUnits } from './isUndefined.units'

function _voidsUnits () {

    describe( 'Voids', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isDefinedUnits.call( this )
        isEmptyUnits.call( this )
        isNotEmptyUnits.call( this )
        isNotNullUnits.call( this )
        isNotUndefinedUnits.call( this )
        isNullOrUndefinedUnits.call( this )
        isNullUnits.call( this )
        isUndefinedUnits.call( this )

    } )

}

export { _voidsUnits }

