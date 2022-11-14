export function Lang (lang: string): (entry: Entry) => string {
    const altLang = lang.indexOf('-') > -1
        ? lang.split('-')[0]
        : lang;

    return (entry: Entry) => {
        // Attempt specific lang (en-GB) and fallback to alt lang (en)
        return entry[lang] ?? entry[altLang];
    }
}

export type Entry = { [key: string]: string };