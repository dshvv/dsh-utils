export default {
    input: 'src/index.js',
    output: [
        {
            file: 'lib/bundle.js',
            format: 'esm',
            sourcemap:true
        },{
            file: 'lib/bundle.iife.js',
            format: 'iife',
            name: 'dshUtils',
            sourcemap:true,
            exports:'named',
        }
    ],
};