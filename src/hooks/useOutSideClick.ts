import { useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutSideClick(ref: any, callback?: Function) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref && ref.current) {
        if (!ref.current.contains(event.target)) {
          callback && callback()
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useOutSideClick
