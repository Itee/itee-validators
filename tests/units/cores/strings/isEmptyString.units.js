/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isEmptyString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isEmptyString } from '../../../../sources/cores/strings/isEmptyString'

function isEmptyStringUnits () {

    describe( 'isEmptyString()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isEmptyString( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isEmptyStringUnits }
