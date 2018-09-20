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

        it( 'should return false only when the value is a symbols', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'symbols' ) {

                    for ( let key in dataSet ) {
                        expect( isNotSymbol( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotSymbol( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotSymbolUnits }
