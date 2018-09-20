/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfObject method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfObject } from '../../../../sources/cores/arrays/isNotArrayOfObject'

function isNotArrayOfObjectUnits () {

    describe( 'isNotArrayOfObject()', () => {

        it( 'should return false only when the value is a array of objects', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfObject( dataSet[ key ] )
                        if ( key === 'objects' ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotArrayOfObject( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotArrayOfObjectUnits }
