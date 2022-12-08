/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe */

import { describe }           from 'mocha'
import { _temperaturesUnits } from './temperatures/_temperatures.units'

function _physicsUnits () {

    describe( 'Physics', () => {

        _temperaturesUnits.call( this )

    } )

}

export { _physicsUnits }
