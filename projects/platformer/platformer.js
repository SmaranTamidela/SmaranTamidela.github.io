$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
  //  for (let i = 100; i < canvas.width; i += 100) {
  //     createPlatform(i, 0, 1, canvas.height);
  //  }

    // Loop to create horizontal gride lines
  //  for (let i = 100; i < canvas.height; i += 100) {
  //    createPlatform(0, i, canvas.width, 1);
  //  }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(100, 650, 200, 75);
   createPlatform(300, 515, 200, 20);
   createPlatform(400, 400, 200, 20);
createPlatform(800, 400, 50, 50);
createPlatform(1000, 500, 50, 50);
createPlatform(1200, 600, 200, 30);
createPlatform(300, 300, 50, 50);
createPlatform(200, 215, 50, 50);
createPlatform(100, 140, 50, 50);
createPlatform(10, 140, 50, 50);
createPlatform(500, 300, 10, 120);
createPlatform(550, 200, 50, 50);
createPlatform(700, 100, 50, 50);
createPlatform(700, 150, 20, 650);
createPlatform(900, 200, 50, 50);
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable("max", 100, 100, 0.1, 1);
createCollectable("steve", 300, 260, 0.1, 1);
createCollectable("kennedi", 200, 175, 0.1, 1);
createCollectable("grace", 10, 100, 0.1, 1);
createCollectable("steve", 700, 60, 0.1, 1 );
createCollectable("kennedi", 550, 140, 0.1, 1 );
createCollectable("max", 900, 140, 0.1, 1);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

   createCannon("left", 750, 1 );
   createCannon("right", 750, 1 );
   createCannon("top", 330, 1500);
   createCannon("top", 230, 1300);
   createCannon("bottom", 20, 1100)
  createCannon("bottom", 650, 2000);
  createCannon("bottom", 550, 1000);
  createCannon("bottom", 800, 1500);
  createCannon("bottom", 900, 900);
  createCannon("bottom", 750, 900);
  createCannon("top", 1200, 500);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
