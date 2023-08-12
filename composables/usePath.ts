export default () => {
    return (locale: string, ...paths: string[]) => {
        const result = paths.filter(x => !!x)
    
        if (locale != "" && locale != 'ua') {
            result.unshift(locale)
        }
    
        return '/' + result.join('/') + (result.length ? '/' : '')
    }
}