/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfMultiElement method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfMultiElement } from '../../../../sources/cores/arrays/isArrayOfMultiElement'
import { expect } from 'chai'

function isArrayOfMultiElementUnits () {

    describe( 'isArrayOfMultiElement()', () => {

        it( 'should return true only when the value is a multi valued array', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const value  = dataSet[ key ]
                        const result = isArrayOfMultiElement( value )
                        if ( value.length > 1 ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isArrayOfMultiElement( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isArrayOfMultiElementUnits }
