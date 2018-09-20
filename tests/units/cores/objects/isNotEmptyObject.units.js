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

import { isNotEmptyObject } from '../../../../sources/cores/objects/isNotEmptyObject'

function isNotEmptyObjectUnits () {

    describe( 'isNotEmptyObject()', () => {

        it( 'should return true when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isNotEmptyObject( values[ key ] ) ).to.be.true
            }

        } )

    } )

}

export { isNotEmptyObjectUnits }
