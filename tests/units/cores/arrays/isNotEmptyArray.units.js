/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotEmptyArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotEmptyArray } from '../../../../sources/cores/arrays'

function isNotEmptyArrayUnits () {

    describe( 'isNotEmptyArray()', () => {

        it( 'should be implemented', () => {

            expect( isNotEmptyArray( [] ) ).to.be.true

        } )

    } )

}

export { isNotEmptyArrayUnits }
