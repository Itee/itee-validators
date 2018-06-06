/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { createDataSet } from '../../../TestsUtils'
import { isSymbolUnits } from './isSymbol.units'
import { isNotSymbolUnits } from './isNotSymbol.units'

function SymbolsUnits () {

    describe( 'Symbols', () => {

        beforeEach( () => {

            this._dataSet = createDataSet()

        } )

        afterEach( () => {

            delete this._dataSet

        } )

        isSymbolUnits.call( this )
        isNotSymbolUnits.call( this )

    } )

}

export { SymbolsUnits }
