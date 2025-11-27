import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isFIFOPathNamespace from '../../../../sources/file-system/fifo-pipes/isFIFOPath.js'

describe( 'isFIFOPathUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isFIFOPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isFIFOPathNamespace.isFIFOPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isFIFOPathNamespace.isFIFOPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotFIFOPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isFIFOPathNamespace.isNotFIFOPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isFIFOPathNamespace.isNotFIFOPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
