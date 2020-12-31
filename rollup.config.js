export default {
    input: 'src/index.js',
    output: [
        {
            file: 'bundles/bundle.js',
            format: 'esm',
            sourcemap:true
        },{
            file: 'bundles/bundle.iife.js',
            format: 'iife',
            name: 'dshUtils',
            sourcemap:true,
            exports:'named',
        }
    ],
};