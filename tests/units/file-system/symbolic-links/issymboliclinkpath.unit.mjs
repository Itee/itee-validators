import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as issymboliclinkpathNamespace from '../../../../sources/file-system/symbolic-links/isSymbolicLinkPath.js'

const Testing   = await getTestingPackage()

describe( 'issymboliclinkpathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isSymbolicLinkPath()', function () {

		it( 'should be bundlable', async function () {

			expect(issymboliclinkpathNamespace.isSymbolicLinkPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = issymboliclinkpathNamespace.isSymbolicLinkPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotSymbolicLinkPath()', function () {

		it( 'should be bundlable', async function () {

			expect(issymboliclinkpathNamespace.isNotSymbolicLinkPath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = issymboliclinkpathNamespace.isNotSymbolicLinkPath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
