/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isNullOrUndefined method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isNullOrUndefined, isDefined } from '../../../../sources/cores/voids/isNullOrUndefined'

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

    describe( 'isDefined()', () => {

        it( 'should return false only when the value is null or undefined', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {
                        expect( isDefined( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isDefined( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNullOrUndefinedUnits }
