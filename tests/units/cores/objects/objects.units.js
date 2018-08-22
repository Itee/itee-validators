/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataMap } from '../../../TestsUtils'
import { isObjectUnits } from './isObject.units'
import { isNotObjectUnits } from './isNotObject.units'
import { isEmptyObjectUnits } from './isEmptyObject.units'
import { isNotEmptyObjectUnits } from './isNotEmptyObject.units'

function ObjectsUnits () {

    describe( 'Objects', () => {

        beforeEach( () => {

            this._dataSet = createDataMap()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isObjectUnits.call( this )
        isNotObjectUnits.call( this )
        isEmptyObjectUnits.call( this )
        isNotEmptyObjectUnits.call( this )

    } )

}

export { ObjectsUnits }
