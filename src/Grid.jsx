import React from 'react'
import './Grid.css'

class Grid extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            garden: props.garden,
            emoji: props.emoji    
        }
    }

    /*handle the change in cell*/
    AddEmoji = () => {
        let newEmoji = [...this.state.garden]
        const Gardenfilterd = newEmoji.filter(garden => garden.emoji === '');
        const RandomNumber = Math.floor(Math.random() * Gardenfilterd.length) + 0 ;
        if(Gardenfilterd.length !== 0){
            Gardenfilterd[RandomNumber].emoji = this.state.emoji[0]
            this.ChangeEmoji(Gardenfilterd[RandomNumber].id)
            this.setState({newEmoji}) 
        }
    };

    /*handle the delete for cell content*/
    DeleteEmoji = (id) => {
        let returnGarden = [...this.state.garden]
        returnGarden[id].emoji = ''
        this.setState({garden: returnGarden}) 
    }


    /*handle growth of plant*/
    ChangeEmoji = (id) => {
        let newEmoji = [...this.state.garden]
        setTimeout(() => {
            if(newEmoji[id].emoji === this.state.emoji[0] ){
                newEmoji[id].emoji = this.state.emoji[1]
                this.setState({newEmoji}) 
            }
        }, 2000);
        setTimeout(() => {
            if(newEmoji[id].emoji === this.state.emoji[1]){
                newEmoji[id].emoji = this.state.emoji[2]
                this.setState({newEmoji}) 
            }
        }, 4000);
    }

    render(){
        let ligne = this.state.garden.map((icone, index) =>
            <div className='green' id={icone.id} key={Date.now() + index} onClick={() =>this.DeleteEmoji(icone.id)} >{icone.emoji}</div>
        )
        return (
            <div>
                <div className='wrapper'>
                    {ligne}
                </div>
                <button onClick={()=>this.AddEmoji()}>Plant an Emoji</button>
            </div>
        )
    }
}

export default Grid;