/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { TemperaturesUnits } from './temperatures/temperatures.units'

function PhysicsUnits () {

    describe( 'Physics', () => {

        TemperaturesUnits.call(this)

    } )

}

export { PhysicsUnits }
