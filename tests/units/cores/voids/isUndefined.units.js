/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isUndefined method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isUndefined } from '../../../../sources/cores/voids/isUndefined'

function isUndefinedUnits () {

    describe( 'isUndefined()', () => {

        it( 'should return true only when the value is undefined', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isUndefined( dataSet[ key ] )
                        if ( key === 'undefined' || key === 'void' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isUndefined( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isUndefinedUnits }
