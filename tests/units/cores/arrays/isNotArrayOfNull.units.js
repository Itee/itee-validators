/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfNull method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfNull } from '../../../../sources/cores/arrays/isNotArrayOfNull'

function isNotArrayOfNullUnits () {

    describe( 'isNotArrayOfNull()', () => {

        it( 'should return false only when the value is an array of null', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfNull( dataSet[ key ] )
                        if ( key === 'null' ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotArrayOfNull( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotArrayOfNullUnits }
