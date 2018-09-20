/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isFinite method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isFinite } from '../../../../sources/cores/numbers/isFinite'


function isFiniteUnits () {

    describe( 'isFinite()', () => {

        it( 'should return true only when the value is a finite number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeInfinity', 'nan', 'positiveInfinity' ]

                    for ( let key in dataSet ) {

                        const result = isFinite( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isFinite( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isFiniteUnits }
