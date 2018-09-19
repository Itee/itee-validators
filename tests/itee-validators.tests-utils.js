/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee */

const voids = {
    null:      null,
    undefined: undefined,
    void:      void(0)
}

const booleans = {
    true:  true,
    false: false
}

const numbers = {
    negativeInfinity:       Number.NEGATIVE_INFINITY,
    negativeMaxValue:       -Number.MAX_VALUE,
    negativeMinSafeInteger: Number.MIN_SAFE_INTEGER,
    negativeMinValue:       -Number.MIN_VALUE,
    negativeHexa:           -0x123456,
    negativePow:            -2e+2,
    negativeFloat:          -1.0,
    negativeInt:            -1,
    negativeNullDouble:     -0.0,
    negativeNullInt:        -0,
    nan:                    Number.NaN,
    positiveNullInt:        0,
    positiveNullFloat:      0.0,
    positiveInt:            1,
    positiveFloat:          1.0,
    positivePow:            2e+2,
    positiveHexa:           0x123456,
    positiveMinValue:       Number.MIN_VALUE,
    positiveMaxSafeInteger: Number.MAX_SAFE_INTEGER,
    positiveMaxValue:       Number.MAX_VALUE,
    positiveInfinity:       Number.POSITIVE_INFINITY
}

const strings = (() => {
    'use strict'

    const dataMap = {
        empty:       '',
        blank:       '      ',
        stringNull:  new String(),
        stringEmpty: new String( '' ),
        stringBlank: new String( '    ' ),
        foobar:      'foobar'
    }

    const voidDataMap = voids
    for ( let i = 0, m = voidDataMap.length ; i < m ; i++ ) {
        dataMap[ voidDataMap[ i ] ] = `${voidDataMap[ i ]}`
    }

    const booleanDataMap = booleans
    for ( let j = 0, n = booleanDataMap.length ; j < n ; j++ ) {
        dataMap[ booleanDataMap[ j ] ] = `${booleanDataMap[ j ]}`
    }

    const numericDataMap = numbers
    for ( let k = 0, o = numericDataMap.length ; k < o ; k++ ) {
        dataMap[ numericDataMap[ k ] ] = `${numericDataMap[ k ]}`
    }

    return dataMap

})()

const functions = {
    anonymousFunction: function () {},
    namedFunction:     function namedFunction () {},
    arrowFunction:     () => {}
}

const arrays = (() => {
    'use strict'

    const dataMap = {
        emptyArray:       [],
        emptyArrayObject: new Array(),
        singleValued:     [ 0 ],
        multiValued:      [ 0, 1, 2 ],
        null:             (() => {

            const nullArray = []

            for ( let index = 0 ; index < 3 ; index++ ) {
                nullArray.push( null )
            }

            return nullArray

        })(),
        undefined: (() => {

            const undefinedArray = []

            for ( let index = 0 ; index < 3 ; index++ ) {
                undefinedArray.push( undefined )
            }

            return undefinedArray

        })(),
        void: (() => {

            const undefinedArray = []

            for ( let index = 0 ; index < 3 ; index++ ) {
                undefinedArray.push( void(0) )
            }

            return undefinedArray

        })(),
        voids: (() => {

            const array = []

            const voidDataMap = voids
            for ( let key in voidDataMap ) {
                array.push( voidDataMap[ key ] )
            }

            return array

        })(),
        booleans: (() => {

            const array = []

            const booleanDataMap = booleans
            for ( let key in booleanDataMap ) {
                array.push( booleanDataMap[ key ] )
            }

            return array

        })(),
        numbers: (() => {

            const array = []

            const numericDataMap = numbers
            for ( let key in numericDataMap ) {
                array.push( numericDataMap[ key ] )
            }

            return array

        })(),
        strings: (() => {

            const array = []

            const stringDataMap = strings
            for ( let key in stringDataMap ) {
                array.push( stringDataMap[ key ] )
            }

            return array

        })(),
        functions: (() => {

            const array = []

            const functionDataMap = functions
            for ( let key in functionDataMap ) {
                array.push( functionDataMap[ key ] )
            }

            return array

        })(),
        objects: [
            {
                foo: 'bar'
            },
            {
                baz: 'qux'
            }
        ],
        arrays: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
    }

    return dataMap

})()

const typedArrays = {
    int8Array:    new Int8Array( [ 1, 2, 3 ] ),
    uInt8Array:   new Uint8Array( [ 1, 2, 3 ] ),
    int16Array:   new Int16Array( [ 1, 2, 3 ] ),
    uInt16Array:  new Uint16Array( [ 1, 2, 3 ] ),
    int32Array:   new Int32Array( [ 1, 2, 3 ] ),
    uInt32Array:  new Uint32Array( [ 1, 2, 3 ] ),
    float32Array: new Float32Array( [ 1.0, 2.0, 3.0 ] ),
    float64Array: new Float64Array( [ 1.0, 2.0, 3.0 ] )
}

const objects = {
    empty:     {},
    instance:  new Object(),
    null:      { null: null },
    undefined: { undefined: undefined },
    foo:       { foo: 'bar' }
}

const globalDataMap = {
    voids,
    booleans,
    numbers,
    strings,
    functions,
    arrays,
    typedArrays,
    objects
}

const TestsUtils = {

    DataMap: undefined,

    createDataMap: function ( dataMapOptions ) {

        if ( dataMapOptions === undefined ) {

            dataMapOptions = {
                voids:       [],
                booleans:    [],
                numbers:     [],
                strings:     [],
                functions:   [],
                arrays:      [],
                typedArrays: [],
                objects:     []
            }

        }

        let dataMap = {}

        for ( let optionKey in dataMapOptions ) {

            const map = globalDataMap[ optionKey ]
            if ( map === undefined ) {
                throw ReferenceError( `The global data map does not contain element for key: ${optionKey}` )
            }

            const option = dataMapOptions[ optionKey ]

            dataMap[ optionKey ] = {}

            if ( option.length === 0 ) {

                for ( let valueKey in map ) {
                    dataMap[ optionKey ][ valueKey ] = map[ valueKey ]
                }

            } else {

                for ( let i = 0, nbOptions = option.length ; i < nbOptions ; i++ ) {
                    dataMap[ optionKey ][ option[ i ] ] = map[ option[ i ] ]
                }

            }

        }

        return dataMap

    },

    createDataMapBenchmarkOptions: function ( dataMapOptions ) {

        Itee.TestsUtils.DataMap = Itee.TestsUtils.createDataMap( dataMapOptions )

        return {

            setup: function onSetup () {
                this.datamap = Itee.TestsUtils.DataMap
            },

            teardown: function onTeardown () {
                delete this.datamap
            }

        }

    },

    iterateOverDataMap: function ( func ) {

        return function _iterateOverDataMap () {

            const datamap = this.datamap
            for ( let datasetKey in datamap ) {

                const dataset = datamap[ datasetKey ]
                for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

                    return func( dataset[ i ] )

                }

            }

        }

    },

    createDataSet: function ( dataSetOptions ) {

        if ( dataSetOptions === undefined ) {

            dataSetOptions = {
                voids:       [],
                booleans:    [],
                numbers:     [],
                strings:     [],
                functions:   [],
                arrays:      [],
                typedArrays: [],
                objects:     []
            }

        }

        let dataSet = []

        for ( let optionKey in dataSetOptions ) {

            const map    = globalDataMap[ optionKey ]
            const option = dataSetOptions[ optionKey ]

            if ( option.length === 0 ) {

                for ( let valueKey in map ) {
                    dataSet.push( map[ valueKey ] )
                }

            } else {

                for ( let i = 0, nbOptions = option.length ; i < nbOptions ; i++ ) {
                    dataSet.push( map[ option[ i ] ] )
                }

            }

        }

        return dataSet

    },

    createDataSetBenchmarkOptions: function ( datasetName ) {

        return {

            setup: function onSetup () {
                this.dataset = Itee.TestsUtils.createDataMap()[ datasetName ]
            },

            teardown: function onTeardown () {
                delete this.dataset
            }

        }

    },

    iterateOverDataSet: function ( func ) {

        return function () {

            const dataset = this.dataset
            for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

                return func( dataset[ i ] )

            }

        }

    }

}

export { TestsUtils }
