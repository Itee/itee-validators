/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, beforeEach, afterEach */

import { describe }      from 'mocha'
import { TestsUtils }    from '../../../utils/itee-validators.utils.js'
import { isSymbolUnits } from './isSymbol.units'

function _symbolsUnits () {

    describe( 'Symbols', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isSymbolUnits.call( this )

    } )

}

export { _symbolsUnits }
