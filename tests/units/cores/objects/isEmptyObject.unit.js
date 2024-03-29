import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isEmptyObjectNamespace from '../../../../sources/cores/objects/isEmptyObject.js'

function isEmptyObjectUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isEmptyObjectUnits', () => {

		describe( 'isEmptyObject()', () => {

			it( 'is bundlable', () => {

				expect(isEmptyObjectNamespace.isEmptyObject).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isEmptyObjectNamespace.isEmptyObject( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotEmptyObject()', () => {

			it( 'is bundlable', () => {

				expect(isEmptyObjectNamespace.isNotEmptyObject).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isEmptyObjectNamespace.isNotEmptyObject( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isEmptyObjectUnits }

