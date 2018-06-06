/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isEmptyArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isEmptyArray } from '../../../../sources/cores/arrays'

function isEmptyArrayUnits () {

    describe( 'isEmptyArray()', () => {

        it( 'should be implemented', () => {

            expect( isEmptyArray( [] ) ).to.be.true

        } )

    } )

}

export { isEmptyArrayUnits }
