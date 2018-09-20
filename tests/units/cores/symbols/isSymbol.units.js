/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
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

        it( 'should return true only when the value is a symbols', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'symbols' ) {

                    for ( let key in dataSet ) {
                        expect( isSymbol( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isSymbol( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isSymbolUnits }
