import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isSocketPathNamespace from '../../../../sources/file-system/sockets/isSocketPath.js'

describe( 'isSocketPathUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isSocketPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isSocketPathNamespace.isSocketPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isSocketPathNamespace.isSocketPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotSocketPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isSocketPathNamespace.isNotSocketPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isSocketPathNamespace.isNotSocketPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
