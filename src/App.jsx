import React from 'react';
import Grid from './Grid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            garden:[],
            emoji: ['🌱','🌿','🌳']  
        };
        this.sizeGarden = 25
    };

    /*create the array garden*/
    generateGrid=(GridSize)=>{
        let spot=[]
        for(let i=0; i<GridSize; i++ ){
            spot.push({id: i, emoji: ''})
        };
        return(spot)
    };

    addGrid=(size)=>{
        let newGrid = [...this.state.garden];
        newGrid.push(this.generateGrid(size));
        this.setState({garden: newGrid})
    }

    componentDidMount(){
        this.addGrid(this.sizeGarden);
    }
    
    render(){
        return(
            <div>
                <h1>My Emoji Garden</h1>
                <div className='flex'>
                    {
                        this.state.garden.map((elem, index) => {
                            return (
                                <Grid garden={elem} key={index} emoji={this.state.emoji} />
                            )
                        })
                    }
                </div>
                <button onClick={() => this.addGrid(this.sizeGarden)}>Add Garden</button>
            </div>
        )
    };
};

export default App;
