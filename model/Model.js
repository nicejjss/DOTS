export class Model {
    //local or network
    connection = 'local';

    fields;

    /**
     *  array = {'field': value,}
     */
    static save(array) {
        let instance = this.getInstance();

        switch (instance.connection) {
            case 'local':
                let data = this.formatData(array);
                let jsonData = JSON.stringify(data);
                localStorage.setItem(this.constructor.name, jsonData);
                ; break;
        }
    }

    /**
     * 
     * keys []
     */
    static get(keys = null) {
        let data = {};
        let instance = this.getInstance();

        switch (instance.connection) {
            case 'local':
                let rawData = localStorage.getItem(this.constructor.name);
                let jsonData = JSON.parse(rawData)
                if (keys) {
                    keys.forEach(key => {
                        data[key] = jsonData[key];
                    });
                } else {
                    data = jsonData;
                }
                
                ; break;
        }

        return data;
    }

    static delete() {
        let instance = this.getInstance();
        switch (instance.connection) {
            case 'local':
                localStorage.removeItem(this.constructor.name);
                ; break;
        }
    }

    static getInstance() {
        this.instance = new this;
        return this.instance;
    }

    static getModel() {
        return this;
    }

    static formatData(array) {
        let instance = this.getInstance();
        let data = {};
        instance.fields.forEach(field => {
            data[field] = array[field] ?? '';
        });

        return data;
    }
}