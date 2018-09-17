/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/symbols
 * @desc Export the units tests about isNotSymbol method.
 * @requires {@link module:sources/cores/symbols}
 *
 */

/* global describe, expect, it */

import { isNotSymbol } from '../../../../sources/cores/symbols/isNotSymbol'

function isNotSymbolUnits () {

    describe( 'isNotSymbol()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotSymbol( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotSymbolUnits }
