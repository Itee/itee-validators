/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils } from '../../../itee-validators.tests-utils.js'
import { isSymbolUnits } from './isSymbol.units'
import { isNotSymbolUnits } from './isNotSymbol.units'

function _symbolsUnits () {

    describe( 'Symbols', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isSymbolUnits.call( this )
        isNotSymbolUnits.call( this )

    } )

}

export { _symbolsUnits }
