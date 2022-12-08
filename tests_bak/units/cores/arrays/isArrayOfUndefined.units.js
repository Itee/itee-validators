/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfUndefined method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { expect } from 'chai'
import {
    describe,
    it
}                 from 'mocha'
import {
    isArrayOfUndefined,
    isNotArrayOfUndefined
}                 from '../../../../sources/cores/arrays/isArrayOfUndefined'

function isArrayOfUndefinedUnits () {

    describe( 'isArrayOfUndefined()', () => {

        it( 'should return true only when the value is a array of undefined', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isArrayOfUndefined( dataSet[ key ] )
                        if ( key === 'undefined' || key === 'void' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

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

export { isArrayOfUndefinedUnits }
