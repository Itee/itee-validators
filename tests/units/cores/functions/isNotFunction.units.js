/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/functions
 * @desc Export the units tests about isNotFunction method.
 * @requires {@link module:sources/cores/functions}
 *
 */

/* global describe, expect, it */

import { isNotFunction } from '../../../../sources/cores/functions/isNotFunction'

function isNotFunctionUnits () {

    describe( 'isNotFunction()', () => {

        it( 'should return false only when the value is a functions', () => {

            const dataMap = this._dataMap
            for( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'functions' ) {

                    for ( let key in dataSet ) {
                        expect( isNotFunction( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotFunction( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotFunctionUnits }
