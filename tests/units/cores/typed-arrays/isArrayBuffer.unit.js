import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isArrayBufferNamespace from '../../../../sources/cores/typed-arrays/isArrayBuffer.js'

function isArrayBufferUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isArrayBufferUnits', () => {

		describe( 'isArrayBuffer()', () => {

			it( 'is bundlable', () => {

				expect(isArrayBufferNamespace.isArrayBuffer).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayBufferNamespace.isArrayBuffer( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotArrayBuffer()', () => {

			it( 'is bundlable', () => {

				expect(isArrayBufferNamespace.isNotArrayBuffer).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayBufferNamespace.isNotArrayBuffer( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isArrayBufferUnits }

