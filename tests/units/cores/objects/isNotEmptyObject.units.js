/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/objects
 * @desc Export the units tests about isNotEmptyObject method.
 * @requires {@link module:sources/cores/objects}
 *
 */

/* global describe, expect, it */

import { isNotEmptyObject } from '../../../../sources/cores/objects'

function isNotEmptyObjectUnits () {

    describe( 'isNotEmptyObject()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotEmptyObject( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotEmptyObjectUnits }
