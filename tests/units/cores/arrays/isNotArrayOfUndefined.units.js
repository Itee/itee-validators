/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfUndefined method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfUndefined } from '../../../../sources/cores/arrays'

function isNotArrayOfUndefinedUnits () {

    describe( 'isNotArrayOfUndefined()', () => {

        it( 'should be implemented', () => {

            expect( isNotArrayOfUndefined( [] ) ).to.be.true

        } )

    } )

}

export { isNotArrayOfUndefinedUnits }
