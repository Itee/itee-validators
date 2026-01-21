import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isvaliddirectorypathNamespace from '../../../../sources/file-system/directories/isValidDirectoryPath.js'

const Testing   = await getTestingPackage()

describe( 'isvaliddirectorypathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isValidDirectoryPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isvaliddirectorypathNamespace.isValidDirectoryPath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isvaliddirectorypathNamespace.isValidDirectoryPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isInvalidDirectoryPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isvaliddirectorypathNamespace.isInvalidDirectoryPath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isvaliddirectorypathNamespace.isInvalidDirectoryPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
