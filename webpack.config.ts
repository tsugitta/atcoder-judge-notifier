import { ConfigurationFactory } from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config: ConfigurationFactory = () => {
  return {
    entry: {
      'content-scripts': path.join(__dirname, 'src/content-scripts.ts'),
      background: path.join(__dirname, 'src/background.ts'),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: 'ts-loader',
          exclude: '/node_modules/',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [new CopyWebpackPlugin([{ from: 'public', to: '.' }])],
  }
}

export default config
