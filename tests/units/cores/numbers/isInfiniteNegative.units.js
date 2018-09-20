/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isInfiniteNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isInfiniteNegative } from '../../../../sources/cores/numbers/isInfiniteNegative'

function isInfiniteNegativeUnits () {

    describe( 'isInfiniteNegative()', () => {

        it( 'should return true only when the value is a negative infinite number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {

                        const result = isInfiniteNegative( dataSet[ key ] )
                        if ( key === 'negativeInfinity' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isInfiniteNegative( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isInfiniteNegativeUnits }
