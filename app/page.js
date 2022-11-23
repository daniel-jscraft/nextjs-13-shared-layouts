import Feed from './feed'
import { Suspense } from 'react'

export default async () => {
    return (<>
        <Suspense fallback={<p>Loading posts with a delay of 5s ... </p>}>
          <Feed delay={5000} />
        </Suspense>

        <Suspense fallback={<p>Loading posts with a delay of 2s ... </p>}>
          <Feed delay={2000} />
        </Suspense>
    </>)
}