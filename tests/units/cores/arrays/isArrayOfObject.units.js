/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfObject method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfObject } from '../../../../sources/cores/arrays/isArrayOfObject'

function isArrayOfObjectUnits () {

    describe( 'isArrayOfObject()', () => {

        it( 'should return true only when the value is a array of objects', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfObject( dataSet[ key ] )
                        if ( key === 'objects' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isArrayOfObject( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isArrayOfObjectUnits }
