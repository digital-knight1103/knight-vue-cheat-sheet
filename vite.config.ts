import path from 'path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-vue-markdown'
import Shiki from 'markdown-it-shiki'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@atom': path.resolve(__dirname, './src/components/atoms'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@mark': path.resolve(__dirname, './src/views/PageMD'),
      // sprawdzić
      // '~/': `${path.resolve(__dirname, 'src')}/`,
    },
    extensions: ['.ts', '.json', '.vue', '.png', '.md']
  },
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
    
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
  ],
})
