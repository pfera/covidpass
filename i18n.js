import yaml from 'js-yaml'
import fs from 'fs'

function load(filepath) {
  return yaml.load(fs.readFileSync(filepath, 'utf8'))
}

const en = load('./locales/en.yml')
const de = load('./locales/de.yml')
const fr = load('./locales/fr.yml')

export default {
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: { 
    fr,
    en, 
    de 
  }
}