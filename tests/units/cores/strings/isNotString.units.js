/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isNotString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isNotString } from '../../../../sources/cores/strings/isNotString'

function isNotStringUnits () {

    describe( 'isNotString()', () => {

        it( 'should return false when the value is a void', () => {

            const values = this._dataMap.voids
            for( let key in values ) {
                expect( isNotString( values[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotStringUnits }
