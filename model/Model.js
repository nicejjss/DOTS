export class Model {
    fields;

    /**
     *  array = ['field1' => value1,]
     */
    static localCreate(array) {
        let 


        if (!localStorage.getItem(this.constructor.name)){
            localStorage.setItem(this.constructor.name, this.fields);
        }
    }

    static get(array) {

        let data = localStorage.getItem(this.constructor.name);

    }

    static getModel(array) {
        // let instance = new this;
        // return instance.fields;
    }


}