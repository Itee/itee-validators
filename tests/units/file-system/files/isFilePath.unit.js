import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils/sources/testings/benchmarks'
//import { Testing }      from 'itee-utils'
import * as isFilePathNamespace from '../../../../sources/file-system/files/isFilePath.js'

function isFilePathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isFilePathUnits', () => {

		describe( 'isFilePath()', () => {

			it( 'is bundlable', () => {

				expect(isFilePathNamespace.isFilePath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isFilePathNamespace.isFilePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'isNotFilePath()', () => {

			it( 'is bundlable', () => {

				expect(isFilePathNamespace.isNotFilePath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isFilePathNamespace.isNotFilePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

	} )

}

export { isFilePathUnits }

