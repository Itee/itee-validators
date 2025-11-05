# [v6.0.0](https://github.com/Itee/itee-validators/compare/v5.6.0...v6.0.0) (2025-11-05)

## ✨ New Features
- [`6e706ed`](https://github.com/Itee/itee-validators/commit/6e706ed)  (benchmarks) re-introduce benchmarks frontend with web test runner, configs and new code 

## 🐛 Bug Fixes
- [`31c3572`](https://github.com/Itee/itee-validators/commit/31c3572)  (gulpfile) fix broken import links 
- [`876ba94`](https://github.com/Itee/itee-validators/commit/876ba94)  (run-tests) fix task displayName 

## 💥 Breaking Changes
- [`a6f1255`](https://github.com/Itee/itee-validators/commit/a6f1255)  (node) drop nodejs v18 support and add nodejs v24

# [v5.6.0](https://github.com/Itee/itee-validators/compare/v5.5.1...v5.6.0) (2025-10-18)

## ✨ New Features
- [`187970c`](https://github.com/Itee/itee-validators/commit/187970c)  (gulpfile) split gulpfile tasks into sub-tasks files 

## 🐛 Bug Fixes
- [`1ae6d25`](https://github.com/Itee/itee-validators/commit/1ae6d25)  (sources) avoid validator with thrown during migration

# [v5.5.1](https://github.com/Itee/itee-validators/compare/v5.5.0...v5.5.1) (2025-10-16)

# [v5.5.0](https://github.com/Itee/itee-validators/compare/v5.4.0...v5.5.0) (2025-10-16)

## ✨ New Features
- [`e3f7745`](https://github.com/Itee/itee-validators/commit/e3f7745)  (package) use cz-emoji in favor of cz-conventional-changlog

# [5.4.0](https://github.com/Itee/itee-validators/compare/v5.3.9...v5.4.0) (2025-10-16)


### Bug Fixes

* **builds:** remove console log side effect in favor of pretty banner from figlet package ([e6304f0](https://github.com/Itee/itee-validators/commit/e6304f0032eac639151a322690da7c8e4a05c7ba))
* **gulpfile:** apply some fixes to standardize gulpfile ([ea8840a](https://github.com/Itee/itee-validators/commit/ea8840ad9b86cf135afd6e03efd828432a963341))
* **isinfinite:** fix circular dependency ([8e048e3](https://github.com/Itee/itee-validators/commit/8e048e3e2036a026d84e8e3456f783b944acfb2d))
* **rollup.conf:** fix variable collision ([ffc877d](https://github.com/Itee/itee-validators/commit/ffc877d2c277f7d6a24c82416ca60a89f15aac68))


### Features

* **check-bundling:** improve existing bundling check to detect side-effects ([a285bf6](https://github.com/Itee/itee-validators/commit/a285bf65c9737d44e23073b6084a7404ee26189d))

## [5.3.9](https://github.com/Itee/itee-validators/compare/v5.3.8...v5.3.9) (2025-09-07)


### Bug Fixes

* **npm:** apply npm audit fix ([2356b3e](https://github.com/Itee/itee-validators/commit/2356b3e20708033fdee1b43a1cb56db543f32165))

## [5.3.8](https://github.com/Itee/itee-validators/compare/v5.3.7...v5.3.8) (2025-09-05)


### Bug Fixes

* **gulpfile:** fix some tests generation and regenerate them ([f55d066](https://github.com/Itee/itee-validators/commit/f55d066b6616449929d5f75ea1b493334dd05047))

## [5.3.7](https://github.com/Itee/itee-validators/compare/v5.3.6...v5.3.7) (2025-09-04)


### Bug Fixes

* **audit:** apply npm audit fix ([51957e0](https://github.com/Itee/itee-validators/commit/51957e0f7cfd0a82beb67bd31e7c08b6e54923f8))

## [5.3.6](https://github.com/Itee/itee-validators/compare/v5.3.5...v5.3.6) (2025-09-04)


### Bug Fixes

* **configs:** add missing rollup tests configs updates ([30aff13](https://github.com/Itee/itee-validators/commit/30aff13c7713a24dc342ac08d2ea8bac25b6b0fb))
* **file-system:** add parameter check ([54211a7](https://github.com/Itee/itee-validators/commit/54211a7bf3ccfe4ea5a283502d46c69e547049d4))
* **gulpfile:** fix compute-test-bench task ([bffeaba](https://github.com/Itee/itee-validators/commit/bffeabaa9fbd2322d0df1c8c0be8d319b0697bcf))
* **gulpfile:** fix compute-test-unit task ([a2f36ae](https://github.com/Itee/itee-validators/commit/a2f36ae73f96e2da056b02fed63eebd5d275dc87))
* **gulpfile:** fix test building system ([f9aeb4f](https://github.com/Itee/itee-validators/commit/f9aeb4fd667c8058cda1629e5ad1c2a31bd91a95))
* **gulpfile:** fix wrong rollup call in compute-test-bundle-by-source-file-export task ([27afd98](https://github.com/Itee/itee-validators/commit/27afd98dc244bd1eeb3c3cc565fd2a9d178d4cf6))
* **gulpfile:** remove help task from release pipeline ([b4bfb71](https://github.com/Itee/itee-validators/commit/b4bfb717d9a42eaed877b733d05c94770b5b24c1))
* **gulpfile:** remove karma broken tasks due to deprecation ([c2146e9](https://github.com/Itee/itee-validators/commit/c2146e94d03754a2f4394851616c3418cd037fa1))
* **isblockdevicepath:** avoid throw on stat sync fail ([9d4a94d](https://github.com/Itee/itee-validators/commit/9d4a94d7338fab9620f351d26269a15600fc2aa5))
* **ischaracterdevicepath:** avoid throw on stat sync fail ([61c831f](https://github.com/Itee/itee-validators/commit/61c831f4b398fca78afaffdb4b35e76fbcc0a175))
* **isdirectorypath:** avoid throw on stat sync fail ([0d6576c](https://github.com/Itee/itee-validators/commit/0d6576c7e0f22603ceaf227589e5760a3587464b))
* **isemptydirectory:** avoid throw on stat sync fail ([c32ae20](https://github.com/Itee/itee-validators/commit/c32ae2068861647ab0b6192b817c92449f5477a5))
* **isemptyfile:** avoid throw null or wrong file path ([abe5b70](https://github.com/Itee/itee-validators/commit/abe5b70269eff627164abe1a6f2d4e548f979f6e))
* **isfifopath:** avoid throw on stat sync fail ([ddc8d2f](https://github.com/Itee/itee-validators/commit/ddc8d2fe1aca46c6373f2f5c4c3998f8fa25463c))
* **isfilepath:** avoid throw on stat sync fail ([24d2e4f](https://github.com/Itee/itee-validators/commit/24d2e4f231c2c863976b3961ebc331d4ea951c37))
* **issocketpath:** avoid throw on stat sync fail ([211aa80](https://github.com/Itee/itee-validators/commit/211aa80afb813d9ab93ab6fdf06271202a2d7ae2))
* **issymboliclinkpath:** add parameter check ([66c7ec0](https://github.com/Itee/itee-validators/commit/66c7ec0b1dbd443bd29ad54acad9a9bc5e543d0d))
* **issymboliclinkpath:** avoid throw on stat sync fail ([a0e1e17](https://github.com/Itee/itee-validators/commit/a0e1e17e4384648422c75fd193240665e3fd4df9))
* **istestunitgenerator:** fix eslint error for test purpose ([0e99747](https://github.com/Itee/itee-validators/commit/0e9974778b071a3b2af2d7e8a97d68a4b16eb094))
* **npmignore:** fix file name ([86579d1](https://github.com/Itee/itee-validators/commit/86579d183b182d4a840c3a71ddd5b4945058afcc))
* **units:** fix some source file methode parameters types to fix unit test generation ([0fa0951](https://github.com/Itee/itee-validators/commit/0fa09510c990e266d30af807a2fff5218147ce48))

## [5.3.5](https://github.com/Itee/itee-validators/compare/v5.3.4...v5.3.5) (2022-02-14)


### Bug Fixes

* **package:** update deps to latest version ([4248576](https://github.com/Itee/itee-validators/commit/424857653ba08ce5eb6483a9afbbf8eba8f46931))

## [5.3.4](https://github.com/Itee/itee-validators/compare/v5.3.3...v5.3.4) (2022-02-08)


### Bug Fixes

* **package:** update deps to latest version ([81c59d3](https://github.com/Itee/itee-validators/commit/81c59d3e5d88c65e924689c2b2bdbc67798c5286))

## [5.3.3](https://github.com/Itee/itee-validators/compare/v5.3.2...v5.3.3) (2021-07-21)


### Bug Fixes

* **readme:** fix readme tags ([0d8fc2e](https://github.com/Itee/itee-validators/commit/0d8fc2e3c40dd7a3220bb404e68458c9ce167e9b))

## [5.3.2](https://github.com/Itee/itee-validators/compare/v5.3.1...v5.3.2) (2021-07-07)


### Bug Fixes

* **packagelock:** apply npm audit fix ([cc4a78b](https://github.com/Itee/itee-validators/commit/cc4a78bc0ccabc380931d3508cbf783036c58208))

## [5.3.1](https://github.com/Itee/itee-validators/compare/v5.3.0...v5.3.1) (2021-07-07)


### Bug Fixes

* **releaserc:** fix missing dev maps ([5e41b9d](https://github.com/Itee/itee-validators/commit/5e41b9d7bb222e91cc72f85c7a699b4a21fef364))

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
