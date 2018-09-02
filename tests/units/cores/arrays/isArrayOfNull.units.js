/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isArrayOfNull method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isArrayOfNull } from '../../../../sources/cores/arrays'

function isArrayOfNullUnits () {

    describe( 'isArrayOfNull()', () => {

        it( 'should return false when the value is a void', () => {

            const dataSet = this._dataSet[ 'voids' ]
            for ( let key in dataSet ) {
                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a boolean', () => {

            const dataSet = this._dataSet[ 'booleans' ]
            for ( let key in dataSet ) {
                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const dataSet = this._dataSet[ 'numbers' ]
            for ( let key in dataSet ) {
                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const dataSet = this._dataSet[ 'strings' ]
            for ( let key in dataSet ) {
                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const dataSet = this._dataSet[ 'functions' ]
            for ( let key in dataSet ) {
                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false
            }

        } )

        //////////////// Specific part

        it( 'should return false when the value is an empty array', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'emptyArray' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an empty array object', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'emptyArrayObject' ] ) ).to.be.false

        } )

        it( 'should return false when the value is a single valued array of number', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'singleValued' ] ) ).to.be.false

        } )

        it( 'should return false when the value is a multi valued array of number', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'multiValued' ] ) ).to.be.false

        } )

        it( 'should return true when the value is an array of null', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'null' ] ) ).to.be.true

        } )

        it( 'should return false when the value is an array of undefined', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'undefined' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of voids', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'voids' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of booleans', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'booleans' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of numbers', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'numbers' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of strings', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'strings' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of functions', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'functions' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of objects', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'objects' ] ) ).to.be.false

        } )

        it( 'should return false when the value is an array of arrays', () => {

            const dataSet = this._dataSet[ 'arrays' ]
            expect( isArrayOfNull( dataSet[ 'arrays' ] ) ).to.be.false

        } )

        /////////////////

        it( 'should return false when the value is an typed array', () => {

            const dataSet = this._dataSet[ 'typedArrays' ]
            for ( let key in dataSet ) {
                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const dataSet = this._dataSet[ 'objects' ]
            for ( let key in dataSet ) {
                expect( isArrayOfNull( dataSet[ key ] ) ).to.be.false
            }

        } )

    } )

}

export { isArrayOfNullUnits }
