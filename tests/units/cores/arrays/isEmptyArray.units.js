/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isEmptyArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isEmptyArray } from '../../../../sources/cores/arrays/isEmptyArray'

function isEmptyArrayUnits () {

    describe( 'isEmptyArray()', () => {

        it( 'should return true only when the value is an empty array object', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isEmptyArray( dataSet[ key ] )
                        if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isEmptyArray( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isEmptyArrayUnits }
