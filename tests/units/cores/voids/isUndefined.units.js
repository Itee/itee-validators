/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isUndefined method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isUndefined, isNotUndefined } from '../../../../sources/cores/voids/isUndefined'

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

    describe( 'isNotUndefined()', () => {

        it( 'should return false only when the value is undefined', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isNotUndefined( dataSet[ key ] )
                        if ( key === 'undefined' || key === 'void' ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotUndefined( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isUndefinedUnits }
