/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EARLY_ACCESS_URL?: string
  readonly VITE_CF_BEACON_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
