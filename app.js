const light1 = document.querySelector("#l1");
const light2 = document.querySelector("#l2");
const light3 = document.querySelector("#l3");

const machine = {
    state: 'OFF',
    transitions: {
        OFF: {
            onP1() {
                this.setState('ONl1');
            },
            onP2() {
                this.setState('ONl1');
            }
        },
        ONl1: {
            onP1() {
                this.setState('ONl2');
            },
            onP2() {
                this.setState('ONl3');
            }
        },
        ONl2: {
            onP1() {
                this.setState('OFF');
            },
            onP2() {
                this.setState('OFF');
            }
        },
        ONl3: {
            onP1() {
                this.setState('OFF');
            },
            onP2() {
                this.setState('OFF');
            }
        },
    },
    dispatch(actionName) {
        const action = this.transitions[this.state][actionName];

        if (action) {
            action.call(this);
        } else {
            console.log('invalid action');
        }
    },
    setState(stateName){
        this.state = stateName;
        
        switch(stateName){
            case "OFF": light1.src = "./images/off.gif";
                        light2.src = "./images/off.gif";
                        light3.src = "./images/off.gif";
                        break;
            
            case "ONl1": light1.src = "./images/on.gif";
                         break;
            
            case "ONl2": light1.src = "./images/off.gif";
                         light2.src = "./images/on.gif";   
                         break;
            
            case "ONl3": light1.src = "./images/off.gif";
                         light3.src = "./images/on.gif";   
                         break;
        }
    }
};

const home = Object.create(machine);

function onP1(){
    home.dispatch('onP1'); 
    console.log("P1");
    console.log(home.state);
}

function onP2(){
    home.dispatch('onP2'); 
    console.log("P2");
    console.log(home.state);
}
