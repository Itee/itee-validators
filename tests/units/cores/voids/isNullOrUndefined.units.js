/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isNullOrUndefined method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isNullOrUndefined } from '../../../../sources/cores/voids/isNullOrUndefined'

function isNullOrUndefinedUnits () {

    describe( 'isNullOrUndefined()', () => {

        it( 'should return true only when the value is null or undefined', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {
                        expect( isNullOrUndefined( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNullOrUndefined( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isNullOrUndefinedUnits }
