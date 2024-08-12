import { useEffect, useRef } from 'react'

type Props = {
  title: string
  preveailOnMount?: boolean
}
export default function useSetDocumentTitle(
  { title, preveailOnMount }: Props
) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = 'DevStagram - ' + title
  }, [title])

  useEffect(() => {
    if (!preveailOnMount) {
      document.title = defaultTitle.current
    }
  }, [])
}