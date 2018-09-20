/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/objects
 * @desc Export the units tests about isNotEmptyObject method.
 * @requires {@link module:sources/cores/objects}
 *
 */

/* global describe, expect, it */

import { isNotEmptyObject } from '../../../../sources/cores/objects/isNotEmptyObject'

function isNotEmptyObjectUnits () {

    describe( 'isNotEmptyObject()', () => {

        it( 'should return false only when the value is an empty object', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'objects' ) {

                    for ( let key in dataSet ) {

                        const result = isNotEmptyObject( dataSet[ key ] )
                        if ( key === 'empty' || key === 'instance' ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotEmptyObject( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotEmptyObjectUnits }
