import { FC, ReactNode } from 'react'

import { AnimatePresence, LazyMotion } from 'framer-motion'
import { ApolloProvider } from '@apollo/client'
import client from '../../../services/client'

// const markdownComponents = {
//   p: dynamic(() => import('components/Markdown/paragraph')),
//   img: dynamic(() => import('components/Markdown/image')),
//   AboutMe: dynamic(() => import('components/Sections/AboutMe')),
// }

const animationFeatures = () =>
  import('framer-motion').then((features) => features.domAnimation)

interface Props {
  children?: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <LazyMotion features={animationFeatures} strict>
      <ApolloProvider client={client}>
        {/* <MDXProvider components={markdownComponents}> */}
          <div className="relative overflow-hidden bg-brandBg">
            <AnimatePresence
              initial={false}
              exitBeforeEnter
              onExitComplete={() => {
                window.scrollTo({ top: 0 })
              }}
            >
              {children}
            </AnimatePresence>
          </div>
        {/* </MDXProvider> */}
      </ApolloProvider>
    </LazyMotion>
  )
}

export default AppLayout
