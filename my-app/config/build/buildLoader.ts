import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions):ModuleOptions['rules'] {

      const isDev = options.mode === 'development';

// const cssLoaderWithModules = {
          
//   loader: "css-loader",
//   options: {
//     modules: {
//       localIdentName: "[path][name]__[local]--[hash:base64:5]",
//     },
//   }
// } если в use вместо css-loader отваливаются стили

      const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
      const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{loader: '@svgr/webpack', options: 
        {icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                }
              }
            ]
          }
        }
      }],
      }
      const cssLoader = {
        test: /\.css$/i,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
      }

      // const tsxLoader = {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // }

      const tsxLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: isDev // true
            }
          }
        ]
      }
      const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        // use: ['file-loader']
      }

    return [
      assetsLoader,
      cssLoader,
      tsxLoader,
      svgrLoader,
      fontLoader
      ]
}