/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isNotEmptyString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isNotEmptyString } from '../../../../sources/cores/strings/isNotEmptyString'

function isNotEmptyStringUnits () {

    describe( 'isNotEmptyString()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isNotEmptyString( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotEmptyStringUnits }
