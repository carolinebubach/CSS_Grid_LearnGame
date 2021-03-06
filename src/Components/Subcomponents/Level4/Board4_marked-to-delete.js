import React from 'react';
import './Level4_marked-to-delete.css';

import DragonR from '../../../assets/img/dragon_red.png';
import DragonY from '../../../assets/img/dragon_yellow.png';

import FireR from '../../../assets/img/fire_red.png';
import FireY from '../../../assets/img/fire_yellow.png';

const Board4_markedToDelete = ({fire_spell, level}) => {

	//to make classnames dynamic to the level value.
	const levelValue = String(level);

	return (
		<section style={{width:"99%"}}>

			<div className = {"board_fire_basic board_fires" + levelValue} style={fire_spell}>
				<img src={FireR} className="fires vibrate-1" alt="fire"/>
				<img src={FireY} className="fires vibrate-1" alt="fire"/>
			</div>

			<div className = {"board_monster_basic board_monsters" + levelValue}>
				<img src={DragonR} className="monsters puff-in-center" alt="dragon"/>
				<img src={DragonY} className="monsters puff-in-center" alt="dragon"/>
			</div>

		</section>
		);
};

export default Board4_markedToDelete;
