import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isEmptyFileNamespace from '../../../../sources/file-system/files/isEmptyFile.js'

function isEmptyFileUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isEmptyFileUnits', () => {

		describe( 'isEmptyFile()', () => {

			it( 'is bundlable', () => {

				expect(isEmptyFileNamespace.isEmptyFile).to.exist

			} )

			it( 'return type is boolean when filePath is of type string and threshold is of type number', () => {

				const dataSet0 = this._dataMap[ 'strings' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = isEmptyFileNamespace.isEmptyFile( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotEmptyFile()', () => {

			it( 'is bundlable', () => {

				expect(isEmptyFileNamespace.isNotEmptyFile).to.exist

			} )

			it( 'return type is boolean when filePath is of type string and threshold is of type number', () => {

				const dataSet0 = this._dataMap[ 'strings' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = isEmptyFileNamespace.isNotEmptyFile( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isEmptyFileUnits }

