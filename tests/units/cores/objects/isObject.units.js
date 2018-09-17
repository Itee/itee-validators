/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/objects
 * @desc Export the units tests about isObject method.
 * @requires {@link module:sources/cores/objects}
 *
 */

/* global describe, expect, it */

import { isObject } from '../../../../sources/cores/objects/isObject'

function isObjectUnits () {

    describe( 'isObject()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isObject( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isObjectUnits }
