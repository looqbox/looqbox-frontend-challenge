/**
 * Font Awesome 5
 */
import { library, dom } from '@fortawesome/fontawesome-svg-core'

// Brands
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'

library.add(faSearch)

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()
