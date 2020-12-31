export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'esm',
            sourcemap:true
        },{
            file: 'dist/bundle.iife.js',
            format: 'iife',
            name: 'dshUtils',
            sourcemap:true,
            exports:'named',
        }
    ],
};