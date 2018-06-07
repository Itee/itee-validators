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

import { isNotEmptyString } from '../../../../sources/cores/strings'

function isNotEmptyStringUnits () {

    describe( 'isNotEmptyString()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
                expect( isNotEmptyString( dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotEmptyStringUnits }
