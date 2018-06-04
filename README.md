# <center>[IteeClient]</center>

The itee client is the end user part of the itee solution predicted for running WebGL 3d content.
It allow to make fast, and light call to itee server counter part to create/read/update/delete data from webgl server.


## How to install

From npm:

    npm install itee-validators

If you want to build the repository from source follow these instructions:

    git clone https://github.com/Itee/itee-validators.git
    npm install
    npm run build
    
then copy/paste the builded module you need from builds folder.
    
## How to use

First of all, you should take a look to the documentation ! In case you have clone the repository you could auto-generate the library documentation using: 

    npm run doc

then you will be able to use like this:

    import { isString } from 'itee-validators'
        
    if( isString('hello world') ) {
        // Do something...
    } else {
        // Do something else...
    }

## Release notes

#### v1.0.0

* Add globals validation functions
