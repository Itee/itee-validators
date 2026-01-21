import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isemptydirectoryNamespace from '../../../../sources/file-system/directories/isEmptyDirectory.js'

describe( 'isemptydirectoryUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isEmptyDirectory()', function () {

		it( 'should be bundlable', async function () {

			expect(isemptydirectoryNamespace.isEmptyDirectory).to.exist

		} )

		it( 'should return value of type boolean when directoryPath is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isemptydirectoryNamespace.isEmptyDirectory( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotEmptyDirectory()', function () {

		it( 'should be bundlable', async function () {

			expect(isemptydirectoryNamespace.isNotEmptyDirectory).to.exist

		} )

		it( 'should return value of type boolean when directoryPath is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isemptydirectoryNamespace.isNotEmptyDirectory( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
