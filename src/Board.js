import React from 'react';
import { Square } from './Square';

export class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'isWhite':true,
            //"+"" represente carre vide, "b" pion noir et "w" pion blanc
            'grid':Array(19).fill().map(x => Array(19).fill("+")),
        };
        this.handleClick = this.handleClick.bind(this);
        this.ResetGrid = this.ResetGrid.bind(this);
    }
    ResetGrid(){
        let newGrid = Array(19).fill().map(x => Array(19).fill("+"));
        this.setState({'grid':newGrid});
    }


    handleClick(x, y){
        if (this.state.grid[x][y] === '+'){
            const g = this.state.grid;
            g[x][y] = this.state.isWhite === true ? 'w':'b';
            this.setState({'grid':g, 'isWhite':!this.state.isWhite})

            function checkDir(x_, y_, color){
                let tracked = 0;
                let _x = x;
                let _y = y;
                while (g[_x] !== undefined && g[_x][_y] === color){
                    tracked += 1;
                    _y += y_;
                    _x += x_;
                }
                return tracked;
            }
            const w_horizontal = checkDir(0, 1, 'w') + checkDir(0, -1, 'w') -1;
            const b_horizontal = checkDir(0, 1, 'b') + checkDir(0, -1, 'b') -1;

            const w_vertical = checkDir(1, 0, 'w') + checkDir(-1, 0, 'w') -1;
            const b_vertical = checkDir(1, 0, 'b') + checkDir(-1, 0, 'b') -1;

            const w_diag1 = checkDir(1, 1, 'w') + checkDir(-1, -1, 'w') -1;
            const b_diag1 = checkDir(1, 1, 'b') + checkDir(-1, -1, 'b') -1;

            const w_diag2 = checkDir(1, 1, 'w') + checkDir(-1, -1, 'w') -1;
            const b_diag2 = checkDir(-1, 1, 'b') + checkDir(1, -1, 'b') -1;


            if (w_horizontal >=  5 || w_vertical >=  5 || w_diag1 >=  5 || w_diag2 >=  5){
                setTimeout(()=>{alert('white wins')}, 1);
                this.ResetGrid()

            }

            if (b_horizontal >= 5 || b_vertical >= 5 || b_diag1 >= 5 || b_diag2 >= 5){
                setTimeout(()=>{alert('black wins')}, 1);
                this.ResetGrid()
            }
        }
    }



    render(){
        const grid = this.state.grid;

        const board = grid.map((row, i) => { return (
            <tr key={"row_"+i}>
                {row.map((col, j) => {
                        const color_ = grid[i][j] === '+' ? '#20555d': grid[i][j] === 'w' ? 'white':'black';

                        return (
                            <Square handleClick={()=>this.handleClick(i,j)} color={color_} key={i+"_"+j} />
                        )
                    }
                )
                }
            </tr>)
        });

        return (
            <div className='div_grid'>
                <div className='sub_div' >
                    <table className='table_grid' cellSpacing="0" >
                        <tbody>
                        {board}
                        </tbody>
                    </table>
                </div>
                <button onClick={this.ResetGrid}>RESET</button>
            </div>
        )
    }
}

export default Board;