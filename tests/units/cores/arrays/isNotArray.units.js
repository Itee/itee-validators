/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArray } from '../../../../sources/cores/arrays/isNotArray'

function isNotArrayUnits () {

    describe( 'isNotArray()', () => {

        it( 'should return false only when the value is a array', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {
                        expect( isNotArray( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotArray( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotArrayUnits }
