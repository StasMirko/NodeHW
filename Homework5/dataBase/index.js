const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('homework2', 'root', 'smq80986357720', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(), 'dataBase', 'models'), (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');     // [0]
                    models[modelName] = client.import(path.join(process.cwd(), 'dataBase', 'models', modelName));
                })
            })
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance){
                instance = initConnection();
            }
            return instance;
        }
    }
})();
