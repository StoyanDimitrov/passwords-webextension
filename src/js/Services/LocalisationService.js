import SystemService from "@js/Services/SystemService";

class LocalisationService {

    constructor() {
        this._browser = SystemService.getBrowserApi();
    }

    /**
     *
     * @param {string} key
     * @param {string[]} [variables=[]]
     * @returns {string}
     */
    translate(key, variables = []) {
        let translation = this._browser.i18n.getMessage(key, variables);

        return translation ? translation:key;
    }
}

export default new LocalisationService();