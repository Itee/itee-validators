/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataSet } from '../../../TestsUtils'
import { isDefinedUnits } from './isDefined.units'
import { isEmptyUnits } from './isEmpty.units'
import { isNotEmptyUnits } from './isNotEmpty.units'
import { isNotNullUnits } from './isNotNull.units'
import { isNotUndefinedUnits } from './isNotUndefined.units'
import { isNullUnits } from './isNull.units'
import { isNullOrUndefinedUnits } from './isNullOrUndefined.units'
import { isUndefinedUnits } from './isUndefined.units'

function VoidsUnits () {

    describe( 'Voids', () => {

        beforeEach( () => {

            this._dataSet = createDataSet()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isDefinedUnits.call( this )
        isEmptyUnits.call( this )
        isNotEmptyUnits.call( this )
        isNotNullUnits.call( this )
        isNotUndefinedUnits.call( this )
        isNullUnits.call( this )
        isNullOrUndefinedUnits.call( this )
        isUndefinedUnits.call( this )

    } )

}

export { VoidsUnits }

