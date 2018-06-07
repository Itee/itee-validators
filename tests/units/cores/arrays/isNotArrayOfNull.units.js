/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfNull method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfNull } from '../../../../sources/cores/arrays'

function isNotArrayOfNullUnits () {

    describe( 'isNotArrayOfNull()', () => {

        it( 'should be implemented', () => {

            expect( isNotArrayOfNull( [] ) ).to.be.true

        } )

    } )

}

export { isNotArrayOfNullUnits }
