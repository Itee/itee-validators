/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfObject method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfObject } from '../../../../sources/cores/arrays'

function isNotArrayOfObjectUnits () {

    describe( 'isNotArrayOfObject()', () => {

        it( 'should be implemented', () => {

            expect( isNotArrayOfObject( [] ) ).to.be.true

        } )

    } )

}

export { isNotArrayOfObjectUnits }
