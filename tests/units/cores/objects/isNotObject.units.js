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

        it( 'should return true when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isNotObject( values[ key ] ) ).to.be.true
            }

        } )

    } )

}

export { isNotObjectUnits }
