/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArray } from '../../../../sources/cores/arrays'

function isArrayUnits () {

    describe( 'isArray()', () => {

        it( 'should be implemented', () => {

            expect( isArray( [] ) ).to.be.true

        } )

    } )

}

export { isArrayUnits }
