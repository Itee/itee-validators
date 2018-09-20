/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isEmpty method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isEmpty } from '../../../../sources/cores/voids/isEmpty'

function isEmptyUnits () {

    describe( 'isEmpty()', () => {

        it( 'should return true only when the value is an empty container (string, array, object)', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ]

                    for ( let key in dataSet ) {

                        const result = isEmpty( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else if ( mapKey === 'arrays' ) {

                    const allowed = [ 'emptyArray', 'emptyArrayObject' ]

                    for ( let key in dataSet ) {

                        const result = isEmpty( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else if ( mapKey === 'objects' ) {

                    const allowed = [ 'empty', 'instance' ]

                    for ( let key in dataSet ) {

                        const result = isEmpty( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isEmpty( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isEmptyUnits }
