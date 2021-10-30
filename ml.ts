class ML{
    brain; 
    data;
    network;
    fs;
    mapName;

    constructor(){
        this.brain = require("brain.js");
        this.network = new this.brain.NeuralNetwork({hiddenLayers:[3,3,3]});
        this.fs = require("fs");
    }


    SetMap(mapName) {
        this.mapName = mapName;
        this.data = require("./data/"+mapName+".json");
        try{
            this.network.fromJSON(require("./saved/"+this.mapName+".json"));
        }catch(error){}
    }

    StartTraining(){
        this.network.train(this.data, {
            iterations: 200000,
            log: stats => {
                console.log(stats)
            }
        });
    }

    GetYaw(curData) {
        return this.network.run(curData);
    }
    
    SaveNetwork(){
        var json = this.network.toJSON();
        json = JSON.stringify(json);
        this.fs.writeFileSync("./saved/"+this.mapName+".json", json);
    }
}
export = ML;