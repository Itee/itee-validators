/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isZero method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isZero } from '../../../../sources/cores/numbers/isZero'

function isZeroUnits () {

    describe( 'isZero()', () => {

        it( 'should return true only when the value is zero', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeNullFloat', 'negativeNullInt', 'positiveNullInt', 'positiveNullFloat' ]

                    for ( let key in dataSet ) {

                        const result = isZero( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isZero( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isZeroUnits }
