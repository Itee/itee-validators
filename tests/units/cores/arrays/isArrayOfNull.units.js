/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfNull method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfNull } from '../../../../sources/cores/arrays'

function isArrayOfNullUnits () {

    describe( 'isArrayOfNull()', () => {

        it( 'should be implemented', () => {

            expect( isArrayOfNull( [] ) ).to.be.true

        } )

    } )

}

export { isArrayOfNullUnits }
