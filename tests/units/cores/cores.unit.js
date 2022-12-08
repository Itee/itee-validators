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

	} )

}

export { coresUnits }

