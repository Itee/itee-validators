/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global Itee */

const globalDataMap = {

    voids: {
        null:      null,
        undefined: undefined,
        void:      void(0)
    },

    booleans: {
        true:  true,
        false: false
    },

    numbers: {
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
    },

    strings: (() => {
        'use strict'

        const dataMap = {
            empty:       '',
            blank:       '      ',
            stringNull:  new String(),
            stringEmpty: new String( '' ),
            stringBlank: new String( '    ' ),
            foobar:      'foobar'
        }

        const voidDataMap = globalDataMap[ 'voids' ]
        for ( let i = 0, m = voidDataMap.length ; i < m ; i++ ) {
            dataMap[ voidDataMap[ i ] ] = `${voidDataMap[ i ]}`
        }

        const booleanDataMap = globalDataMap[ 'booleans' ]
        for ( let j = 0, n = booleanDataMap.length ; j < n ; j++ ) {
            dataMap[ booleanDataMap[ j ] ] = `${booleanDataMap[ j ]}`
        }

        const numericDataMap = globalDataMap[ 'numbers' ]
        for ( let k = 0, o = numericDataMap.length ; k < o ; k++ ) {
            dataMap[ numericDataMap[ k ] ] = `${numericDataMap[ k ]}`
        }

        return dataMap

    })(),

    functions: {
        anonymousFunction: function () {},
        namedFunction:     function namedFunction () {},
        arrowFunction:     () => {}
    },

    arrays: (() => {
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

                const voidDataMap = globalDataMap[ 'voids' ]
                for ( let key in voidDataMap ) {
                    array.push( voidDataMap[ key ] )
                }

                return array

            })(),
            booleans: (() => {

                const array = []

                const booleanDataMap = globalDataMap[ 'booleans' ]
                for ( let key in booleanDataMap ) {
                    array.push( booleanDataMap[ key ] )
                }

                return array

            })(),
            numbers: (() => {

                const array = []

                const numericDataMap = globalDataMap[ 'numbers' ]
                for ( let key in numericDataMap ) {
                    array.push( numericDataMap[ key ] )
                }

                return array

            })(),
            strings: (() => {

                const array = []

                const stringDataMap = globalDataMap[ 'strings' ]
                for ( let key in stringDataMap ) {
                    array.push( stringDataMap[ key ] )
                }

                return array

            })(),
            functions: (() => {

                const array = []

                const functionDataMap = globalDataMap[ 'functions' ]
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

    })(),

    typedArrays: {
        int8Array:    new Int8Array( [ 1, 2, 3 ] ),
        uInt8Array:   new Uint8Array( [ 1, 2, 3 ] ),
        int16Array:   new Int16Array( [ 1, 2, 3 ] ),
        uInt16Array:  new Uint16Array( [ 1, 2, 3 ] ),
        int32Array:   new Int32Array( [ 1, 2, 3 ] ),
        uInt32Array:  new Uint32Array( [ 1, 2, 3 ] ),
        float32Array: new Float32Array( [ 1.0, 2.0, 3.0 ] ),
        float64Array: new Float64Array( [ 1.0, 2.0, 3.0 ] )
    },

    objects: {
        empty:     {},
        instance:  new Object(),
        null:      { null: null },
        undefined: { undefined: undefined },
        foo:       { foo: 'bar' }
    }

}


}

export function createDataMapBenchmarkOptions () {

    return {
        
        setup:    function onSetup () {
            this.datamap = Itee.TestsUtils.createDataMap()
        },
        
        teardown: function onTeardown () {
            delete this.datamap
        }
        
    }

}

export function iterateOverDataMap ( func ) {

    return function () {

        const datamap = this.datamap
        for ( let datasetKey in datamap ) {

            const dataset = datamap[ datasetKey ]
            for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

                return func( dataset[ i ] )

            }

        }

    }

}

export function createDataSet ( dataNames ) {

    const voidDataSet = {
        null:      null,
        undefined: undefined,
        void:      void(0)
    }

    const booleanDataSet = {
        true:  true,
        false: false
    }

    const numericDataSet = {
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

    const stringDataSet = (() => {
        'use strict'

        const dataSet = {
            empty:       '',
            blank:       '      ',
            stringNull:  new String(),
            stringEmpty: new String( '' ),
            stringBlank: new String( '    ' ),
            foobar:      'foobar'
        }

        for ( let i = 0, m = voidDataSet.length ; i < m ; i++ ) {
            dataSet[ voidDataSet[ i ] ] = `${voidDataSet[ i ]}`
        }

        for ( let j = 0, n = booleanDataSet.length ; j < n ; j++ ) {
            dataSet[ booleanDataSet[ j ] ] = `${booleanDataSet[ j ]}`
        }

        for ( let k = 0, o = numericDataSet.length ; k < o ; k++ ) {
            dataSet[ numericDataSet[ k ] ] = `${numericDataSet[ k ]}`
        }

        return dataSet

    })()

    const functionDataSet = {
        classicFunction: function emptyFct () {},
        arrowFunction:   () => {}
    }

    const arrayDataSet = (() => {
        'use strict'

        const dataSet = {
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
            undefined:        (() => {

                const undefinedArray = []

                for ( let index = 0 ; index < 3 ; index++ ) {
                    undefinedArray.push( undefined )
                }

                return undefinedArray

            })(),
            void:             (() => {

                const undefinedArray = []

                for ( let index = 0 ; index < 3 ; index++ ) {
                    undefinedArray.push( void(0) )
                }

                return undefinedArray

            })(),
            voids:            (() => {

                const array = []

                for ( let key in voidDataSet ) {
                    array.push( voidDataSet[ key ] )
                }

                return array

            })(),
            booleans:         (() => {

                const array = []

                for ( let key in booleanDataSet ) {
                    array.push( booleanDataSet[ key ] )
                }

                return array

            })(),
            numbers:          (() => {

                const array = []

                for ( let key in numericDataSet ) {
                    array.push( numericDataSet[ key ] )
                }

                return array

            })(),
            strings:          (() => {

                const array = []

                for ( let key in stringDataSet ) {
                    array.push( stringDataSet[ key ] )
                }

                return array

            })(),
            functions:        (() => {

                const array = []

                for ( let key in functionDataSet ) {
                    array.push( functionDataSet[ key ] )
                }

                return array

            })(),
            objects:          [
                {
                    foo: 'bar'
                },
                {
                    baz: 'qux'
                }
            ],
            arrays:           [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
        }

        return dataSet

    })()

    const typedArrayDataSet = {
        int8Array:    new Int8Array( [ 1, 2, 3 ] ),
        uInt8Array:   new Uint8Array( [ 1, 2, 3 ] ),
        int16Array:   new Int16Array( [ 1, 2, 3 ] ),
        uInt16Array:  new Uint16Array( [ 1, 2, 3 ] ),
        int32Array:   new Int32Array( [ 1, 2, 3 ] ),
        uInt32Array:  new Uint32Array( [ 1, 2, 3 ] ),
        float32Array: new Float32Array( [ 1.0, 2.0, 3.0 ] ),
        float64Array: new Float64Array( [ 1.0, 2.0, 3.0 ] )
    }

    const objectDataSet = [
        {},
        new Object(),
        { null: null },
        { undefined: undefined },
        { foo: 'bar' }
    ]

    return {
        voids:       voidDataSet,
        booleans:    booleanDataSet,
        numbers:     numericDataSet,
        strings:     stringDataSet,
        functions:   functionDataSet,
        arrays:      arrayDataSet,
        typedArrays: typedArrayDataSet,
        objects:     objectDataSet
    }

}

export function createDataSetBenchmarkOptions ( datasetName ) {

    return {

        setup:    function onSetup () {
            this.dataset = Itee.TestsUtils.createDataMap()[datasetName]
        },

        teardown: function onTeardown () {
            delete this.dataset
        }

    }

}

export function iterateOverDataSet ( func ) {

    return function () {

        const dataset = this.dataset
        for ( let i = 0, n = dataset.length ; i < n ; i++ ) {

            return func( dataset[ i ] )

        }

    }

}
