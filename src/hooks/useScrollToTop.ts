import { useEffect } from "react"

/**
 @param dependency
*/

export const useScrollToTop = <T, >(dependency: T) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [dependency])
}