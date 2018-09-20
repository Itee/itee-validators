/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe */

import { _temperaturesUnits } from './temperatures/_temperatures.units'

function _physicsUnits () {

    describe( 'Physics', () => {

        _temperaturesUnits.call( this )

    } )

}

export { _physicsUnits }
