import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { CompilerOptions, ProjectConfig } from './types'

// 编译选项
const compilerOptions: CompilerOptions = {
  publishName: 'uit',
  assetsName: 'assets',
  outFile: './uitype/uitype.d.ts'
};

// tag 映射
const tagMapping: Record<string, string | undefined> = {
  group: "import('fairygui-cc').GGroup",
  Group: "import('fairygui-cc').GGroup",
  object: "import('fairygui-cc').GObject",
  Object: "import('fairygui-cc').GObject",
  graph: "import('fairygui-cc').GGraph",
  Graph: "import('fairygui-cc').GGraph",
  image: "import('fairygui-cc').GImage",
  Image: "import('fairygui-cc').GImage",
  movieclip: "import('fairygui-cc').GMovieClip",
  MovieClip: "import('fairygui-cc').GMovieClip",
  root: "import('fairygui-cc').GRoot",
  Root: "import('fairygui-cc').GRoot",
  text: "import('fairygui-cc').GTextField",
  TextField: "import('fairygui-cc').GTextField",
  richtext: "import('fairygui-cc').GRichTextField",
  RichTextField: "import('fairygui-cc').GRichTextField",
  textinput: "import('fairygui-cc').GTextInput",
  TextInput: "import('fairygui-cc').GTextInput",
  loader: "import('fairygui-cc').GLoader",
  Loader: "import('fairygui-cc').GLoader",
  loader3D: "import('fairygui-cc').GLoader3D",
  Loader3D: "import('fairygui-cc').GLoader3D",
  component: "import('fairygui-cc').GComponent",
  Component: "import('fairygui-cc').GComponent",
  label: "import('fairygui-cc').GLabel",
  Label: "import('fairygui-cc').GLabel",
  button: "import('fairygui-cc').GButton",
  Button: "import('fairygui-cc').GButton",
  combobox: "import('fairygui-cc').GComboBox",
  ComboBox: "import('fairygui-cc').GComboBox",
  slider: "import('fairygui-cc').GSlider",
  Slider: "import('fairygui-cc').GSlider",
  progressbar: "import('fairygui-cc').GProgressBar",
  ProgressBar: "import('fairygui-cc').GProgressBar",
  scrollbar: "import('fairygui-cc').GScrollBar",
  ScrollBar: "import('fairygui-cc').GScrollBar",
  list: "import('fairygui-cc').GList",
  List: "import('fairygui-cc').GList",
  tree: "import('fairygui-cc').GTree",
  Tree: "import('fairygui-cc').GTree",
  controller: "import('fairygui-cc').Controller",
  transition: "import('fairygui-cc').Transition"
}

/**
 * @description 加载项目配置
 * - 如果配置不存在则自动创建一个默认配置
 * @param {string} projectRoot 项目根目录
 * @return {*}  {(ProjectConfig | undefined)}
 */
export function loadProjectConfig(projectRoot: string): ProjectConfig | undefined {
  // 检查项目目录
  if(existsSync(projectRoot) === false) {
    console.log('项目根目录不存在！root: ' + projectRoot);
    return undefined;
  }

  const configFile = join(projectRoot, 'uitype.config.json');
  if(existsSync(configFile) === false) {
    const cfg: ProjectConfig = { compilerOptions, tagMapping };
    writeFileSync(configFile, JSON.stringify(cfg, undefined, 2));
    return cfg;
  }

  const configContent = readFileSync(configFile);
  const config = JSON.parse(configContent.toString('utf-8')) as ProjectConfig;
  return config;
}