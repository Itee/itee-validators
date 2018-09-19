/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isNotBlankString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isNotBlankString } from '../../../../sources/cores/strings/isNotBlankString'

function isNotBlankStringUnits () {

    describe( 'isNotBlankString()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isNotBlankString( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotBlankStringUnits }
