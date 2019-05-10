/**
 * Font Awesome 5
 */
import { library, dom } from '@fortawesome/fontawesome-svg-core'

// Brands
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'

library.add()

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch(faFacebookF)
