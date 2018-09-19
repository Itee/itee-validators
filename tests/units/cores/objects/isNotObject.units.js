/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/objects
 * @desc Export the units tests about isNotObject method.
 * @requires {@link module:sources/cores/objects}
 *
 */

/* global describe, expect, it */

import { isNotObject } from '../../../../sources/cores/objects/isNotObject'

function isNotObjectUnits () {

    describe( 'isNotObject()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataMap[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotObject( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotObjectUnits }
