import {getRandom, moveForward, updateScenery, updatePlayerDisposition,
         startCombat, standardCombatRound, postCombatHeal, playerHeal,
       checkPlayerSuccess, describeScenery} from './logic.js'
//I feel like importing these things here and to logic.js might be a bad idea but idk
import {player, creature} from './objects.js'

const playerMoveForward = () => {
  if (!player.inCombat){

    checkPlayerSuccess();

    let randNum = getRandom(1, 40);

    if (randNum <= 6) {
      moveForward();
      startCombat();
      console.log(`you encounter a ${creature.adjective} ${creature.type} \n`);
    }

    if (randNum >= 7 && randNum <= 29) {
      moveForward();
      console.log('');
    }

    if (randNum >= 30 && randNum <= 36) {
      moveForward();
      updateScenery();
      describeScenery();
    }

    if (randNum >= 37 && randNum <= 38) {
      moveForward();
      updatePlayerDisposition();
      console.log(player.disposition + '\n');
    }

    if (randNum === 39) {
      moveForward();
      console.log('you find some medical supplies');
      playerHeal(5);
      console.log(`your health is ${player.health}/${player.maxHealth} \n`);
    }

    if (randNum === 40) {
      moveForward();
      console.log('you find a better weapon \n');
      player.attack++;
    }
  }
}

const playerAttack = () => {
  if (player.inCombat){
    console.log('you defend');
    standardCombatRound(
      player.attack - player.attackPenalty,
      creature.attack - player.defenseValue
    );
  }
}

const playerDefend = () => {
  if (player.inCombat){
    console.log('you attack');
    standardCombatRound(player.attack, creature.attack);
  }
}

const playerFlee = () => {

    if (player.inCombat) {
      console.log('you flee');
      let randNum = getRandom(1, 4);

      //flee fails
      if (randNum === 1) {
        console.log(`the ${creature.type} catches you`);
        standardCombatRound(0, player.maxHealth - 1);
      }

      //flee succeeds
      if (randNum >= 2) {
        player.inCombat = false;
        console.log(
          'you escape successfully but your ' +
            'flight takes you away from your goal \n'
        );
        postCombatHeal();
        player.distanceTraveled = player.distanceTraveled - 5;
      }
    }

}
 export {playerMoveForward, playerAttack, playerDefend, playerFlee}
