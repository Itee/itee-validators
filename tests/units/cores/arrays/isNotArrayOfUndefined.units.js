/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfUndefined method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfUndefined } from '../../../../sources/cores/arrays/isNotArrayOfUndefined'

function isNotArrayOfUndefinedUnits () {

    describe( 'isNotArrayOfUndefined()', () => {

        it( 'should return false only when the value is a array of undefined', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfUndefined( dataSet[ key ] )
                        if ( key === 'undefined' || key === 'void' ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotArrayOfUndefined( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotArrayOfUndefinedUnits }
