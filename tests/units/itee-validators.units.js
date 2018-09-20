/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 */

/* global describe */

import { _coresUnits }   from './cores/_cores.units'
import { _mathsUnits }   from './maths/_maths.units'
import { _physicsUnits } from './physics/_physics.units'

const root = typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global :
        Function( 'return this' )()

describe( 'Itee#Validators', () => {

    _coresUnits.call( root )
    _mathsUnits.call( root )
    _physicsUnits.call( root )

} )
