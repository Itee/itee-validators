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

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isObject( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isObjectUnits }
