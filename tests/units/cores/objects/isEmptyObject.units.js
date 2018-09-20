/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/objects
 * @desc Export the units tests about isEmptyObject method.
 * @requires {@link module:sources/cores/objects}
 *
 */

/* global describe, expect, it */

import { isEmptyObject } from '../../../../sources/cores/objects/isEmptyObject'

function isEmptyObjectUnits () {

    describe( 'isEmptyObject()', () => {

        it( 'should return true only when the value is an empty object', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'objects' ) {

                    for ( let key in dataSet ) {

                        const result = isEmptyObject( dataSet[ key ] )
                        if ( key === 'empty' || key === 'instance' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isEmptyObject( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isEmptyObjectUnits }
