import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isEmptyFileNamespace from '../../../../sources/file-system/files/isEmptyFile.js'

describe( 'isEmptyFileUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isEmptyFile()', function () {

		it( 'should be bundlable', async function () {

			expect(isEmptyFileNamespace.isEmptyFile).to.exist

		} )

		it( 'should return value of type boolean when filePath is of type string and threshold is of type number', async function() {

			const dataSet0 = _dataMap[ 'strings' ]
			const dataSet1 = _dataMap[ 'numbers' ]

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

	describe( 'isNotEmptyFile()', function () {

		it( 'should be bundlable', async function () {

			expect(isEmptyFileNamespace.isNotEmptyFile).to.exist

		} )

		it( 'should return value of type boolean when filePath is of type string and threshold is of type number', async function() {

			const dataSet0 = _dataMap[ 'strings' ]
			const dataSet1 = _dataMap[ 'numbers' ]

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
