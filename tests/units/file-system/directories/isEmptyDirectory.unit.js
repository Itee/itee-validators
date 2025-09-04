import { expect }       from 'chai'
import { describe, it } from 'mocha'
//import { Testing }      from 'itee-utils/sources/testings/benchmarks'
import { Testing }      from 'itee-utils'
import * as isEmptyDirectoryNamespace from '../../../../sources/file-system/directories/isEmptyDirectory.js'

function isEmptyDirectoryUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isEmptyDirectoryUnits', () => {

		describe( 'isEmptyDirectory()', () => {

			it( 'is bundlable', () => {

				expect(isEmptyDirectoryNamespace.isEmptyDirectory).to.exist

			} )

			it( 'return type is boolean when directoryPath is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isEmptyDirectoryNamespace.isEmptyDirectory( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'isNotEmptyDirectory()', () => {

			it( 'is bundlable', () => {

				expect(isEmptyDirectoryNamespace.isNotEmptyDirectory).to.exist

			} )

			it( 'return type is boolean when directoryPath is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isEmptyDirectoryNamespace.isNotEmptyDirectory( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

	} )

}

export { isEmptyDirectoryUnits }

