/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/functions
 * @desc Export the units tests about isFunction method.
 * @requires {@link module:sources/cores/functions}
 *
 */

/* global describe, expect, it */

import { isFunction } from '../../../../sources/cores/functions/isFunction'


function isFunctionUnits () {

    describe( 'isFunction()', () => {

        it( 'should return true only when the value is a functions', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'functions' ) {

                    for ( let key in dataSet ) {
                        expect( isFunction( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isFunction( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isFunctionUnits }
