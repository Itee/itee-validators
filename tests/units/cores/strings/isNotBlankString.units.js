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

            const dataSet = this._dataMap[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotBlankString( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotBlankStringUnits }
