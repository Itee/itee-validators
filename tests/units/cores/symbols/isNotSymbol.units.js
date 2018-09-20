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

        it( 'should return true when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isNotSymbol( values[ key ] ) ).to.be.true
            }

        } )

    } )

}

export { isNotSymbolUnits }
