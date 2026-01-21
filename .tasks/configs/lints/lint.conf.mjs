import {
    Configurator,
    RulesSet,
    MochaRecommendedRulesSet,
    SourceBackendRulesSet,
    SourceFrontendRulesSet,
    SourceRulesSet,
    TestBenchmarksRulesSet,
    TestUnitsRulesSet
} from '@itee/tasks/sources/lints/lint.conf.mjs'

SourceRulesSet.ignores.push(
    'sources/cores/tests/isTestUnitGenerator.js',
    'sources/dom/**',
    'sources/file-system/**'
)

SourceFrontendRulesSet.files   = [ 'sources/dom/**' ]
SourceFrontendRulesSet.ignores = [ 'sources/file-system/**' ]

SourceBackendRulesSet.files   = [ 'sources/file-system/**' ]
SourceBackendRulesSet.ignores = [ 'sources/dom/**' ]

const toFixRuleSet = new RulesSet({
    name:  'to/fix',
    files: [ 'sources/cores/tests/isTestUnitGenerator.js' ],
    rules: {
        'no-unused-vars': 'warn',
    }
})

Configurator.rulesSets = [
    SourceRulesSet,
    SourceFrontendRulesSet,
    SourceBackendRulesSet,
    TestBenchmarksRulesSet,
    TestUnitsRulesSet,
    MochaRecommendedRulesSet,
    toFixRuleSet
]

export default Configurator.getConfig()
