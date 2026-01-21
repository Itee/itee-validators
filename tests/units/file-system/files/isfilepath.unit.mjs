import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isfilepathNamespace from '../../../../sources/file-system/files/isFilePath.js'

describe( 'isfilepathUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isFilePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isfilepathNamespace.isFilePath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isfilepathNamespace.isFilePath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotFilePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isfilepathNamespace.isNotFilePath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isfilepathNamespace.isNotFilePath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
