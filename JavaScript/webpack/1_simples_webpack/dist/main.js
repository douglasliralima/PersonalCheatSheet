(()=>{var r={639:(r,n,_)=>{var t=_(513),e=_(921),o=_(815);function h(r,n){var _=e.get(r.f||"default"),h=o(r);return h.thoughts=n?"\\":"o",t[n?"say":"think"](r.text||r._.join(" "),r.n?null:r.W)+"\n"+_(h)}n.say=function(r){return h(r,!0)},n.think=function(r){return h(r,!1)},n.list=e.list},513:(r,n,_)=>{function t(r,n,_){var t,s=function(r,n){r=r.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,"");var _=[];if(n)for(var t=0;t<r.length;){var e=r.indexOf("\n",t),o=Math.min(t+n,-1===e?r.length:e);_.push(r.substring(t,o)),t=o,"\n"===r.charAt(t)&&(t+=1)}else _=r.split("\n");return _}(r,n),u=function(r){for(var n=0,_=0,t=r.length;_<t;_+=1)r[_].length>n&&(n=r[_].length);return n}(s);if(1===s.length)t=[" "+o(u),_.only[0]+" "+s[0]+" "+_.only[1]," "+h(u)];else{t=[" "+o(u)];for(var i=0,$=s.length;i<$;i+=1){var a;a=0===i?_.first:i===$-1?_.last:_.middle,t.push(a[0]+" "+e(s[i],u)+" "+a[1])}t.push(" "+h(u))}return t.join("\n")}function e(r,n){return r+new Array(n-r.length+1).join(" ")}function o(r){return new Array(r+3).join("_")}function h(r){return new Array(r+3).join("-")}_(435),n.say=function(r,n){return delimiters={first:["/","\\"],middle:["|","|"],last:["\\","/"],only:["<",">"]},t(r,n,delimiters)},n.think=function(r,n){return delimiters={first:["(",")"],middle:["(",")"],last:["(",")"],only:["(",")"]},t(r,n,delimiters)}},160:(r,n)=>{n.I={"beavis.zen":"##\r\n## Beavis, with Zen philosophy removed.\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts         __------~~-,\r\n    $thoughts      ,'            ,\r\n          /               \\\\\r\n         /                :\r\n        |                  '\r\n        |                  |\r\n        |                  |\r\n         |   _--           |\r\n         _| =-.     .-.   ||\r\n         o|/o/       _.   |\r\n         /  ~          \\\\ |\r\n       (____\\@)  ___~    |\r\n          |_===~~~.`    |\r\n       _______.--~     |\r\n       \\\\________       |\r\n                \\\\      |\r\n              __/-___-- -__\r\n             /            _ \\\\\r\nEOC\r\n","bud-frogs":"##\r\n## The Budweiser frogs\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n          oO)-.                       .-(Oo\r\n         /__  _\\\\                     /_  __\\\\\r\n         \\\\  \\\\(  |     ()~()         |  )/  /\r\n          \\\\__|\\\\ |    (-___-)        | /|__/\r\n          '  '--'    ==`-'==        '--'  '\r\nEOC\r\n",bunny:"##\r\n## A cute little wabbit\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts   \\\\\r\n        \\\\ /\\\\\r\n        ( )\r\n      .( o ).\r\nEOC\r\n",cheese:"##\r\n## The cheese from milk & cheese\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n      _____   _________\r\n     /     \\\\_/         |\r\n    |                 ||\r\n    |                 ||\r\n   |    ###\\\\  /###   | |\r\n   |     0  \\\\/  0    | |\r\n  /|                 | |\r\n / |        <        |\\\\ \\\\\r\n| /|                 | | |\r\n| |     \\\\_______/   |  | |\r\n| |                 | / /\r\n/||                 /|||\r\n   ----------------|\r\n        | |    | |\r\n        ***    ***\r\n       /___\\\\  /___\\\\\r\nEOC\r\n",chick:"$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n        .---.\r\n     _ /     ' .---.\r\n     >|  o    `     `\\\r\n     ` \\       .---._ '._ ,\r\n        '-.;         /`  /'\r\n           \\    '._.'   /\r\n            '.        .'\r\n              `\";--\\_/\r\n       jgs    _/_   |\r\n           -'`/  .--;--\r\n             '    .'\r\n\r\nEOC\r\n","chicken-and-egg":'$the_cow = <<"EOC";\r\n$thoughts\r\n $thoughts\r\n\r\n\r\n              /\'._     _,\r\n              \\   ;__.\'  }\r\n          (`-._;-" _.--.}\'\r\n          /_\'    /`    _}     _.--"""-.\r\n            `.   \\_._.;     .\'         \\\r\n              \'-.__ /      /            |\r\n      jgs      _/  `\\      \\            /\r\n              ^`   ^`       \'._       .\'\r\n                               `"""""`\r\nEOC\r\n',cower:"##\r\n## A cowering cow\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n        ,__, |    | \r\n        (oo)\\\\|    |___\r\n        (__)\\\\|    |   )\\\\_\r\n             |    |_w |  \\\\\r\n             |    |  ||   *\r\n\r\n             Cower....\r\nEOC\r\n",daemon:"##\r\n## 4.4 >> 5.4\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts         ,        ,\r\n    $thoughts       /(        )`\r\n     $thoughts      \\\\ \\\\___   / |\r\n            /- _  `-/  '\r\n           (/\\\\/ \\\\ \\\\   /\\\\\r\n           / /   | `    \\\\\r\n           O O   ) /    |\r\n           `-^--'`<     '\r\n          (_.)  _  )   /\r\n           `.___/`    /\r\n             `-----' /\r\n<----.     __ / __   \\\\\r\n<----|====O)))==) \\\\) /====\r\n<----'    `--' `.__,' \\\\\r\n             |        |\r\n              \\\\       /\r\n        ______( (_  / \\\\______\r\n      ,'  ,-----'   |        \\\\\r\n      `--{__________)        \\\\/\r\nEOC\r\n",default:'$the_cow = <<"EOC";\r\n        $thoughts   ^__^\r\n         $thoughts  ($eyes)\\\\_______\r\n            (__)\\\\       )\\\\/\\\\\r\n             $tongue ||----w |\r\n                ||     ||\r\nEOC\r\n',doge:"##\r\n## Doge\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n\r\n           _                _\r\n          / /.           _-//\r\n         / ///         _-   /\r\n        //_-//=========     /\r\n      _///        //_ ||   ./\r\n    _|                 -__-||\r\n   |  __              - \\\\   \\\r\n  |  |#-       _-|_           |\r\n  |            |#|||       _   |  \r\n |  _==_                       ||\r\n- ==|.=.=|_ =                  |\r\n|  |-|-  ___                  |\r\n|    --__   _                /\r\n||     ===                  |\r\n |                     _. //\r\n  ||_         __-   _-  _|\r\n     \\_______/  ___/  _|\r\n                   --*\r\nEOC\r\n","dragon-and-cow":"##\r\n## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n                       $thoughts                    ^    /^\r\n                        $thoughts                  / \\\\  // \\\\\r\n                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\\r\n                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*\r\n                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |\r\n                            \\@___\\@`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\\r\n                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\\r\n                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |\r\n                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /\r\n                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /\r\n                             ,-}        _      *-.|.-~-.           .~    ~\r\n            \\\\     \\\\__/        `/\\\\      /                 ~-. _ .-~      /\r\n             \\\\____($eyes)           *.   }            {                   /\r\n             (    (--)          .----~-.\\\\        \\\\-`                 .~\r\n             //__\\\\\\\\  \\\\__ Ack!   ///.----..<        \\\\             _ -~\r\n            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~\r\nEOC\r\n",dragon:"##\r\n## The Whitespace Dragon\r\n##\r\n$the_cow = <<EOC;\r\n      $thoughts                    / \\\\  //\\\\\r\n       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\\r\n            /0  0  \\\\__  /    //  | \\\\ \\\\    \r\n           /     /  \\\\/_/    //   |  \\\\  \\\\  \r\n           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ \r\n           //_^_/     \\\\/_ //     |    \\\\    \\\\\r\n        ( //) |        \\\\///      |     \\\\     \\\\\r\n      ( / /) _|_ /   )  //       |      \\\\     _\\\\\r\n    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.\r\n  (( / / )) ,-{        _      `-.|.-~-.           .~         `.\r\n (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\\r\n (( /// ))      `.   {            }                   /      \\\\  \\\\\r\n  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  `. \\\\^-.\r\n             ///.----..>        \\\\             _ -~             `.  ^-`  ^-_\r\n               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~\r\n                                                                  /.-~\r\nEOC\r\n","elephant-in-snake":"##\r\n## Do we need to explain this?\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts              ....       \r\n           ........    .      \r\n          .            .      \r\n         .             .      \r\n.........              .......\r\n..............................\r\n\r\nElephant inside ASCII snake\r\nEOC\r\n",elephant:"##\r\n## An elephant out and about\r\n##\r\n$the_cow = <<EOC;\r\n $thoughts     /\\\\  ___  /\\\\\r\n  $thoughts   // \\\\/   \\\\/ \\\\\\\\\r\n     ((    O O    ))\r\n      \\\\\\\\ /     \\\\ //\r\n       \\\\/  | |  \\\\/ \r\n        |  | |  |  \r\n        |  | |  |  \r\n        |   o   |  \r\n        | |   | |  \r\n        |m|   |m|  \r\nEOC\r\n",eyes:'##\r\n## Evil-looking eyes\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts\r\n     $thoughts\r\n                                   .::!!!!!!!:.\r\n  .!!!!!:.                        .:!!!!!!!!!!!!\r\n  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ \r\n      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P \r\n      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$"  \\$\\$\\$\\$\\$\\$\\$\\$# \r\n      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* \r\n      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R" \r\n        "*\\$bd\\$\\$\\$\\$      \'*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#" \r\n             """"          """"""" \r\nEOC\r\n',"flaming-sheep":"##\r\n## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts            .    .     .   \r\n   $thoughts      .  . .     `  ,     \r\n    $thoughts    .; .  : .' :  :  : . \r\n     $thoughts   i..`: i` i.i.,i  i . \r\n      $thoughts   `,--.|i |i|ii|ii|i: \r\n           U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.||' \r\n           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  \r\n                (\\@\\@\\@\\@\\@\\@\\@\\@)    \r\n                `YY~~~~YY'    \r\n                 ||    ||     \r\nEOC\r\n",ghostbusters:'##\r\n## Ghostbusters!\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts\r\n           $thoughts\r\n            $thoughts          __---__\r\n                    _-       /--______\r\n               __--( /     \\\\ )XXXXXXXXXXX\\\\v.\r\n             .-XXX(   O   O  )XXXXXXXXXXXXXXX-\r\n            /XXX(       U     )        XXXXXXX\\\\\r\n          /XXXXX(              )--_  XXXXXXXXXXX\\\\\r\n         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\\r\n         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX\r\n         XXXXXX__/          XXXXXX         \\\\__----\x3e\r\n ---___  XXX__/          XXXXXX      \\\\__         /\r\n   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=\r\n    \\\\-\\\\    ___/    XXXXXX              \'--- XXXXXX\r\n       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX\r\n         \\\\XXXXXXXXX   \\\\                    /XXXXX/\r\n          \\\\XXXXXX      >                 _/XXXXX/\r\n            \\\\XXXXX--__/              __-- XXXX/\r\n             -XXXXXXXX---------------  XXXXXX-\r\n                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/\r\n                  ""VXXXXXXXXXXXXXXXXXXV""\r\nEOC\r\n',hellokitty:"##\r\n## Hello Kitty\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts\r\n      /\\\\_)o<\r\n     |      \\\\\r\n     | O . O|\r\n      \\\\_____/\r\nEOC\r\n",kiss:"##\r\n## A lovers' empbrace\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n             ,;;;;;;;,\r\n            ;;;;;;;;;;;,\r\n           ;;;;;'_____;'\r\n           ;;;(/))))|((\\\\\r\n           _;;((((((|))))\r\n          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\r\n     .--~(  \\\\ ~))))))))))))\r\n    /     \\\\  `\\\\-(((((((((((\\\\\\\\\r\n    |    | `\\\\   ) |\\\\       /|)\r\n     |    |  `. _/  \\\\_____/ |\r\n      |    , `\\\\~            /\r\n       |    \\\\  \\\\           /\r\n      | `.   `\\\\|          /\r\n      |   ~-   `\\\\        /\r\n       \\\\____~._/~ -_,   (\\\\\r\n        |-----|\\\\   \\\\    ';;\r\n       |      | :;;;'     \\\\\r\n      |  /    |            |\r\n      |       |            |\r\nEOC\r\n",kitty:"##\r\n## A kitten of sorts, I think\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n       (\"`-'  '-/\") .___..--' ' \"`-._\r\n         ` *_ *  )    `-.   (      ) .`-.__. `)\r\n         (_Y_.) ' ._   )   `._` ;  `` -. .-'\r\n      _.. `--'_..-_/   /--' _ .' ,4\r\n   ( i l ),-''  ( l i),'  ( ( ! .-'    \r\nEOC\r\n",koala:"##\r\n## From the canonical koala collection\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts\r\n       ___  \r\n     {~._.~}\r\n      ( Y )\r\n     ()~*~()   \r\n     (_)-(_)   \r\nEOC\r\n",kosh:"##\r\n## It's a Kosh Cow!\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts\r\n     $thoughts\r\n      $thoughts\r\n  ___       _____     ___\r\n /   \\\\     /    /|   /   \\\\\r\n|     |   /    / |  |     |\r\n|     |  /____/  |  |     |     \r\n|     |  |    |  |  |     |\r\n|     |  | {} | /   |     |\r\n|     |  |____|/    |     |\r\n|     |    |==|     |     |\r\n|      \\\\___________/      |\r\n|                         |\r\n|                         |\r\nEOC\r\n","luke-koala":"##\r\n## From the canonical koala collection\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts          .\r\n       ___   //\r\n     {~._.~}// \r\n      ( Y )K/  \r\n     ()~*~()   \r\n     (_)-(_)   \r\n     Luke    \r\n     Sywalker\r\n     koala   \r\nEOC\r\n","mech-and-cow":"                                   ,-----.\r\n                                   |     |\r\n                                ,--|     |-.\r\n                         __,----|  |     | |\r\n                       ,;::     |  `_____' |\r\n                       `._______|    i^i   |\r\n                                `----| |---'| .\r\n                           ,-------._| |== ||//\r\n                           |       |_|P`.  /'/\r\n                           `-------' 'Y Y/'/'\r\n                                     .==\\ /_\\\r\n   ^__^                             /   /'|  `i\r\n   (oo)\\_______                   /'   /  |   |\r\n   (__)\\       )\\/\\             /'    /   |   `i\r\n       ||----w |           ___,;`----'.___L_,-'`\\__\r\n       ||     ||          i_____;----\\.____i\"\"\\____\\\r\n\r\n\r\n\r\n\r\n\r\n",meow:"##\r\n## A meowing tiger?\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts ,   _ ___.--'''`--''//-,-_--_.\r\n      \\\\`\"' ` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\`,_\r\n     /'`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ `-,\r\n    /\\@\"\\\\  ` \\\\ `\\\\ |  | ||/ // | \\\\/  \\\\  `-._`-,_.,\r\n   /  _.-. `.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     `-._._)\r\n   `-'``/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\\r\n        `-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |\r\n          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'\r\n         (((__/(((_.' ((___..-'((__,'\r\nEOC\r\n",milk:"##\r\n## Milk from Milk and Cheese\r\n##\r\n$the_cow = <<EOC;\r\n $thoughts     ____________ \r\n  $thoughts    |__________|\r\n      /           /\\\\\r\n     /           /  \\\\\r\n    /___________/___/|\r\n    |          |     |\r\n    |  ==\\\\ /== |     |\r\n    |   O   O  | \\\\ \\\\ |\r\n    |     <    |  \\\\ \\\\|\r\n   /|          |   \\\\ \\\\\r\n  / |  \\\\_____/ |   / /\r\n / /|          |  / /|\r\n/||\\\\|          | /||\\\\/\r\n    -------------|   \r\n        | |    | | \r\n       <__/    \\\\__>\r\nEOC\r\n",moofasa:"##\r\n## MOOfasa.\r\n##\r\n$the_cow = <<EOC;\r\n       $thoughts    ____\r\n        $thoughts  /    \\\\\r\n          | ^__^ |\r\n          | ($eyes) |______\r\n          | (__) |      )\\\\/\\\\\r\n           \\\\____/|----w |\r\n                ||     ||\r\n\r\n\t         Moofasa\r\nEOC\r\n",moose:"$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts   \\\\_\\\\_    _/_/\r\n    $thoughts      \\\\__/\r\n           ($eyes)\\\\_______\r\n           (__)\\\\       )\\\\/\\\\\r\n            $tongue ||----w |\r\n               ||     ||\r\nEOC\r\n",mutilated:"##\r\n## A mutilated cow, from aspolito@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n       $thoughts   \\\\_______\r\n v__v   $thoughts  \\\\   O   )\r\n ($eyes)      ||----w |\r\n (__)      ||     ||  \\\\/\\\\\r\n  $tongue\r\nEOC\r\n",ren:"##\r\n## Ren \r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n    ____  \r\n   /# /_\\\\_\r\n  |  |/o\\\\o\\\\\r\n  |  \\\\\\\\_/_/\r\n / |_   |  \r\n|  ||\\\\_ ~| \r\n|  ||| \\\\/  \r\n|  |||_    \r\n \\\\//  |    \r\n  ||  |    \r\n  ||_  \\\\   \r\n  \\\\_|  o|  \r\n  /\\\\___/   \r\n /  ||||__ \r\n    (___)_)\r\nEOC\r\n",rooster:"$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n.\".\".\".\r\n(`       `)               _.-=-.\r\n'._.--.-;             .-`  -'  '.\r\n.-'`.o )  \\           /  .-_.--'  `\\\r\n`;---) \\    ;         /  / ;' _-_.-' `\r\n`;\"`  ;    \\        ; .  .'   _-' \\\r\n(    )    |        |  / .-.-'    -`\r\n '-.-'     \\       | .' ` '.-'-\\`\r\n  /_./\\_.|\\_\\      ;  ' .'-'.-.\r\n  /         '-._    \\` /  _;-,\r\n |         .-=-.;-._ \\  -'-,\r\n \\        /      `\";`-`,-\"`)\r\n  \\       \\     '-- `\\.\\\r\n   '.      '._ '-- '--'/\r\n     `-._     `'----'`;\r\n         `\"\"\"--.____,/\r\n                \\\\  \\\r\n                // /`\r\n            ___// /__\r\n  jgs     (`(`(---\"-`)\r\n\r\nEOC\r\n",satanic:"##\r\n## Satanic cow, source unknown.\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts  (__)  \r\n         (\\\\/)  \r\n  /-------\\\\/    \r\n / | 666 ||    \r\n*  ||----||      \r\n   ~~    ~~      \r\nEOC\r\n",sheep:"##\r\n## The non-flaming sheep.\r\n##\r\n$the_cow = <<EOC\r\n  $thoughts\r\n   $thoughts\r\n       __     \r\n      U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.\r\n      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)\r\n           (\\@\\@\\@\\@\\@\\@\\@\\@)\r\n           `YY~~~~YY'\r\n            ||    ||\r\nEOC\r\n",skeleton:"##\r\n## This 'Scowleton' brought to you by one of \r\n## {appel,kube,rowe}@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts      (__)      \r\n           $thoughts     /$eyes|  \r\n            $thoughts   (_\"_)*+++++++++*\r\n                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\\r\n                   I[I|I|||||I I `\r\n                   I`I'///'' I I\r\n                   I I       I I\r\n                   ~ ~       ~ ~\r\n                     Scowleton\r\nEOC\r\n",small:'##\r\n## A small cow, artist unknown\r\n##\r\n$eyes = ".." unless ($eyes);\r\n$the_cow = <<EOC;\r\n       $thoughts   ,__,\r\n        $thoughts  ($eyes)____\r\n           (__)    )\\\\\r\n            $tongue||--|| *\r\nEOC\r\n',squirrel:"$the_cow = <<EOC;\r\n  $thoughts\r\n     $thoughts\r\n                  _ _\r\n       | \\__/|  .~    ~.\r\n       /$eyes `./      .'\r\n      {o__,   \\    {\r\n        / .  . )    \\\r\n        `-` '-' \\    }\r\n       .(   _(   )_.'\r\n      '---.~_ _ _|\r\n                                                     \r\nEOC\r\n",stegosaurus:"##\r\n## A stegosaur with a top hat?\r\n##\r\n$the_cow = <<EOC;\r\n$thoughts                             .       .\r\n $thoughts                           / `.   .' \" \r\n  $thoughts                  .---.  <    > <    >  .---.\r\n   $thoughts                 |    \\\\  \\\\ - ~ ~ - /  /    |\r\n         _____          ..-~             ~-..-~\r\n        |     |   \\\\~~~\\\\.'                    `./~~~/\r\n       ---------   \\\\__/                        \\\\__/\r\n      .'  O    \\\\     /               /       \\\\  \" \r\n     (_____,    `._.'               |         }  \\\\/~~~/\r\n      `----.          /       }     |        /    \\\\__/\r\n            `-.      |       /      |       /      `. ,~~|\r\n                ~-.__|      /_ - ~ ^|      /- _      `..-'   \r\n                     |     /        |     /     ~-.     `-. _  _  _\r\n                     |_____|        |_____|         ~ - . _ _ _ _ _>\r\nEOC\r\n",stimpy:"##\r\n## Stimpy!\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts     .    _  .    \r\n   $thoughts    |\\\\_|/__/|    \r\n       / / \\\\/ \\\\  \\\\  \r\n      /__|O||O|__ \\\\ \r\n     |/_ \\\\_/\\\\_/ _\\\\ |  \r\n     | | (____) | ||  \r\n     \\\\/\\\\___/\\\\__/  // \r\n     (_/         ||\r\n      |          ||\r\n      |          ||\\\\   \r\n       \\\\        //_/  \r\n        \\\\______//\r\n       __ || __||\r\n      (____(____)\r\nEOC\r\n",supermilker:"##\r\n## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts   ^__^\r\n   $thoughts  ($eyes)\\\\_______        ________\r\n      (__)\\\\       )\\\\/\\\\    |Super |\r\n       $tongue ||----W |       |Milker|\r\n          ||    UDDDDDDDDD|______|\r\nEOC\r\n",surgery:"##\r\n## A cow operation, artist unknown\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts           \\\\  / \r\n           $thoughts           \\\\/  \r\n               (__)    /\\\\         \r\n               ($eyes)   O  O        \r\n               _\\\\/_   //         \r\n         *    (    ) //       \r\n          \\\\  (\\\\\\\\    //       \r\n           \\\\(  \\\\\\\\    )                              \r\n            (   \\\\\\\\   )   /\\\\                          \r\n  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     \r\n |\\\\__[=======______//________)__\\\\                    \r\n \\\\|_______________//____________|                    \r\n     |||      || //||     |||\r\n     |||      || @.||     |||                        \r\n      ||      \\\\/  .\\\\/      ||                        \r\n                 . .                                 \r\n                '.'.`                                \r\n\r\n            COW-OPERATION                           \r\nEOC\r\n",turkey:"##\r\n## Turkey!\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts                                  ,+*^^*+___+++_\r\n   $thoughts                           ,*^^^^              )\r\n    $thoughts                       _+*                     ^**+_\r\n     $thoughts                    +^       _ _++*+_+++_,         )\r\n              _+^^*+_    (     ,+*^ ^          \\\\+_        )\r\n             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\\r\n            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )\r\n           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /\r\n          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\\r\n           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )\r\n            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /\r\n          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^\r\n         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)\r\n          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^\r\n          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)\r\n           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)\r\n             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\\r\n                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\\r\n                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)\r\n                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)\r\n                      ^^^ ^^ ^^^ ^\r\nEOC\r\n",turtle:"##\r\n## A mysterious turtle...\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts                                  ___-------___\r\n     $thoughts                             _-~~             ~~-_\r\n      $thoughts                         _-~                    /~-_\r\n             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\\r\n           /|  O|| O|        /      \\\\_______________/        \\\\\r\n          | |___||__|      /       /                \\\\          \\\\\r\n          |          \\\\    /      /                    \\\\          \\\\\r\n          |   (_______) /______/                        \\\\_________ \\\\\r\n          |         / /         \\\\                      /            \\\\\r\n           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /\r\n             \\\\         ||           \\\\______________/      _-_       //\\\\__//\r\n               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/\r\n                 ~-----||====/~     |==================|       |/~~~~~\r\n                  (_(__/  ./     /                    \\\\_\\\\      \\\\.\r\n                         (_(___/                         \\\\_____)_)\r\nEOC\r\n",tux:"##\r\n## TuX\r\n## (c) pborys@p-soft.silesia.linux.org.pl \r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n        .--.\r\n       |o_o |\r\n       |:_/ |\r\n      //   \\\\ \\\\\r\n     (|     | )\r\n    /'\\\\_   _/`\\\\\r\n    \\\\___)=(___/\r\n\r\nEOC\r\n","vader-koala":"##\r\n## Another canonical koala?\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts        .\r\n     .---.  //\r\n    Y|o o|Y// \r\n   /_(i=i)K/ \r\n   ~()~*~()~  \r\n    (_)-(_)   \r\n\r\n     Darth \r\n     Vader    \r\n     koala        \r\nEOC\r\n",vader:"##\r\n## Cowth Vader, from geordan@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n        $thoughts    ,-^-.\r\n         $thoughts   !oYo!\r\n          $thoughts /./=\\\\.\\\\______\r\n               ##        )\\\\/\\\\\r\n                ||-----w||\r\n                ||      ||\r\n\r\n               Cowth Vader\r\nEOC\r\n",www:"##\r\n## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n        $thoughts   ^__^\r\n         $thoughts  ($eyes)\\\\_______\r\n            (__)\\\\       )\\\\/\\\\\r\n             $tongue ||--WWW |\r\n                ||     ||\r\nEOC\r\n"}},921:(r,n,_)=>{_(470);var t=_(352),e=_(160).I;n.get=function(r){var n=e[r];return n||(n=e.default),function(r){return t(n,r)}},n.list=function(r){var n=[];for(var _ in e)n.push(_);r(null,n)}},815:r=>{var n={b:{eyes:"==",tongue:"  "},d:{eyes:"xx",tongue:"U "},g:{eyes:"$$",tongue:"  "},p:{eyes:"@@",tongue:"  "},s:{eyes:"**",tongue:"U "},t:{eyes:"--",tongue:"  "},w:{eyes:"OO",tongue:"  "},y:{eyes:"..",tongue:"  "}};r.exports=function(r){for(var _ in n)if(!0===r[_])return n[_];return{eyes:r.e||"oo",tongue:r.T||"  "}}},352:r=>{function n(r){return r&&r.replace?r.replace(/\$/g,"$$$$"):r}r.exports=function(r,_){var t=n(_.eyes),e=n(_.tongue);return-1!==r.indexOf("$the_cow")&&(r=function(r){r=r.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,"");var n=/\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(r);return n?n[1].replace(/\\{2}/g,"\\").replace(/\\@/g,"@").replace(/\\\$/g,"$"):(console.error("Cannot parse cow file\n",r),r)}(r)),r.replace(/\$thoughts/g,_.thoughts).replace(/\$eyes/g,t).replace(/\$tongue/g,e).replace(/\$\{eyes\}/g,t).replace(/\$\{tongue\}/g,e)}},435:(r,n)=>{n.endianness=function(){return"LE"},n.hostname=function(){return"undefined"!=typeof location?location.hostname:""},n.loadavg=function(){return[]},n.uptime=function(){return 0},n.freemem=function(){return Number.MAX_VALUE},n.totalmem=function(){return Number.MAX_VALUE},n.cpus=function(){return[]},n.type=function(){return"Browser"},n.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},n.networkInterfaces=n.getNetworkInterfaces=function(){return{}},n.arch=function(){return"javascript"},n.platform=function(){return"browser"},n.tmpdir=n.tmpDir=function(){return"/tmp"},n.EOL="\n",n.homedir=function(){return"/"}},470:r=>{"use strict";function n(r){if("string"!=typeof r)throw new TypeError("Path must be a string. Received "+JSON.stringify(r))}function _(r,n){for(var _,t="",e=0,o=-1,h=0,s=0;s<=r.length;++s){if(s<r.length)_=r.charCodeAt(s);else{if(47===_)break;_=47}if(47===_){if(o===s-1||1===h);else if(o!==s-1&&2===h){if(t.length<2||2!==e||46!==t.charCodeAt(t.length-1)||46!==t.charCodeAt(t.length-2))if(t.length>2){var u=t.lastIndexOf("/");if(u!==t.length-1){-1===u?(t="",e=0):e=(t=t.slice(0,u)).length-1-t.lastIndexOf("/"),o=s,h=0;continue}}else if(2===t.length||1===t.length){t="",e=0,o=s,h=0;continue}n&&(t.length>0?t+="/..":t="..",e=2)}else t.length>0?t+="/"+r.slice(o+1,s):t=r.slice(o+1,s),e=s-o-1;o=s,h=0}else 46===_&&-1!==h?++h:h=-1}return t}var t={resolve:function(){for(var r,t="",e=!1,o=arguments.length-1;o>=-1&&!e;o--){var h;o>=0?h=arguments[o]:(void 0===r&&(r=process.cwd()),h=r),n(h),0!==h.length&&(t=h+"/"+t,e=47===h.charCodeAt(0))}return t=_(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(r){if(n(r),0===r.length)return".";var t=47===r.charCodeAt(0),e=47===r.charCodeAt(r.length-1);return 0!==(r=_(r,!t)).length||t||(r="."),r.length>0&&e&&(r+="/"),t?"/"+r:r},isAbsolute:function(r){return n(r),r.length>0&&47===r.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var r,_=0;_<arguments.length;++_){var e=arguments[_];n(e),e.length>0&&(void 0===r?r=e:r+="/"+e)}return void 0===r?".":t.normalize(r)},relative:function(r,_){if(n(r),n(_),r===_)return"";if((r=t.resolve(r))===(_=t.resolve(_)))return"";for(var e=1;e<r.length&&47===r.charCodeAt(e);++e);for(var o=r.length,h=o-e,s=1;s<_.length&&47===_.charCodeAt(s);++s);for(var u=_.length-s,i=h<u?h:u,$=-1,a=0;a<=i;++a){if(a===i){if(u>i){if(47===_.charCodeAt(s+a))return _.slice(s+a+1);if(0===a)return _.slice(s+a)}else h>i&&(47===r.charCodeAt(e+a)?$=a:0===a&&($=0));break}var X=r.charCodeAt(e+a);if(X!==_.charCodeAt(s+a))break;47===X&&($=a)}var g="";for(a=e+$+1;a<=o;++a)a!==o&&47!==r.charCodeAt(a)||(0===g.length?g+="..":g+="/..");return g.length>0?g+_.slice(s+$):(s+=$,47===_.charCodeAt(s)&&++s,_.slice(s))},_makeLong:function(r){return r},dirname:function(r){if(n(r),0===r.length)return".";for(var _=r.charCodeAt(0),t=47===_,e=-1,o=!0,h=r.length-1;h>=1;--h)if(47===(_=r.charCodeAt(h))){if(!o){e=h;break}}else o=!1;return-1===e?t?"/":".":t&&1===e?"//":r.slice(0,e)},basename:function(r,_){if(void 0!==_&&"string"!=typeof _)throw new TypeError('"ext" argument must be a string');n(r);var t,e=0,o=-1,h=!0;if(void 0!==_&&_.length>0&&_.length<=r.length){if(_.length===r.length&&_===r)return"";var s=_.length-1,u=-1;for(t=r.length-1;t>=0;--t){var i=r.charCodeAt(t);if(47===i){if(!h){e=t+1;break}}else-1===u&&(h=!1,u=t+1),s>=0&&(i===_.charCodeAt(s)?-1==--s&&(o=t):(s=-1,o=u))}return e===o?o=u:-1===o&&(o=r.length),r.slice(e,o)}for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!h){e=t+1;break}}else-1===o&&(h=!1,o=t+1);return-1===o?"":r.slice(e,o)},extname:function(r){n(r);for(var _=-1,t=0,e=-1,o=!0,h=0,s=r.length-1;s>=0;--s){var u=r.charCodeAt(s);if(47!==u)-1===e&&(o=!1,e=s+1),46===u?-1===_?_=s:1!==h&&(h=1):-1!==_&&(h=-1);else if(!o){t=s+1;break}}return-1===_||-1===e||0===h||1===h&&_===e-1&&_===t+1?"":r.slice(_,e)},format:function(r){if(null===r||"object"!=typeof r)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof r);return function(r,n){var _=n.dir||n.root,t=n.base||(n.name||"")+(n.ext||"");return _?_===n.root?_+t:_+"/"+t:t}(0,r)},parse:function(r){n(r);var _={root:"",dir:"",base:"",ext:"",name:""};if(0===r.length)return _;var t,e=r.charCodeAt(0),o=47===e;o?(_.root="/",t=1):t=0;for(var h=-1,s=0,u=-1,i=!0,$=r.length-1,a=0;$>=t;--$)if(47!==(e=r.charCodeAt($)))-1===u&&(i=!1,u=$+1),46===e?-1===h?h=$:1!==a&&(a=1):-1!==h&&(a=-1);else if(!i){s=$+1;break}return-1===h||-1===u||0===a||1===a&&h===u-1&&h===s+1?-1!==u&&(_.base=_.name=0===s&&o?r.slice(1,u):r.slice(s,u)):(0===s&&o?(_.name=r.slice(1,h),_.base=r.slice(1,u)):(_.name=r.slice(s,h),_.base=r.slice(s,u)),_.ext=r.slice(h,u)),s>0?_.dir=r.slice(0,s-1):o&&(_.dir="/"),_},sep:"/",delimiter:":",win32:null,posix:null};t.posix=t,r.exports=t}},n={};function _(t){var e=n[t];if(void 0!==e)return e.exports;var o=n[t]={exports:{}};return r[t](o,o.exports,_),o.exports}(()=>{"use strict";var r=_(639);var n;document.querySelector("#box").innerText=(n="Webpack is great!",r.say({text:n}))})()})();