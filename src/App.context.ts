import { createContext } from "react";

interface IAppContext {
  lang: 'bn' | 'de' | 'en' | 'es' | 'hi' | 'ja' | 'ko' | 'pt' | 'ru' | 'tr' |
    'vi' | 'zh'
  mode: 'dark' | 'light' | 'terminal'
  page: 'messenger' | 'setup' | 'welcome'
}

const AppContext = createContext<IAppContext>({
  lang: 'en',
  mode: 'light',
  page: 'welcome'
});

export default AppContext
