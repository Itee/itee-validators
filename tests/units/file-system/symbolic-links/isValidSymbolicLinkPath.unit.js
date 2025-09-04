import { expect }       from 'chai'
import { describe, it } from 'mocha'
//import { Testing }      from 'itee-utils/sources/testings/benchmarks'
import { Testing }      from 'itee-utils'
import * as isValidSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isValidSymbolicLinkPath.js'

function isValidSymbolicLinkPathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isValidSymbolicLinkPathUnits', () => {

		describe( 'isValidSymbolicLinkPath()', () => {

			it( 'is bundlable', () => {

				expect(isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isInvalidSymbolicLinkPath()', () => {

			it( 'is bundlable', () => {

				expect(isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isValidSymbolicLinkPathUnits }

