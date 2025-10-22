import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isTestUnitGeneratorNamespace from '../../../../sources/cores/tests/isTestUnitGenerator.js'

function isTestUnitGeneratorUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isTestUnitGeneratorUnits', () => {

		describe( 'noParamNoReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.noParamNoReturn).to.exist

			} )

			it( 'return type is undefined', () => {

				const result = isTestUnitGeneratorNamespace.noParamNoReturn()
				expect(result).to.be.a('undefined')

			} )

		} )

		describe( 'noParamOneReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.noParamOneReturn).to.exist

			} )

			it( 'return type is number', () => {

				const result = isTestUnitGeneratorNamespace.noParamOneReturn()
				expect(result).to.be.a('number')

			} )

		} )

		describe( 'noParamTwoReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.noParamTwoReturn).to.exist

			} )

			it( 'return type is string or number', () => {

				const result = isTestUnitGeneratorNamespace.noParamTwoReturn()
				try {
					expect(result).to.be.a('string')
				} catch(e) {
					try {
						expect(result).to.be.a('number')
					} catch(e) {
						expect.fail("expect result to be of type string or number")
					}
				}

			} )

		} )

		describe( 'oneParamNoReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.oneParamNoReturn).to.exist

			} )

			it( 'return type is undefined when paramA is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isTestUnitGeneratorNamespace.oneParamNoReturn( dataSetValue0 )
					expect(result).to.be.a('undefined')
				}

			} )

		} )

		describe( 'oneParamOneReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.oneParamOneReturn).to.exist

			} )

			it( 'return type is boolean when theParam is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isTestUnitGeneratorNamespace.oneParamOneReturn( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'oneParamTwoReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.oneParamTwoReturn).to.exist

			} )

			it( 'return type is null or number when paramA is of type number', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isTestUnitGeneratorNamespace.oneParamTwoReturn( dataSetValue0 )
					try {
						expect(result).to.be.a('null')
					} catch(e) {
						try {
							expect(result).to.be.a('number')
						} catch(e) {
							expect.fail("expect result to be of type null or number")
						}
					}
				}

			} )

		} )

		describe( 'twoParamNoReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.twoParamNoReturn).to.exist

			} )

			it( 'return type is undefined when paramA is of type string and paramB is of type number', () => {

				const dataSet0 = this._dataMap[ 'strings' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = isTestUnitGeneratorNamespace.twoParamNoReturn( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('undefined')
					}
				}

			} )

		} )

		describe( 'twoParamOneReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.twoParamOneReturn).to.exist

			} )

			it( 'return type is string when paramA is of type string and paramB is of type number', () => {

				const dataSet0 = this._dataMap[ 'strings' ]
				const dataSet1 = this._dataMap[ 'numbers' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = isTestUnitGeneratorNamespace.twoParamOneReturn( dataSetValue0, dataSetValue1 )
						expect(result).to.be.a('string')
					}
				}

			} )

		} )

		describe( 'twoParamTwoReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.twoParamTwoReturn).to.exist

			} )

			it( 'return type is string or number when paramA is of type number and paramB is of type string', () => {

				const dataSet0 = this._dataMap[ 'numbers' ]
				const dataSet1 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]

					for ( let key1 in dataSet1 ) {
						const dataSetValue1 = dataSet1[ key1 ]
						const result = isTestUnitGeneratorNamespace.twoParamTwoReturn( dataSetValue0, dataSetValue1 )
						try {
							expect(result).to.be.a('string')
						} catch(e) {
							try {
								expect(result).to.be.a('number')
							} catch(e) {
								expect.fail("expect result to be of type string or number")
							}
						}
					}
				}

			} )

		} )

		describe( 'anyParamOneReturn()', () => {

			it( 'is bundlable', () => {

				expect(isTestUnitGeneratorNamespace.anyParamOneReturn).to.exist

			} )

			it( 'return type is boolean when any is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isTestUnitGeneratorNamespace.anyParamOneReturn( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isTestUnitGeneratorUnits }

