/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isBlankString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isBlankString } from '../../../../sources/cores/strings/isBlankString'

function isBlankStringUnits () {

    describe( 'isBlankString()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isBlankString( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isBlankStringUnits }
