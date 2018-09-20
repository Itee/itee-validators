/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isZeroNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isZeroNegative } from '../../../../sources/cores/numbers/isZeroNegative'

function isZeroNegativeUnits () {

    describe( 'isZeroNegative()', () => {

        it( 'should return true only when the value is a negative zero', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeNullFloat', 'negativeNullInt' ]

                    for ( let key in dataSet ) {

                        const result = isZeroNegative( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isZeroNegative( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isZeroNegativeUnits }
