/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMinNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMinNegative } from '../../../../sources/cores/numbers/isMinNegative'

function isMinNegativeUnits () {

    describe( 'isMinNegative()', () => {

        it( 'should return true only when the value is equal to negative minimum number value', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMinValue' ]

                    for ( let key in dataSet ) {

                        const result = isMinNegative( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isMinNegative( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isMinNegativeUnits }
