/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfString method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfString } from '../../../../sources/cores/arrays'

function isNotArrayOfStringUnits () {

    describe( 'isNotArrayOfString()', () => {

        it( 'should be implemented', () => {

            expect( isNotArrayOfString( [] ) ).to.be.true

        } )

    } )

}

export { isNotArrayOfStringUnits }
