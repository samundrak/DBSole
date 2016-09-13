import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/main.js',
    format: 'cjs',
    dest: 'dist/app.js',
    plugins: [babel()]
};