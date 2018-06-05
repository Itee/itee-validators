/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

//const isNullTest        = require( './isNull.tests.js' )

function ObjectsTests () {

    describe( 'Objects', () => {

        beforeEach( () => {

            const voidDataSet = [
                null,
                undefined,
                void(0)
            ]

            const booleanDataSet = [
                true,
                false
            ]

            const numericDataSet = [
                Number.NEGATIVE_INFINITY,
                -Number.MAX_VALUE,
                Number.MIN_SAFE_INTEGER,
                -Number.MIN_VALUE,
                -0x123456,
                -2e+2,
                -1.0,
                -1,
                -0.0,
                -0,
                Number.NaN,
                0,
                0.0,
                1,
                1.0,
                2e+2,
                0x123456,
                Number.MIN_VALUE,
                Number.MAX_SAFE_INTEGER,
                Number.MAX_VALUE,
                Number.POSITIVE_INFINITY
            ]

            const stringDataSet = (() => {
                'use strict'

                const dataSet = []

                dataSet.push( '' )
                dataSet.push( '      ' )

                for ( let i = 0, m = voidDataSet.length ; i < m ; i++ ) {
                    dataSet.push( `${voidDataSet[ i ]}` )
                }

                for ( let j = 0, n = booleanDataSet.length ; j < n ; j++ ) {
                    dataSet.push( `${booleanDataSet[ j ]}` )
                }

                for ( let k = 0, o = numericDataSet.length ; k < o ; k++ ) {
                    dataSet.push( `${numericDataSet[ k ]}` )
                }

                dataSet.push( 'foobar' )

                return dataSet

            })()

            const functionDataSet = [
                function emptyFct () {},
                () => {}
            ]

            const arrayDataSet = (() => {
                'use strict'

                const dataSet = []

                dataSet.push( [] )

                for ( let i = 0, m = voidDataSet.length ; i < m ; i++ ) {
                    dataSet.push( [ voidDataSet[ i ] ] )
                }
                dataSet.push( voidDataSet )

                for ( let j = 0, n = booleanDataSet.length ; j < n ; j++ ) {
                    dataSet.push( [ booleanDataSet[ j ] ] )
                }
                dataSet.push( booleanDataSet )

                for ( let k = 0, o = numericDataSet.length ; k < o ; k++ ) {
                    dataSet.push( [ numericDataSet[ k ] ] )
                }
                dataSet.push( numericDataSet )

                for ( let k = 0, o = functionDataSet.length ; k < o ; k++ ) {
                    dataSet.push( [ functionDataSet[ k ] ] )
                }
                dataSet.push( functionDataSet )

                return dataSet

            })()

            const objectDataSet = [
                {},
                { null: null },
                { undefined: undefined }
            ]

            this.dataSet = {
                voids:     voidDataSet,
                booleans:  booleanDataSet,
                numbers:   numericDataSet,
                strings:   stringDataSet,
                functions: functionDataSet,
                arrays:    arrayDataSet,
                objects:   objectDataSet,
            }

        } )

        afterEach( () => {

            delete this.dataSet

        } )

        //...

    } )

}

module.exports = ObjectsTests
