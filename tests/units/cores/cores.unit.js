import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as coresNamespace from '../../../sources/cores/cores.js'

function coresUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'coresUnits', () => {

		describe( 'add()', () => {

			it( 'is bundlable', () => {

				expect(coresNamespace.add).to.exist

			} )

			it( 'return type is undefined when type is of type string and validator is of type function', () => {

				const dataSet0 = this._dataMap[ 'strings' ]
				const dataSet1 = this._dataMap[ 'functions' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = coresNamespace.add( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('undefined')
					}
				}

			} )

		} )

		describe( 'remove()', () => {

			it( 'is bundlable', () => {

				expect(coresNamespace.remove).to.exist

			} )

			it( 'return type is undefined when type is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = coresNamespace.remove( dataSetValue0 )
					expect(result).to.be.a('undefined')
				}

			} )

		} )

		describe( 'getAvalaibleTypes()', () => {

			it( 'is bundlable', () => {

				expect(coresNamespace.getAvalaibleTypes).to.exist

			} )

			it( 'return type is array.<string>', () => {

				const result = coresNamespace.getAvalaibleTypes()
				expect(result).to.be.a('array')

			} )

		} )

		describe( 'check()', () => {

			it( 'is bundlable', () => {

				expect(coresNamespace.check).to.exist

			} )

			it( 'return type is boolean when data is of any type and type is of type string and breakOnError is of type boolean', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]
				const dataSet1 = this._dataMap[ 'strings' ]
				const dataSet2 = this._dataMap[ 'booleans' ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]

						for ( let key1 in dataSet1 ) {
							const dataSetValue1 = dataSet1[ key1 ]

							for ( let key2 in dataSet2 ) {
								const dataSetValue2 = dataSet2[ key2 ]
								const result = coresNamespace.check( dataSetValue0, dataSetValue1, dataSetValue2 )
								expect(result).to.be.a('boolean')
							}
						}
					}
				}

			} )

		} )

	} )

}

export { coresUnits }

