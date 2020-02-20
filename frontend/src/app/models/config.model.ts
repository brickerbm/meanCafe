export interface IConfig {
  browsers: string[];
  src: string[];
  reporter:
      {
          name: string;
          output: string;
      };
  color: boolean;
  skipJsErrors: boolean;
}

export interface Config {
  browsers: string[];
  src: string[];
  headless: boolean;
}
