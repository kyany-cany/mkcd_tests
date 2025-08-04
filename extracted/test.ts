player.onChat("run", function () {
  agent.teleportToPlayer();
  agent.move(FORWARD, 5);
  agent.move(UP, 1);
  agent.setItem(SNOW, 1, 1);
  agent.setItem(JACK_O_LANTERN, 1, 2);
  //   for (let index = 0; index < 2; index++) {
  //     for (let index = 0; index < 1; index++) {
  //       agent.setSlot(1);
  //       agent.place(DOWN);
  //       agent.move(UP, 1);
  //       agent.place(DOWN);
  //       agent.setSlot(2);
  //       agent.move(UP, 1);
  //       agent.place(DOWN);
  //     }
  //     agent.move(DOWN, 2);
  //     agent.move(RIGHT, 2);
  //   }
});
