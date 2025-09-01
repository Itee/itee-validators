import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isValidDirectoryPathNamespace from '../../../../sources/file-system/directories/isValidDirectoryPath.js'

function isValidDirectoryPathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isValidDirectoryPathUnits', () => {

		describe( 'isValidDirectoryPath()', () => {

			it( 'is bundlable', () => {

				expect(isValidDirectoryPathNamespace.isValidDirectoryPath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isValidDirectoryPathNamespace.isValidDirectoryPath( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isInvalidDirectoryPath()', () => {

			it( 'is bundlable', () => {

				expect(isValidDirectoryPathNamespace.isInvalidDirectoryPath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isValidDirectoryPathNamespace.isInvalidDirectoryPath( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isValidDirectoryPathUnits }

