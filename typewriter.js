const sentence = "hello there from lighthouse labs";

function animateTextDelay(sentence) {
  let delay = 0;
    
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    
    delay += 50;
    
  }
        

  setTimeout(() => {
    console.log();
  }, delay);
          
}
animateTextDelay(sentence);
