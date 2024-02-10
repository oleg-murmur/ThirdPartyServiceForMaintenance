export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string
}
export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'desktop' | 'mobile'

export type BuildAdmin = 'admin' | 'noadmin'



export interface BuildOptions {
    port:  number;
    paths: BuildPaths;
    mode: BuildMode;
    analyzerMode?: boolean;
    platform?:BuildPlatform;
    
    adminPanel?:BuildAdmin;
}