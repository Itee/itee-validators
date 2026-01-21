import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isfifopathNamespace from '../../../../sources/file-system/fifo-pipes/isFIFOPath.js'

const Testing   = await getTestingPackage()

describe( 'isfifopathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isFIFOPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isfifopathNamespace.isFIFOPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isfifopathNamespace.isFIFOPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotFIFOPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isfifopathNamespace.isNotFIFOPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isfifopathNamespace.isNotFIFOPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
