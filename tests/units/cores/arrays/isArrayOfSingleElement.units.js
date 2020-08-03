/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfSingleElement method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfSingleElement } from '../../../../sources/cores/arrays/isArrayOfSingleElement'
import { expect } from 'chai'

function isArrayOfSingleElementUnits () {

    describe( 'isArrayOfSingleElement()', () => {

        it( 'should return true only when the value is a single valued array of number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfSingleElement( dataSet[ key ] )
                        if ( key === 'singleValued' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isArrayOfSingleElement( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isArrayOfSingleElementUnits }
