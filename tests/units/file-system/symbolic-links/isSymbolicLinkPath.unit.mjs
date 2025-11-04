import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isSymbolicLinkPath.js'

describe( 'isSymbolicLinkPathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isSymbolicLinkPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isSymbolicLinkPathNamespace.isSymbolicLinkPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isSymbolicLinkPathNamespace.isSymbolicLinkPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotSymbolicLinkPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isSymbolicLinkPathNamespace.isNotSymbolicLinkPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isSymbolicLinkPathNamespace.isNotSymbolicLinkPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
