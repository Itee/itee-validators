/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfString method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfString } from '../../../../sources/cores/arrays/isNotArrayOfString'

function isNotArrayOfStringUnits () {

    describe( 'isNotArrayOfString()', () => {

        it( 'should return true when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let key in dataSet ) {
                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a boolean', () => {

            const dataSet = this._dataSet[ 'booleans' ]
            for ( let key in dataSet ) {
                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a number', () => {

            const dataSet = this._dataSet[ 'numbers' ]
            for ( let key in dataSet ) {
                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a string', () => {

            const dataSet = this._dataSet[ 'strings' ]
            for ( let key in dataSet ) {
                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a function', () => {

            const dataSet = this._dataSet[ 'functions' ]
            for ( let key in dataSet ) {
                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true
            }

        } )

        //////////////// Specific part

        it( 'should return true when the value is an empty array', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'emptyArray' ] ) ).to.be.true

        } )

        it( 'should return true when the value is an empty array object', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'emptyArrayObject' ] ) ).to.be.true

        } )

        it( 'should return true when the value is a single valued array of number', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'singleValued' ] ) ).to.be.true

        } )

        it( 'should return true when the value is a multi valued array of number', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'multiValued' ] ) ).to.be.true

        } )

        it( 'should return true when the value is an array of null', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'null' ] ) ).to.be.true

        } )

        it( 'should return true when the value is an array of undefined', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'undefined' ] ) ).to.be.true

        } )

        it( 'should return true when the value is an array of voids', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'voids' ] ) ).to.be.true

        } )

        it( 'should return true when the value is an array of booleans', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'booleans' ] ) ).to.be.true

        } )

        it( 'should return true when the value is an array of numbers', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'numbers' ] ) ).to.be.true

        } )

        it( 'should return false when the value is an array of strings', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'strings' ] ) ).to.be.false

        } )

        it( 'should return true when the value is an array of functions', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'functions' ] ) ).to.be.true

        } )

        it( 'should return true when the value is an array of objects', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'objects' ] ) ).to.be.true

        } )

        it( 'should return true when the value is an array of arrays', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isNotArrayOfString( dataSet[ 'arrays' ] ) ).to.be.true

        } )

        /////////////////

        it( 'should return true when the value is an typed array', () => {

            const dataSet = this._dataSet[ 'typedArrays' ]
            for ( let key in dataSet ) {
                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is an object', () => {

            const dataSet = this._dataSet[ 'objects' ]
            for ( let key in dataSet ) {
                expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true
            }

        } )

    } )

}

export { isNotArrayOfStringUnits }
