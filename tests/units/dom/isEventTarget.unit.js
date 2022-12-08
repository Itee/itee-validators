import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isEventTargetNamespace from '../../../sources/dom/isEventTarget.js'

function isEventTargetUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isEventTargetUnits', () => {

	} )

}

export { isEventTargetUnits }

