/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfArray } from '../../../../sources/cores/arrays'

function isArrayOfArrayUnits () {

    describe( 'isArrayOfArray()', () => {

        it( 'should be implemented', () => {

            expect( isArrayOfArray( [] ) ).to.be.true

        } )

    } )

}

export { isArrayOfArrayUnits }
