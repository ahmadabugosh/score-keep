import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from'meteor/meteor';

const players=[{
	_id:'1',
	name:'Ahmad',
	score:99
},{
	_id:'2',
	name:'Muhammed',
	score:100
},{
	_id:'3',
	name:'Hamzah',
	score:98
}];

const renderPlayer= function(playersList) {

return playersList.map(function(player){

return <p key={player._id}>{player.name} has {player.score}</p>;

	});

};

Meteor.startup(function(){

	let name= 'Ahmad';
	let accounteSetting="Get Your Score!"
	let jsx=(
	<div>
	<h1>{accounteSetting}</h1>
		<p>Hello {name}</p>
		<p>This is my paragraph</p>
		{renderPlayer(players)}
	</div>
	);
	ReactDOM.render(jsx, document.getElementById('app'));



});



