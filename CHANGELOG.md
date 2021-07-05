# [5.3.0](https://github.com/Itee/itee-validators/compare/v5.2.0...v5.3.0) (2021-07-05)


### Bug Fixes

* **config:** remove sourcemap generation for production env ([b94d958](https://github.com/Itee/itee-validators/commit/b94d958286b030e031d6ed2a1e7eb4d7a569b753))
* **doc:** fix missing global declaration for expect method ([efef6f6](https://github.com/Itee/itee-validators/commit/efef6f63b4699a2cc579f878bc2ae42ac0706192))
* **force:** fix some typo and indentation ([84ac6bf](https://github.com/Itee/itee-validators/commit/84ac6bfda3221bf6a89ca243c820e3a1d389bd48))
* **tests:** fix unused dependency ([348413f](https://github.com/Itee/itee-validators/commit/348413f515f1a17183f5bb0410fa37277f9cdec7))


### Features

* **dom:** add isEventTarget function to initiat dom validators implementation ([565a056](https://github.com/Itee/itee-validators/commit/565a056732b92146d33378dd783127b97c08c09a))
* **isarray:** add new isarray methods for boolean, functions and numbers ([543af55](https://github.com/Itee/itee-validators/commit/543af5578605303415d379676a72b8511ff7f109))

# [5.2.0](https://github.com/Itee/itee-validators/compare/v5.1.2...v5.2.0) (2020-07-21)


### Features

* **isnull:** add new isnull alternative ([f457379](https://github.com/Itee/itee-validators/commit/f457379c7839f764b859df33cca9d4cddf2fe653))

## [5.1.2](https://github.com/Itee/itee-validators/compare/v5.1.1...v5.1.2) (2019-08-12)


### Bug Fixes

* **npmdoc:** remove docs from npm package, and fix wrong path for unit test report ([02069b6](https://github.com/Itee/itee-validators/commit/02069b6))

## [5.1.1](https://github.com/Itee/itee-validators/compare/v5.1.0...v5.1.1) (2019-08-06)


### Bug Fixes

* **gulpfile:** rename documentation to docs in files to clean ([bf40160](https://github.com/Itee/itee-validators/commit/bf40160))

# [5.1.0](https://github.com/Itee/itee-validators/compare/v5.0.1...v5.1.0) (2019-08-05)


### Features

* **docs:** add online documentation ([1b1d16e](https://github.com/Itee/itee-validators/commit/1b1d16e))

## [5.0.1](https://github.com/Itee/itee-validators/compare/v5.0.0...v5.0.1) (2019-08-04)


### Bug Fixes

* **package:** add postversion script to build with latest package version ([e47c645](https://github.com/Itee/itee-validators/commit/e47c645))

# [5.0.0](https://github.com/Itee/itee-validators/compare/v4.0.1...v5.0.0) (2019-08-04)


### Code Refactoring

* **gulpfile:** remove UMD module support ([bfaceb0](https://github.com/Itee/itee-validators/commit/bfaceb0))
* **rollupconfig:** remove rollup-plugin-json and rollup-plugin-node-builtins ([5c507b3](https://github.com/Itee/itee-validators/commit/5c507b3))


### BREAKING CHANGES

* **rollupconfig:** browserified fs and related function are unvailable in esm and iife builds
* **gulpfile:** Remove of UMD module

## [4.0.1](https://github.com/Itee/itee-validators/compare/v4.0.0...v4.0.1) (2019-08-02)


### Bug Fixes

* **packagelock:** fixpackage lock terser version ([62cdb84](https://github.com/Itee/itee-validators/commit/62cdb84))
