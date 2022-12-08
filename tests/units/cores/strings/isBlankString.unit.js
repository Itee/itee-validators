import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isBlankStringNamespace from '../../../../sources/cores/strings/isBlankString.js'

function isBlankStringUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isBlankStringUnits', () => {

		describe( 'isBlankString()', () => {

			it( 'is bundlable', () => {

				expect(isBlankStringNamespace.isBlankString).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isBlankStringNamespace.isBlankString( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotBlankString()', () => {

			it( 'is bundlable', () => {

				expect(isBlankStringNamespace.isNotBlankString).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isBlankStringNamespace.isNotBlankString( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isBlankStringUnits }

