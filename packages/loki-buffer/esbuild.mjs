import builder from 'esbuild';
import rimraf from 'rimraf';

async function run() {
  const timeRecord = Date.now();
  await rimraf.sync('dist/');
  await Promise.all([
    builder.buildSync({
      entryPoints: ['src/index.ts'],
      format: 'cjs',
      outfile: 'dist/loki-buffer.js',
      bundle: true,
      minify: true,
    }),
    builder.buildSync({
      entryPoints: ['src/index.ts'],
      format: 'esm',
      outfile: 'dist/loki-buffer.esm.js',
      bundle: true,
      minify: true,
    }),
  ]);
  console.log(`Build finish! The time used is  ${Date.now() - timeRecord}ms`);
}

run();
