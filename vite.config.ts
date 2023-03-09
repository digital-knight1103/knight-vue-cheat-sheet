import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      // headEnabled: true,
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            // dark/light
            light: 'dracula', //dracula, vitesse-dark
            dark: 'one-dark-pro',
          },
          // theme: 'slack-dark',
        })
        // md.use(LinkAttributes, {
        //   matcher: (link: string) => /^https?:\/\//.test(link),
        //   attrs: {
        //     target: '_blank',
        //     rel: 'noopener',
        //   },
        // })
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.ts', '.json', '.vue', '.png']
  }
})
