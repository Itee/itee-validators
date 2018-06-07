/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfObject method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfObject } from '../../../../sources/cores/arrays'

function isArrayOfObjectUnits () {

    describe( 'isArrayOfObject()', () => {

        it( 'should be implemented', () => {

            expect( isArrayOfObject( [] ) ).to.be.true

        } )

    } )

}

export { isArrayOfObjectUnits }
