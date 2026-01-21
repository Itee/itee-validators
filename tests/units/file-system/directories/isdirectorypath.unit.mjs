import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isdirectorypathNamespace from '../../../../sources/file-system/directories/isDirectoryPath.js'

const Testing   = await getTestingPackage()

describe( 'isdirectorypathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isDirectoryPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isdirectorypathNamespace.isDirectoryPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isdirectorypathNamespace.isDirectoryPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotDirectoryPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isdirectorypathNamespace.isNotDirectoryPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isdirectorypathNamespace.isNotDirectoryPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
