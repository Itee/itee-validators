/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe */

import { CoresUnits }   from './cores/cores.units'
import { MathsUnits }   from './maths/maths.units'
import { PhysicsUnits } from './physics/physics.units'

const root = typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global :
        Function( 'return this' )()

describe( 'Itee#Validators', () => {

    CoresUnits.call( root )
    MathsUnits.call( root )
    PhysicsUnits.call( root )

} )
