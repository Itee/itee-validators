import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isDirectoryPathNamespace from '../../../../sources/file-system/directories/isDirectoryPath.js'


function isDirectoryPathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isDirectoryPathUnits', () => {

		describe( 'isDirectoryPath()', () => {

			it( 'is bundlable', () => {

				expect(isDirectoryPathNamespace.isDirectoryPath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isDirectoryPathNamespace.isDirectoryPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'isNotDirectoryPath()', () => {

			it( 'is bundlable', () => {

				expect(isDirectoryPathNamespace.isNotDirectoryPath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isDirectoryPathNamespace.isNotDirectoryPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

	} )

}

export { isDirectoryPathUnits }

