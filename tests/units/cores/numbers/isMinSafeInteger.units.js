/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMinSafeInteger method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMinSafeInteger } from '../../../../sources/cores/numbers/isMinSafeInteger'

function isMinSafeIntegerUnits () {

    describe( 'isMinSafeInteger()', () => {

        it( 'should return true only when the value is a the min safe integer value', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMinSafeInteger' ]

                    for ( let key in dataSet ) {

                        const result = isMinSafeInteger( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isMinSafeInteger( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isMinSafeIntegerUnits }
