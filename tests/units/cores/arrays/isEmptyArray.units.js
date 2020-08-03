/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isEmptyArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import {
    isEmptyArray,
    isNotEmptyArray
} from '../../../../sources/cores/arrays/isEmptyArray'
import { expect } from 'chai'

function isEmptyArrayUnits () {

    describe( 'isEmptyArray()', () => {

        it( 'should return true only when the value is an empty array object', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isEmptyArray( dataSet[ key ] )
                        if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isEmptyArray( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isNotEmptyArray()', () => {

        it( 'should return false only when the value is an empty array object', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotEmptyArray( dataSet[ key ] )
                        if ( key === 'emptyArray' || key === 'emptyArrayObject' ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotEmptyArray( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isEmptyArrayUnits }
