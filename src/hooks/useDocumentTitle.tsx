import { useEffect, useRef } from 'react';

type Props = {
  title: string
  preveailOnMount?: boolean
}
export default function useDocumentTitle(
  { title, preveailOnMount }: Props
) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    if (!preveailOnMount) {
      document.title = defaultTitle.current
    }
  }, [])
}