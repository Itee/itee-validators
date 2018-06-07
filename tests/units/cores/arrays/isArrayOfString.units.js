/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfString method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfString } from '../../../../sources/cores/arrays'

function isArrayOfStringUnits () {

    describe( 'isArrayOfString()', () => {

        it( 'should be implemented', () => {

            expect( isArrayOfString( [] ) ).to.be.true

        } )

    } )

}

export { isArrayOfStringUnits }
