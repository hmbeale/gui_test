import {player, playerDispositions, creature, creatureSizes, creatureTypes, scenery,
        sceneryAdjectives, sceneryTypes, distNeeded} from './objects.js'

const playerMoveForward = () => {
  if (!player.inCombat){

    if (player.distanceTraveled >= distNeeded) {
      console.log('you made it to your destination, congratulations');
      process.exit();
    }

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
      console.log(`you see a ${scenery.adjective} ${scenery.type} \n`);
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

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const moveForward = () => {
  console.log('you move forward');
  player.distanceTraveled++;
};

const updateScenery = () => {
  scenery.type = sceneryTypes[getRandom(0, sceneryTypes.length - 1)];
  scenery.adjective =
    sceneryAdjectives[getRandom(0, sceneryAdjectives.length - 1)];
};

const updatePlayerDisposition = () => {
  player.disposition =
    playerDispositions[getRandom(0, playerDispositions.length - 1)];
};

const startCombat = () => {
  createCreature();
  player.combatStartHealth = player.health;
  player.inCombat = true;
};

const createCreature = () => {
  let randHealth = getRandom(1, 4);
  let randAttack = getRandom(1, 4);
  //lowest health should take about two attacks (3-7 hp)
  //highest health should take about five attacks (15-19 hp)
  creature.health = getRandom(randHealth * 4 - 1, randHealth * 4 + 3);
  creature.adjective = creatureSizes[randHealth - 1];

  creature.attack = randAttack;
  creature.type = creatureTypes[randAttack - 1];
};

const standardCombatRound = (playerAttack, creatureAttack) => {
  resolveCombatDamage(playerAttack, creatureAttack);
  if (creature.health <= 0) {
    slaycreature();
  }
  if (player.health <= 0) {
    playerCombatDeath();
  }
  if (!player.inCombat) {
    postCombatHeal();
  }
};

const resolveCombatDamage = (playerAttack, creatureAttack) => {
  console.log(`the ${creature.type} attacks`);
  creature.health = creature.health - playerAttack;
  //makes sure player isn't healed by negative damage
  if (creatureAttack > 0) {
    player.health = player.health - creatureAttack;
  }
  console.log(`your health is ${player.health}/${player.maxHealth} \n`);
};

const slaycreature = () => {
  console.log(`you slay the ${creature.type} \n`);
  player.inCombat = false;
  creature.attack = 0;
};

const playerCombatDeath = () => {
  console.log(`the ${creature.type} slays you`);
  process.exit();
};

const postCombatHeal = () => {
  if (player.health < player.combatStartHealth) {
    console.log('you bind your wounds as best you can');
  }
  playerHeal(player.combatHealValue);
  //fighting shouldn't make you healthier than when you started
  if (player.health > player.combatStartHealth) {
    player.health = player.combatStartHealth;
  }
  console.log(`your health is ${player.health}/${player.maxHealth} \n`);
};

const playerHeal = (healAmount) => {
  player.health = player.health + healAmount;
  if (player.health > player.maxHealth) {
    player.health = player.maxHealth;
  }
};

export { getRandom, moveForward, updateScenery, updatePlayerDisposition,
         startCombat, createCreature, standardCombatRound, resolveCombatDamage,
         slaycreature, playerCombatDeath, postCombatHeal, playerHeal,

         playerMoveForward, playerAttack, playerDefend, playerFlee};
