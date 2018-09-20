/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfNull method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfNull } from '../../../../sources/cores/arrays/isArrayOfNull'

function isArrayOfNullUnits () {

    describe( 'isArrayOfNull()', () => {

        it( 'should return true only when the value is an array of null', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfNull( dataSet[ key ] )
                        if ( key === 'null' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isArrayOfNullUnits }
