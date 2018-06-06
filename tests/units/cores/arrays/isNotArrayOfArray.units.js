/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfArray } from '../../../../sources/cores/arrays'

function isNotArrayOfArrayUnits () {

    describe( 'isNotArrayOfArray()', () => {

        it( 'should be implemented', () => {

            expect( isNotArrayOfArray( [] ) ).to.be.true

        } )

    } )

}

export { isNotArrayOfArrayUnits }
