import arabic from "../../resources/locales/ar/common.json"
// import bosnian from "../../resources/locales/bs/common.json";/
import english from "../../resources/locales/en/common.json"

const languages = ["ar", "en"] as const
export const supportedLanguages = [...languages]
export type Language = (typeof languages)[number]

type Resource = {
	common: typeof english
}

export type Namespace = keyof Resource

export const resources: Record<Language, Resource> = {
	ar: {
		common: arabic,
	},
	en: {
		common: english,
	},
}
