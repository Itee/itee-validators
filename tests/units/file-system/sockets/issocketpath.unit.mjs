import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as issocketpathNamespace from '../../../../sources/file-system/sockets/isSocketPath.js'

describe( 'issocketpathUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isSocketPath()', function () {

		it( 'should be bundlable', async function () {

			expect(issocketpathNamespace.isSocketPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = issocketpathNamespace.isSocketPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotSocketPath()', function () {

		it( 'should be bundlable', async function () {

			expect(issocketpathNamespace.isNotSocketPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = issocketpathNamespace.isNotSocketPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
