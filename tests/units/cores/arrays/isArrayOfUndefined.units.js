/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfUndefined method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfUndefined } from '../../../../sources/cores/arrays'

function isArrayOfUndefinedUnits () {

    describe( 'isArrayOfUndefined()', () => {

        it( 'should be implemented', () => {

            expect( isArrayOfUndefined( [] ) ).to.be.true

        } )

    } )

}

export { isArrayOfUndefinedUnits }
