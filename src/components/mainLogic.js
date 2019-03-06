import {getRandom, moveForward, updateScenery, updatePlayerDisposition,
         startCombat, standardCombatRound, postCombatHeal, playerHeal,
       checkPlayerSuccess, describeScenery} from './logic.js'
//I feel like importing these things here and to logic.js might be a bad idea but idk
import {player, creature} from './objects.js'

const playerMoveForward = () => {
  if (!player.isAlive){
    return 'unfortunately, you are dead and cannot take any action\n' +
                 'try refreshing the page for another chance at life';
  }
  let outputText = '';
  if (player.inCombat){
    outputText+= 'you are in combat';
  }
  if (player.reachedDestination){
    return 'you made it. Time to take a break\n' +
           'refresh the page for another journey'
  }

  if (!player.inCombat && player.isAlive){

    outputText+= checkPlayerSuccess();

    let randNum = getRandom(1, 40);

    if (randNum <= 6) {
      outputText+= moveForward();
      startCombat();
      outputText+= `you encounter a ${creature.adjective} ${creature.type} \n`
    }

    if (randNum >= 7 && randNum <= 29) {
      outputText+= moveForward();
    }

    if (randNum >= 30 && randNum <= 36) {
      outputText+= moveForward();
      updateScenery();
      outputText+= describeScenery();
    }

    if (randNum >= 37 && randNum <= 38) {
      outputText+= moveForward();
      updatePlayerDisposition();
      outputText+= player.disposition + '\n';
    }

    if (randNum === 39) {
      outputText+= moveForward();
      outputText+= 'you find some medical supplies\n';
      playerHeal(5);
      outputText+= `your health is ${player.health}/${player.maxHealth} \n`
    }

    if (randNum === 40) {
      outputText+= moveForward();
      outputText+= 'you find a better weapon \n';
      player.attack++;
    }
  }

  return outputText;
}

const playerAttack = () => {
  if (!player.isAlive){
    return 'unfortunately, you are dead and cannot take any action\n' +
                 'try refreshing the page for another chance at life';
  }
  let outputText = '';
  if (!player.inCombat){
    outputText+= 'you are not in combat';
  }

  if (player.inCombat && player.isAlive){
    outputText+= 'you attack\n'
    outputText+= standardCombatRound(player.attack, creature.attack);
  }

  return outputText;
}

const playerDefend = () => {
  if (!player.isAlive){
    return 'unfortunately, you are dead and cannot take any action\n' +
                 'try refreshing the page for another chance at life';
  }
  let outputText = '';
  if (!player.inCombat){
    outputText+= 'you are not in combat';
  }
  if (player.inCombat && player.isAlive){
    outputText+= 'you defend\n';
    outputText+= standardCombatRound(
      player.attack - player.attackPenalty,
      creature.attack - player.defenseValue
    );
  }
  return outputText;
}

const playerFlee = () => {
  if (!player.isAlive){
    return 'unfortunately, you are dead and cannot take any action\n' +
                 'try refreshing the page for another chance at life';
  }
  let outputText = '';
    if (!player.inCombat){
      outputText+= 'you are not in combat';
    }
    if (player.inCombat && player.isAlive) {
      outputText+= 'you flee \n'
      let randNum = getRandom(1, 4);

      //flee fails
      if (randNum === 1) {
        outputText+= `the ${creature.type} catches you\n`
        outputText+= standardCombatRound(0, player.maxHealth - 1);
      }

      //flee succeeds
      if (randNum >= 2) {
        player.inCombat = false;
        outputText+= 'you escape successfully but your ' +
            'flight takes you away from your goal \n'
        outputText+= postCombatHeal();
        player.distanceTraveled = player.distanceTraveled - 5;
      }
    }
  return outputText;
}
 export {playerMoveForward, playerAttack, playerDefend, playerFlee}
