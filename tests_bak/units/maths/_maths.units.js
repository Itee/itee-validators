/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe, expect, it */

import { expect } from 'chai'
import {
    describe,
    it
}                 from 'mocha'

function _mathsUnits () {

    describe( 'Maths', () => {

        it.skip( 'should be implemented', () => {

            expect( true ).to.be.true

        } )

    } )

}

export { _mathsUnits }
