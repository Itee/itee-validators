/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMaxNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMaxNegative } from '../../../../sources/cores/numbers/isMaxNegative'

function isMaxNegativeUnits () {

    describe( 'isMaxNegative()', () => {

        it( 'should return true only when the value is equal to negative max number value', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMaxValue' ]

                    for ( let key in dataSet ) {

                        const result = isMaxNegative( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isMaxNegative( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isMaxNegativeUnits }
