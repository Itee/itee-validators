/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfObject method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfObject } from '../../../../sources/cores/arrays'

function isArrayOfObjectUnits () {

    describe( 'isArrayOfObject()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let key in dataSet ) {
                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a boolean', () => {

            const dataSet = this._dataSet[ 'booleans' ]
            for ( let key in dataSet ) {
                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const dataSet = this._dataSet[ 'numbers' ]
            for ( let key in dataSet ) {
                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const dataSet = this._dataSet[ 'strings' ]
            for ( let key in dataSet ) {
                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const dataSet = this._dataSet[ 'functions' ]
            for ( let key in dataSet ) {
                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false
            }

        } )

        //////////////// Specific part

        it( 'should return false when the value is an empty array', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'emptyArray' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an empty array object', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'emptyArrayObject' ] ) ).to.be.false

        } )

        it( 'should return false when the value is a single valued array of number', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'singleValued' ] ) ).to.be.false

        } )

        it( 'should return false when the value is a multi valued array of number', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'multiValued' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of null', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'null' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of undefined', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'undefined' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of voids', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'voids' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of booleans', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'booleans' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of numbers', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'numbers' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of functions', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'functions' ] ) ).to.be.false

        } )

        it( 'should return true when the value is an array of objects', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'objects' ] ) ).to.be.true

        } )

        it( 'should return false when the value is an array of arrays', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfUndefined( dataSet[ 'arrays' ] ) ).to.be.false

        } )

        /////////////////

        it( 'should return false when the value is an typed array', () => {

            const dataSet = this._dataSet[ 'typedArrays' ]
            for ( let key in dataSet ) {
                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const dataSet = this._dataSet[ 'objects' ]
            for ( let key in dataSet ) {
                expect( isArrayOfUndefined( dataSet[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isArrayOfObjectUnits }
