/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArray } from '../../../../sources/cores/arrays'

function isNotArrayUnits () {

    describe( 'isNotArray()', () => {

        it( 'should be implemented', () => {

            expect( isNotArray( [] ) ).to.be.true

        } )

    } )

}

export { isNotArrayUnits }
