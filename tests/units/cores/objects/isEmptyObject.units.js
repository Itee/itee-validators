/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
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

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataMap[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isEmptyObject( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isEmptyObjectUnits }
