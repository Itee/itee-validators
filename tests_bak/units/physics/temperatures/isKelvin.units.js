/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/physics/temperatures
 * @desc Export the units tests about isKelvin method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

/* global describe, expect, it */

import { expect } from 'chai'
import {
    describe,
    it
}                 from 'mocha'
import {
    isKelvin,
    isNotKelvin
}                 from '../../../../sources/physics/temperatures/isKelvin'

function isKelvinUnits () {

    describe( 'isKelvin()', () => {

        it.skip( 'should be implemented', () => {

            expect( isKelvin( 0 ) ).to.be.true

        } )

        it.skip( 'should be implemented', () => {

            expect( isNotKelvin( 0 ) ).to.be.false

        } )

    } )

}

export { isKelvinUnits }
