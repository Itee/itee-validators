this.Itee = this.Itee || {};
(function () {
    'use strict'

    /**
     * @author [Tristan Valcke]{@link https://github.com/Itee}
     * @license [MIT]{@link https://opensource.org/licenses/MIT}
     *
     */

    function createDataSet () {

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

        return {
            voids:     voidDataSet,
            booleans:  booleanDataSet,
            numbers:   numericDataSet,
            strings:   stringDataSet,
            functions: functionDataSet,
            arrays:    arrayDataSet,
            objects:   objectDataSet
        }

    }

    /**
     * @author [Tristan Valcke]{@link https://github.com/Itee}
     * @license [MIT]{@link https://opensource.org/licenses/MIT}
     *
     * @module sources/cores/voids
     * @desc Export the validation methods about voids notions
     */

    /**
     * Check if given data is null
     *
     * @param data {any} The data to check against the nullity
     * @returns {boolean} true if data is null, false otherwise.
     */
    function isNull ( data ) {
        return (data === null)
    }

    /**
     * Check if given data is not null
     *
     * @param data {any} The data to check against the nullity
     * @returns {boolean} true if data is not null, false otherwise.
     */
    function isNotNull ( data ) {
        return (data !== null)
    }

    function isNotNull_1 ( data ) {
        return !(data === null)
    }

    /**
     * Check if given data is undefined
     *
     * @param data {any} The data to check against the undefiness
     * @returns {boolean} true if data is undefined, false otherwise.
     */
    function isUndefined ( data ) {
        return (typeof data === 'undefined')
    }

    /**
     * Check if given data is defined
     *
     * @param data {any} The data to check against the undefiness
     * @returns {boolean} true if data is defined, false otherwise.
     */
    function isNotUndefined ( data ) {
        return (typeof data !== 'undefined')
    }

    /**
     * Check if given data is null or undefined
     *
     * @param data {any} The data to check against the existence
     * @returns {boolean} true if data is null or undefined, false otherwise.
     */
    function isNullOrUndefined ( data ) {
        return ((data === null) || (typeof data === 'undefined'))
    }

    /**
     * Check if given data is not null and not undefined
     *
     * @param data {any} The data to check against the existence
     * @returns {boolean} true if data is not null and not undefined, false otherwise.
     */
    function isDefined ( data ) {
        return ((data !== null) && (typeof data !== 'undefined'))
    }

    /**
     * Check emptiness of given data
     *
     * See: https://stackoverflow.com/questions/4346186/how-to-determine-if-a-function-is-empty
     *
     * @param data {any} The data to check against the emptiness
     * @returns {boolean} true if data is considered as empty, false otherwise.
     */
    function isEmpty ( data ) {

        // null and undefined are consider as "empty"
        if ( data === null ) {
            return true
        }
        if ( data === undefined ) {
            return true
        }

        // Assume if it has a length property with a non-zero value
        // that that property is correct.
        if ( data.length > 0 ) {
            return false
        }
        if ( data.length === 0 ) {
            return true
        }

        // Otherwise, does it have any properties of its own?
        for ( let key in data ) {
            if ( Object.prototype.hasOwnProperty.call( data, key ) ) {
                return false
            }
        }

        return true
    }

    /**
     * Check fullness of given data
     *
     * @param data {any} The data to check against the emptiness
     * @returns {boolean} true if data is considered as not empty, false otherwise.
     */
    function isNotEmpty ( data ) {
        return !isEmpty( data )
    }

    /**
     * @author [Tristan Valcke]{@link https://github.com/Itee}
     * @license [MIT]{@link https://opensource.org/licenses/MIT}
     *
     * @module sources/cores/strings
     * @desc Export the validation methods about strings
     *
     */

    /**
     * Check if given data is a string
     *
     * @param data {any} The data to check against the string type
     * @returns {boolean} true if data is a string, false otherwise.
     */
    function isString ( data ) {
        return (typeof data === 'string')
    }

    /**
     * Check if given data is not a string
     *
     * @param data {any} The data to check against the string type
     * @returns {boolean} true if data is not a string, false otherwise.
     */
    function isNotString ( data ) {
        return (typeof data !== 'string')
    }

    /**
     * Check if given data is an empty string
     *
     * @param data {any} The data to check against the emptiness of the string
     * @returns {boolean} true if data is an empty string, false otherwise.
     */
    function isEmptyString ( data ) {

        console.assert( isString( data ), 'Expect a string !' )

        return (data.length === 0)

    }

    /**
     * Check if given data is not an empty string
     *
     * @param data {any} The data to check against the emptiness of the string
     * @returns {boolean} true if data is not an empty string, false otherwise.
     */
    function isNotEmptyString ( data ) {

        if ( isNotString( data ) ) {
            throw new TypeError( 'Expect a string !' )
        }

        return (data.length > 0)

    }

    /**
     * Check if the given data is a blank string
     *
     * @param data {any} The data to check against the blankness of the string
     * @returns {boolean} true if data is a blank string, false otherwise.
     */
    function isBlankString ( data ) {

        if ( isEmptyString( data ) ) {
            throw new TypeError( 'Expect a non empty string !' )
        }

        return (!/\S/.test( data ))
    }

    /**
     * Check if the given data is not a blank string
     *
     * @param data {any} The data to check against the blankness of the string
     * @returns {boolean} true if data is not a blank string, false otherwise.
     */
    function isNotBlankString ( data ) {
        return (isNotEmptyString( data ) && /\S/.test( data ))
    }

    /**
     * @author [Tristan Valcke]{@link https://github.com/Itee}
     * @license [MIT]{@link https://opensource.org/licenses/MIT}
     *
     * @module sources/cores/objects
     * @desc Export the validation methods about objects
     * @requires {@link module:sources/cores/voids/isNull}
     * @requires {@link module:sources/cores/voids/isEmpty}
     */

    /**
     * Check if given data is an object
     *
     * @param data {any} The data to check against the object type
     * @returns {boolean} true if data is object, false otherwise
     */
    function isObject ( data ) {
        return (isNotNull( data ) && (typeof data === 'object') && !Array.isArray( data ))
    }

    /**
     * Check if given data is not an object
     *
     * @param data {any} The data to check against the object type
     * @returns {boolean} true if data is not an object, false otherwise
     */
    function isNotObject ( data ) {
        return !isObject( data )
    }

    /**
     * Check if given data is an empty object
     *
     * @param data {any} The data to check against the emptiness of the object
     * @returns {boolean} true if data is an empty object, false otherwise
     */
    function isEmptyObject ( data ) {
        return (isObject( data ) && isEmpty( data ))
    }

    /**
     * Check if given data is not an empty object
     *
     * @param data {any} The data to check against the emptiness of the object
     * @returns {boolean} true if data is not an empty object, false otherwise
     */
    function isNotEmptyObject ( data ) {
        return (isObject( data ) && isNotEmpty( data ))
    }

    /**
     * @author [Tristan Valcke]{@link https://github.com/Itee}
     * @license [MIT]{@link https://opensource.org/licenses/MIT}
     *
     * @module sources/cores/arrays
     * @desc Export the validation methods about Arrays
     * @requires {@link module:sources/cores/voids}
     * @requires {@link module:sources/cores/strings}
     * @requires {@link module:sources/cores/objects}
     *
     */

    /**
     * Check if given data is an array
     *
     * @param data {any} The data to check against the array type
     * @returns {boolean} true if data is array, false otherwise
     */
    function isArray ( data ) {
        return Array.isArray( data )
    }

    /**
     * Check if given data is not an array
     *
     * @param data {any} The data to check against the array type
     * @returns {boolean} true if data is not array, false otherwise
     */
    function isNotArray ( data ) {
        return !Array.isArray( data )
    }

    function isNotArray_1 ( data ) {
        return !isArray( data )
    }

    /**
     * Check if given data is not an empty array where all values are null
     *
     * @param data {any} The data to check against the array of array type
     * @returns {boolean} true if data is not an empty array where all values are null, false otherwise
     */
    function isArrayOfNull ( data ) {

        if ( !Array.isArray( data ) ) {
            return false
        }

        const dataLength = data.length
        if ( dataLength === 0 ) {
            return false
        }

        for ( let index = 0 ; index < dataLength ; index += 1 ) {
            if ( data[ index ] !== null ) {
                return false
            }
        }

        return true

    }

    function isArrayOfNull_1 ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isNotNull( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is not an empty array where all values are not null
     *
     * @param data {any} The data to check against the array of array type
     * @returns {boolean} true if data is not an empty array where all values are not null, false otherwise
     */
    function isNotArrayOfNull ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isNull( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is an empty array
     *
     * @param data {any} The data to check against the empty array
     * @returns {boolean} true if data is an empty array, false otherwise
     */
    function isEmptyArray ( data ) {
        return (isArray( data ) && isEmpty( data ))
    }

    /**
     * Check if given data is not an empty array
     *
     * @param data {any} The data to check against the empty array
     * @returns {boolean} true if data is not an empty array, false otherwise
     */
    function isNotEmptyArray ( data ) {
        return (isArray( data ) && isNotEmpty( data ))
    }

    /**
     * Check if given data is not an empty array where all values are undefined
     *
     * @param data {any} The data to check against the array of undefined
     * @returns {boolean} true if data is not an empty array where all values are undefined, false otherwise
     */
    function isArrayOfUndefined ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isDefined( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is not an empty array where all values are defined
     *
     * @param data {any} The data to check against the array of undefined
     * @returns {boolean} true if data is not an empty array where all values are defined, false otherwise
     */
    function isNotArrayOfUndefined ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isUndefined( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is an array of array
     *
     * @param data {any} The data to check against the array of array type
     * @returns {boolean} true if data is an array of array, false otherwise
     */
    function isArrayOfArray ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isNotArray( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is not an array of array
     *
     * @param data {any} The data to check against the array of array type
     * @returns {boolean} true if data is not an array of array, false otherwise
     */
    function isNotArrayOfArray ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isArray( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is not an empty array where all values are string
     *
     * @param data {any} The data to check against the array of strings
     * @returns {boolean} true if data is not an empty array where all values are string, false otherwise
     */
    function isArrayOfString ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isNotString( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is not an empty array where all values are not string
     *
     * @param data {any} The data to check against the array of strings
     * @returns {boolean} true if data is not an empty array where all values are not string, false otherwise
     */
    function isNotArrayOfString ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isString( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is an array with a single value
     *
     * @param data {any} The data to check against the single valued array
     * @returns {boolean} true if data is an array with a single value, false otherwise
     */
    function isArrayOfSingleElement ( data ) {

        return (isArray( data ) && data.length === 1)

    }

    /**
     * Check if given data is an array with multiples values
     *
     * @param data {any} The data to check against the single valued array
     * @returns {boolean} true if data is an array with multiples values, false otherwise
     */
    function isArrayOfMultiElement ( data ) {

        return (isArray( data ) && data.length > 1)

    }

    /**
     * Check if given data is an array where all values are of object type
     *
     * @param data {any} The data to check against the array of object type
     * @returns {boolean} true if data is an array where all values are of object type, false otherwise
     */
    function isArrayOfObject ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isNotObject( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * Check if given data is not an array where all values are of object type
     *
     * @param data {any} The data to check against the array of object type
     * @returns {boolean} true if data is not an array where all values are of object type, false otherwise
     */
    function isNotArrayOfObject ( data ) {

        if ( isEmptyArray( data ) ) {
            return false
        }

        for ( let index = 0, arrayLength = data.length ; index < arrayLength ; index += 1 ) {
            if ( isObject( data[ index ] ) ) {
                return false
            }
        }

        return true

    }

    /**
     * @author [Tristan Valcke]{@link https://github.com/Itee}
     * @license [MIT]{@link https://opensource.org/licenses/MIT}
     *
     */

    const root = typeof window !== 'undefined' ? window :
        typeof global !== 'undefined' ? global :
            Function( 'return this' )()

    suite( 'Array iteration', function () {

        const self   = root
        self.dataset = createDataSet()

        benchmark( 'isArrayOfNull',
            () => {

                const _dataSets = this.dataset
                for ( let i = 0, n = _dataSets.length ; i < n ; i++ ) {
                    const dataset = _dataSets[ i ]
                    for ( let j = 0, m = dataset.length ; j < m ; j++ ) {
                        isArrayOfNull( dataset[ j ] )
                    }
                }

            },
            {
                setup: function () {

                    this.dataset = self.dataset

                },
                teardown: function () {
                    delete this.dataset
                }
            } )

        benchmark( 'isArrayOfNull_1',
            () => {

                const _dataSets = this.dataset
                for ( let i = 0, n = _dataSets.length ; i < n ; i++ ) {
                    const dataset = _dataSets[ i ]
                    for ( let j = 0, m = dataset.length ; j < m ; j++ ) {
                        isArrayOfNull_1( dataset[ j ] )
                    }
                }

            },
            {
                setup: function () {

                    this.dataset = self.dataset

                },
                teardown: function () {
                    delete this.dataset
                }
            } )

    } )

}())
