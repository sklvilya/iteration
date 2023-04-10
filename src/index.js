import Team from './team';
import Character from './character';
import app from './app';

const bowman = new Character('Лучник', 'Bowman');
const demon = new Character('Демон', 'Demon');
const warrior = new Character('Воин', 'Warrior');
const team = new Team();
team.addAll(bowman, demon, warrior);
for (const hero of app(team)) {
  console.log(hero);
}
