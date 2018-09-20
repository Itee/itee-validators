/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isZeroPositive method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isZeroPositive } from '../../../../sources/cores/numbers/isZeroPositive'

function isZeroPositiveUnits () {

    describe( 'isZeroPositive()', () => {

        it( 'should return true only when the value is a positive zero', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'positiveZero' ]

                    for ( let key in dataSet ) {

                        const result = isZeroPositive( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isZeroPositive( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isZeroPositiveUnits }
