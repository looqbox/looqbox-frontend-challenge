import StringUtilTypes from '@/utils/stringUtil/StringUtilTypes'

const stringUtil: StringUtilTypes.Functions = {
    firstLetterUpper(param) {
        return `${param.charAt(0).toUpperCase()}${param.substring(1)}`
    },
}

export default stringUtil
