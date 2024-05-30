import stringUtil from '@/utils/stringUtil/stringUtil'

describe('stringUtil', () => {
    test(stringUtil.firstLetterUpper.name, () => {
        expect(stringUtil.firstLetterUpper('')).toBe('')
        expect(stringUtil.firstLetterUpper('ale')).toBe('Ale')
        expect(stringUtil.firstLetterUpper('0')).toBe('0')
    })
})
