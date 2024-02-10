import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration, DefinePlugin} from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({mode,paths,analyzerMode,platform, adminPanel}: BuildOptions):Configuration['plugins'] {
    
  const isDev = mode === 'development';
  const isProd = mode === 'production';
  
  const plugins:Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html}),
    new DefinePlugin({ //плагин будто не работает, после компиляции переменные пустые и нельзя сделать по ним условия.
      __PLATFORM__: JSON.stringify(platform),
      __ADMINPANEL__: JSON.stringify(adminPanel),
    })
  ]

  if(isDev) {
    plugins.push(new webpack.ProgressPlugin())
  }

  if(isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: "css/[contenthash:8].css",
      chunkFilename: "css/[contenthash:8].css",
    }))
  }
  if(analyzerMode) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins;
}