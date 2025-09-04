import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils/sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as isUint8ClampedArrayNamespace from '../../../../sources/cores/typed-arrays/isUint8ClampedArray.js'

function isUint8ClampedArrayUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isUint8ClampedArrayUnits', () => {

		describe( 'isUint8ClampedArray()', () => {

			it( 'is bundlable', () => {

				expect(isUint8ClampedArrayNamespace.isUint8ClampedArray).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isUint8ClampedArrayNamespace.isUint8ClampedArray( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotUint8ClampedArray()', () => {

			it( 'is bundlable', () => {

				expect(isUint8ClampedArrayNamespace.isNotUint8ClampedArray).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isUint8ClampedArrayNamespace.isNotUint8ClampedArray( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isUint8ClampedArrayUnits }

