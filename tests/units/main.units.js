/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { CoresUnits } from './cores/cores.units'
import { MathsUnits } from './maths/maths.units'
import { PhysicsUnits } from './physics/physics.units'

const root = typeof window !== 'undefined' ? window :
    typeof global !== 'undefined' ? global :
        Function( 'return this' )();

describe( 'Itee#Validators', () => {

    CoresUnits.call( root )
    MathsUnits.call( root )
    PhysicsUnits.call( root )

} )
