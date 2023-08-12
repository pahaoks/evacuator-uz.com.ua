import * as data from './data.js'
import * as fs from 'fs'

const baseUrl = 'https://evacuator-uz.com.ua'
const lastMod = new Date().toISOString().split('T')[0]
const langs = ['','ru','en']

function generate() {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for (let lang of langs) {
        let prefix = lang ? '/' + lang : ''
        let localUrl = `${baseUrl}${prefix}`

        sitemap += '\t<url>\n'
        sitemap += `\t\t<loc>${localUrl}/</loc>\n`
        sitemap += `\t\t<lastmod>${lastMod}</lastmod>\n`
        sitemap += '\t</url>\n'

        for (let country of data.allCountries) {
            sitemap += '\t<url>\n'
            sitemap += `\t\t<loc>${localUrl}/place/${country}/</loc>\n`
            sitemap += `\t\t<lastmod>${lastMod}</lastmod>\n`
            sitemap += '\t</url>\n'

            for (let city of data.countriesCities[country]) {
                sitemap += '\t<url>\n'
                sitemap += `\t\t<loc>${localUrl}/place/${country}/${city}/</loc>\n`
                sitemap += `\t\t<lastmod>${lastMod}</lastmod>\n`
                sitemap += '\t</url>\n'
            }
        }
    }

    sitemap += '</urlset>\n'

    return sitemap
}

function save(sitemap) {
    fs.writeFileSync('public/sitemap.xml',sitemap,{encoding:'utf8',flag:'w'})
}

save(generate())
