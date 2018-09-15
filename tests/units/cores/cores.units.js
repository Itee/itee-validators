/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe */

import { ArraysUnits }    from './arrays/arrays.units'
import { BooleansUnits }  from './booleans/booleans.units'
import { FunctionsUnits } from './functions/functions.units'
import { NumbersUnits }   from './numbers/numbers.units'
import { ObjectsUnits }   from './objects/objects.units'
import { StringsUnits }   from './strings/strings.units'
import { SymbolsUnits }   from './symbols/symbols.units'
import { VoidsUnits }     from './voids/voids.units'

function CoresUnits () {

    describe( 'Cores', () => {

        ArraysUnits.call( this )
        BooleansUnits.call( this )
        FunctionsUnits.call( this )
        NumbersUnits.call( this )
        ObjectsUnits.call( this )
        StringsUnits.call( this )
        SymbolsUnits.call( this )
        VoidsUnits.call( this )

    } )

}

export { CoresUnits }
