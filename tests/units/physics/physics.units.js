/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

import { TemperaturesUnits } from './temperatures/temperatures.units'

function PhysicsUnits () {

    describe( 'Physics', () => {

        TemperaturesUnits.call(this)

    } )

}

export { PhysicsUnits }
