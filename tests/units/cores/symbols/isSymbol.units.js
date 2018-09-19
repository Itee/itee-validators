/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/symbols
 * @desc Export the units tests about isSymbol method.
 * @requires {@link module:sources/cores/symbols}
 *
 */

/* global describe, expect, it */

import { isSymbol } from '../../../../sources/cores/symbols/isSymbol'

function isSymbolUnits () {

    describe( 'isSymbol()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataMap[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isSymbol( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isSymbolUnits }
