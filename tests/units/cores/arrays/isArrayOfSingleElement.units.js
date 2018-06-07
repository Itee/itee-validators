/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfSingleElement method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfSingleElement } from '../../../../sources/cores/arrays'

function isArrayOfSingleElementUnits () {

    describe( 'isArrayOfSingleElement()', () => {

        it( 'should be implemented', () => {

            expect( isArrayOfSingleElement( [] ) ).to.be.true

        } )

    } )

}

export { isArrayOfSingleElementUnits }
