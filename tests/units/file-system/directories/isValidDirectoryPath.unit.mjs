import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isValidDirectoryPathNamespace from '../../../../sources/file-system/directories/isValidDirectoryPath.js'

describe( 'isValidDirectoryPathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isValidDirectoryPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isValidDirectoryPathNamespace.isValidDirectoryPath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
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

	describe( 'isInvalidDirectoryPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isValidDirectoryPathNamespace.isInvalidDirectoryPath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
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
