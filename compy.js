const help = '';
const About = '';



jQuery(function($, undefined) {
 $('#term_demo').terminal(function(command) {
   if (command == 'help') {
     this.echo("Why the Dev Spotlight? type: Manifesto")
     this.echo("Season One Vital Stats - type: About")
     this.echo("Who is RealToughCandy? type: RealToughCandy\n");
   }



   if (command.toLowerCase() == 'michael'){
     //window.open('Michael.html', '_self',false)
     window.location.href = "Michael.html";


   }

   if (command.toLowerCase() == 'elise'){
     //window.open('Elise.html', '_self',false)
     window.location.href = "Elise.html";

   }



   if (command.toLowerCase() == 'casadaro'){
     //window.open('Casadaro.html', '_self',false)
     window.location.href = "Casadaro.html";

   }

   if (command.toLowerCase() == 'jim'){
     //window.open('Jim.html', '_self',false)
     window.location.href = "Jim.html";

   }

   if (command.toLowerCase() == 'jim'){
    // window.open('Mirza.html', '_self',false)
    window.location.href = "Mirza.html";

   }

   if (command.toLowerCase() == 'kamea'){
     //window.open('Kamea.html', '_self',false)
     window.location.href = "Kamea.html";

   }

   if (command.toLowerCase() == 'about'){
     this.echo("\n")
     this.echo("In Season 1 of Dev Spotlight, Elise confesses her recent love for Wordpress, while Michael reveals his first interaction was with the Comodore Vic-20. What will Mirza think while still wrapped up in his own noble pursuit of Angular? It gets even more compelling as geographically-transplanted Casadaro reveals that he questions everything. Meanwhile, Dr. Kamea deploys a secret formula for managing tech teams as he transitions from dentist to developer and Jim is just straight-up MEAN. It’s heating up here on Season One’s Dev Spotlight!")
   }


   if (command.toLowerCase() == 'manifesto'){
     //window.open('about.html', '_self',false)
     window.location.href = "about.html";
}

if (command.toLowerCase() == 'realtoughcandy'){
  this.echo("\n")
  this.echo("I’m known as RealToughCandy on YouTube, but you can call me Candy. I got my start in the feral ’90s underbelly of web culture and actually lived to tell about it. Today, I develop the internet. I freaking love the 'net.  \nEmail me: realtoughcandy@gmail.com.\n\n")
}

   else {
     if (command !== '') {
       try {
         var result = window.eval(command);
         if (result !== undefined) {
           this.echo(new String(result));
         }
       } catch(e) {
         this.error(new String(e));
       }
     } else {
       this.echo('No input provided. Please input a command.');
     }
   }


 }, {
 greetings: 'Dev choices:\nCasadaro Michael Mirza Elise Kamea Jim ',

 prompt: 'enter name or type "help" for options> ',
 color: 'green'
 });
});

