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

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isSymbol( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isSymbolUnits }
