/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArray } from '../../../../sources/cores/arrays/isArray'

function isArrayUnits () {

    describe( 'isArray()', () => {

        it( 'should return true only when the value is a array', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {
                        expect( isArray( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isArray( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isArrayUnits }
