import { expect }       from 'chai'
import { describe, it } from 'mocha'
//import { Testing }      from 'itee-utils/sources/testings/benchmarks'
import { Testing }      from 'itee-utils'
import * as isStringNamespace from '../../../../sources/cores/strings/isString.js'

function isStringUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isStringUnits', () => {

		describe( 'isString()', () => {

			it( 'is bundlable', () => {

				expect(isStringNamespace.isString).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isStringNamespace.isString( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotString()', () => {

			it( 'is bundlable', () => {

				expect(isStringNamespace.isNotString).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isStringNamespace.isNotString( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isStringUnits }

