import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildAdmin, BuildMode, BuildPaths, BuildPlatform } from './config/build/types/types';
import path from 'path';

type Mode = 'production' | 'development'

interface EnvVariables {
  mode?: BuildMode
  port?: number
  analizeMode?: boolean
  platform?: BuildPlatform
  adminPanel?: BuildAdmin
}

export default (env: EnvVariables) =>{

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname,'src', 'index.tsx'),
    html: path.resolve(__dirname,'public', 'index.html'),
    src: path.resolve(__dirname,'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzerMode: env.analizeMode ?? false,
    platform: env.platform ?? 'desktop',
    adminPanel: env.adminPanel ?? 'noadmin',
  });
   return config;
}