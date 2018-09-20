/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMinPositive method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMinPositive } from '../../../../sources/cores/numbers/isMinPositive'

function isMinPositiveUnits () {

    describe( 'isMinPositive()', () => {

        it( 'should return true only when the value is equal to positive minimum number value', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'positiveMinValue' ]

                    for ( let key in dataSet ) {

                        const result = isMinPositive( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isMinPositive( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isMinPositiveUnits }
