/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataMap } from '../../../TestsUtils'
import { isStringUnits } from './isString.units'
import { isNotStringUnits } from './isNotString.units'
import { isEmptyStringUnits } from './isEmptyString.units'
import { isNotEmptyStringUnits } from './isNotEmptyString.units'
import { isBlankStringUnits } from './isBlankString.units'
import { isNotBlankStringUnits } from './isNotBlankString.units'

function StringsUnits () {

    describe( 'Strings', () => {

        beforeEach( () => {

            this._dataSet = createDataMap()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isStringUnits.call( this )
        isNotStringUnits.call( this )
        isEmptyStringUnits.call( this )
        isNotEmptyStringUnits.call( this )
        isBlankStringUnits.call( this )
        isNotBlankStringUnits.call( this )

    } )

}

export { StringsUnits }
