/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMaxSafeInteger method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMaxSafeInteger } from '../../../../sources/cores/numbers/isMaxSafeInteger'

function isMaxSafeIntegerUnits () {

    describe( 'isMaxSafeInteger()', () => {

        it( 'should return true only when the value is a the max safe integer value', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'positiveMaxSafeInteger' ]

                    for ( let key in dataSet ) {

                        const result = isMaxSafeInteger( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isMaxSafeInteger( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isMaxSafeIntegerUnits }
