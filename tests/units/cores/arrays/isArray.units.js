/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArray method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArray } from '../../../../sources/cores/arrays/isArray'

function isArrayUnits () {

    describe( 'isArray()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataMap[ 'voids' ]
            for ( let key in dataSet ) {
                expect( isArray( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a boolean', () => {

            const dataSet = this._dataMap[ 'booleans' ]
            for ( let key in dataSet ) {
                expect( isArray( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const dataSet = this._dataMap[ 'numbers' ]
            for ( let key in dataSet ) {
                expect( isArray( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const dataSet = this._dataMap[ 'strings' ]
            for ( let key in dataSet ) {
                expect( isArray( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const dataSet = this._dataMap[ 'functions' ]
            for ( let key in dataSet ) {
                expect( isArray( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return true when the value is an array', () => {

            const dataSet = this._dataMap[ 'arrays' ]
            for ( let key in dataSet ) {
                expect( isArray( dataSet[ key ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is an typed array', () => {

            const dataSet = this._dataMap[ 'typedArrays' ]
            for ( let key in dataSet ) {
                expect( isArray( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const dataSet = this._dataMap[ 'objects' ]
            for ( let key in dataSet ) {
                expect( isArray( dataSet[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isArrayUnits }
