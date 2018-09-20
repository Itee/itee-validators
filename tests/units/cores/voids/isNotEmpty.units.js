/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isNotEmpty method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isNotEmpty } from '../../../../sources/cores/voids/isNotEmpty'

function isNotEmptyUnits () {

    describe( 'isNotEmpty()', () => {

        it( 'should return false only when the value is an empty container (string, array, object)', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ]

                    for ( let key in dataSet ) {

                        const result = isNotEmpty( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else if ( mapKey === 'arrays' ) {

                    const allowed = [ 'emptyArray', 'emptyArrayObject' ]

                    for ( let key in dataSet ) {

                        const result = isNotEmpty( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else if ( mapKey === 'objects' ) {

                    const allowed = [ 'empty', 'instance' ]

                    for ( let key in dataSet ) {

                        const result = isNotEmpty( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotEmpty( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotEmptyUnits }
