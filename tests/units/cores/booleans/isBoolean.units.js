/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isBoolean method.
 * @requires {@link module:sources/cores/booleans}
 *
 */

/* global describe, expect, it */

import { isBoolean, isNotBoolean } from '../../../../sources/cores/booleans/isBoolean'

function isBooleanUnits () {

    describe( 'isBoolean()', () => {

        it( 'should return true only when the value is a boolean', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'booleans' ) {

                    for ( let key in dataSet ) {
                        expect( isBoolean( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isBoolean( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isNotBoolean()', () => {

        it( 'should return false only when the value is a boolean', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'booleans' ) {

                    for ( let key in dataSet ) {
                        expect( isNotBoolean( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotBoolean( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isBooleanUnits }
